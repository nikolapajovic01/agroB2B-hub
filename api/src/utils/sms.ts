import twilio from 'twilio';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type TwilioClient = twilio.Twilio;
type MockSMS = {
  sendMessage: (message: string, to: string) => Promise<{ success: boolean }>;
};

// Mock SMS service for development
const mockSMS: MockSMS = {
  sendMessage: async (message: string, to: string) => {
    console.log('📱 [Mock SMS] To:', to);
    console.log('📱 [Mock SMS] Message:', message);
    return { success: true };
  }
};

// Use real Twilio in production, mock in development
const smsService: TwilioClient | MockSMS = process.env.NODE_ENV === 'production' 
  ? twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN)
  : mockSMS;

const isTwilioClient = (service: TwilioClient | MockSMS): service is TwilioClient => {
  return 'messages' in service;
};

export const sendSMSNotification = async (
  phoneNumber: string,
  product: string,
  offerDetails: {
    quantity: number;
    price: string;
    city: string;
    companyName: string;
  }
) => {
  try {
    const message = `Nova ponuda za ${product}!\n\n` +
      `Količina: ${offerDetails.quantity} kg\n` +
      `Cena: ${offerDetails.price} €/kg\n` +
      `Lokacija: ${offerDetails.city}\n` +
      `Od: ${offerDetails.companyName}\n\n` +
      `Pogledajte ponudu: ${process.env.FRONTEND_URL}/sell-offers`;

    if (isTwilioClient(smsService)) {
      await smsService.messages.create({
        body: message,
        to: phoneNumber,
        from: process.env.TWILIO_PHONE_NUMBER,
      });
    } else {
      await smsService.sendMessage(message, phoneNumber);
    }
  } catch (error) {
    console.error('Error sending SMS:', error);
    throw error;
  }
};

export const notifyInterestedCompanies = async (
  productId: number,
  offerDetails: {
    quantity: number;
    price: string;
    city: string;
    companyName: string;
    companyId: number;
  }
) => {
  try {
    // Find all companies interested in this product
    const interestedCompanies = await prisma.productInterest.findMany({
      where: {
        productId,
        type: 'subscription',
        status: 'active',
      },
      include: {
        product: true, // Include product to get the name
        company: {
          include: {
            users: true // Get all users of the company
          }
        }
      }
    });

    // Send SMS to all users of each interested company who have phone numbers
    for (const interest of interestedCompanies) {
      for (const user of interest.company.users) {
        if (user.phoneNumber) {
          await sendSMSNotification(
            user.phoneNumber,
            interest.product.name, // Use product name from the relation
            offerDetails
          );
        }
      }
    }
  } catch (error) {
    console.error('Error notifying companies:', error);
    throw error;
  }
}; 