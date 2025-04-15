import React, { useState } from 'react';

const transactionData = [

  {
    "date": "2024-04-24",
    "product": "DUBOKO ZAMRZNUTA MALINA 350G",
    "country": "United Arab Emirates",
    "quantity": 10368.0,
    "cost": 2268.0,
    "price": 4.57
  },
  {
    "date": "2024-04-05",
    "product": "RASPBERRY 400 GR - IQF DUBOKO ZAMRZNUTA MALINA",
    "country": "United Arab Emirates",
    "quantity": 7768.8,
    "cost": 936.0,
    "price": 8.3
  },
  {
    "date": "2024-04-24",
    "product": "D/Z MALINA 300G",
    "country": "Austria",
    "quantity": 9777.6,
    "cost": 4320.0,
    "price": 2.26
  },
  {
    "date": "2024-04-06",
    "product": "D/Z MALINA 300G",
    "country": "Austria",
    "quantity": 19621.44,
    "cost": 8640.0,
    "price": 2.27
  },
  {
    "date": "2024-04-29",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 20X500GR;6X500GR",
    "country": "Austria",
    "quantity": 36372.6,
    "cost": 14940.0,
    "price": 2.43
  },
  {
    "date": "2024-04-17",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 20X500GR",
    "country": "Austria",
    "quantity": 17820.0,
    "cost": 43659.0,
    "price": 2.45
  },
  {
    "date": "2024-04-19",
    "product": "DZ MALINA (S-BUDGET), PAK. 500G",
    "country": "Austria",
    "quantity": 37276.2,
    "cost": 12636.0,
    "price": 2.95
  },
  {
    "date": "2024-04-23",
    "product": "DZ MALINA (S-BUDGET), PAK. 500G",
    "country": "Austria",
    "quantity": 47312.1,
    "cost": 16038.0,
    "price": 2.95
  },
  {
    "date": "2024-04-01",
    "product": "DZ MALINA (S-BUDGET), PAK. 500G",
    "country": "Austria",
    "quantity": 34408.8,
    "cost": 11664.0,
    "price": 2.95
  },
  {
    "date": "2024-04-24",
    "product": "DZ MALINA",
    "country": "Austria",
    "quantity": 35280.0,
    "cost": 11760.0,
    "price": 3.0
  },
  {
    "date": "2024-04-12",
    "product": "DUBOKO ZAMRZNUTA MALINA 250G SPAR",
    "country": "Austria",
    "quantity": 21657.6,
    "cost": 5760.0,
    "price": 3.76
  },
  {
    "date": "2024-04-24",
    "product": "DUBOKO ZAMRZNUTA MALINA 250G SPAR",
    "country": "Austria",
    "quantity": 9024.0,
    "cost": 2400.0,
    "price": 3.76
  },
  {
    "date": "2024-04-16",
    "product": "D/Z ORGANIK MALINA GAJENA 95:5",
    "country": "Austria",
    "quantity": 44352.0,
    "cost": 10080.0,
    "price": 4.4
  },
  {
    "date": "2024-04-17",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE 6X1KG",
    "country": "Australia",
    "quantity": 720.0,
    "cost": 2592.0,
    "price": 3.6
  },
  {
    "date": "2024-04-10",
    "product": "D.Z. MALINA, PAK. 8X300 G",
    "country": "Australia",
    "quantity": 76826.88,
    "cost": 14774.4,
    "price": 5.2
  },
  {
    "date": "2024-04-22",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "Belgium",
    "quantity": 24897.6,
    "cost": 10080.0,
    "price": 2.47
  },
  {
    "date": "2024-04-11",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2.5KG",
    "country": "Belgium",
    "quantity": 17186.4,
    "cost": 6930.0,
    "price": 2.48
  },
  {
    "date": "2024-04-11",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X1KG",
    "country": "Belgium",
    "quantity": 630.0,
    "cost": 1600.2,
    "price": 2.54
  },
  {
    "date": "2024-04-15",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X300GR;20X500GR",
    "country": "Belgium",
    "quantity": 45577.22,
    "cost": 17550.0,
    "price": 2.6
  },
  {
    "date": "2024-04-20",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 6X750GR",
    "country": "Belgium",
    "quantity": 22346.28,
    "cost": 8464.5,
    "price": 2.64
  },
  {
    "date": "2024-04-02",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE:6X750GR",
    "country": "Belgium",
    "quantity": 15289.56,
    "cost": 5791.5,
    "price": 2.64
  },
  {
    "date": "2024-04-08",
    "product": "D\\Z MALINA \"ROLEND-WHOLE 750G\"",
    "country": "Belgium",
    "quantity": 38811.96,
    "cost": 14701.5,
    "price": 2.64
  },
  {
    "date": "2024-04-09",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 6X750GR",
    "country": "Belgium",
    "quantity": 16465.68,
    "cost": 6237.0,
    "price": 2.64
  },
  {
    "date": "2024-04-13",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 6X750GR",
    "country": "Belgium",
    "quantity": 15289.56,
    "cost": 5791.5,
    "price": 2.64
  },
  {
    "date": "2024-04-27",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 6X750GR",
    "country": "Belgium",
    "quantity": 12937.32,
    "cost": 4900.5,
    "price": 2.64
  },
  {
    "date": "2024-04-27",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X500GR",
    "country": "Belgium",
    "quantity": 43124.4,
    "cost": 16335.0,
    "price": 2.64
  },
  {
    "date": "2024-04-30",
    "product": "D\\Z MALINA \"ROLEND-WHOLE 750G\"",
    "country": "Belgium",
    "quantity": 38811.96,
    "cost": 14701.5,
    "price": 2.64
  },
  {
    "date": "2024-04-13",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:6X750GR",
    "country": "Belgium",
    "quantity": 37778.4,
    "cost": 14256.0,
    "price": 2.65
  },
  {
    "date": "2024-04-02",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X300GR; 18X500GR; 20X500GR",
    "country": "Belgium",
    "quantity": 43068.33,
    "cost": 16020.0,
    "price": 2.69
  },
  {
    "date": "2024-04-09",
    "product": "DZ MALINA (SYSTEME U), PAK. 5X1KG",
    "country": "Belgium",
    "quantity": 53460.0,
    "cost": 19800.0,
    "price": 2.7
  },
  {
    "date": "2024-04-05",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5; 5X1KG",
    "country": "Belgium",
    "quantity": 9020.0,
    "cost": 24492.6,
    "price": 2.72
  },
  {
    "date": "2024-04-16",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE 5X1KG",
    "country": "Belgium",
    "quantity": 36524.4,
    "cost": 13200.0,
    "price": 2.77
  },
  {
    "date": "2024-04-25",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE 5X1KG",
    "country": "Belgium",
    "quantity": 36524.4,
    "cost": 13200.0,
    "price": 2.77
  },
  {
    "date": "2024-04-19",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE 10X250GR",
    "country": "Belgium",
    "quantity": 44985.6,
    "cost": 15840.0,
    "price": 2.84
  },
  {
    "date": "2024-04-11",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 12X300GR",
    "country": "Belgium",
    "quantity": 2160.0,
    "cost": 6177.6,
    "price": 2.86
  },
  {
    "date": "2024-04-18",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE:5X1KG",
    "country": "Belgium",
    "quantity": 14625.0,
    "cost": 44460.0,
    "price": 3.04
  },
  {
    "date": "2024-04-22",
    "product": "DZ MALINA (CROPS, PICARD), PAK. 750G, 1KG",
    "country": "Belgium",
    "quantity": 34213.32,
    "cost": 10975.5,
    "price": 3.12
  },
  {
    "date": "2024-04-11",
    "product": "DUBOKO ZAMRZNUTA MALINA 300G",
    "country": "Belgium",
    "quantity": 25549.3,
    "cost": 8068.2,
    "price": 3.17
  },
  {
    "date": "2024-04-29",
    "product": "DZ  MALINA (PICARD, WHOLE),  PAK. 750G, 2.5KG",
    "country": "Belgium",
    "quantity": 40870.34,
    "cost": 12119.0,
    "price": 3.37
  },
  {
    "date": "2024-04-20",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X500GR",
    "country": "Belgium",
    "quantity": 5760.0,
    "cost": 19584.0,
    "price": 3.4
  },
  {
    "date": "2024-04-04",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 5X1KG",
    "country": "Belgium",
    "quantity": 56595.0,
    "cost": 16500.0,
    "price": 3.43
  },
  {
    "date": "2024-04-12",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 5X1KG",
    "country": "Belgium",
    "quantity": 56595.0,
    "cost": 16500.0,
    "price": 3.43
  },
  {
    "date": "2024-04-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 5X1KG",
    "country": "Belgium",
    "quantity": 56595.0,
    "cost": 16500.0,
    "price": 3.43
  },
  {
    "date": "2024-04-26",
    "product": "DUBOKO ZAMRZNUTA MALINA, PAK 4X2,5KG",
    "country": "Belgium",
    "quantity": 71782.4,
    "cost": 20480.0,
    "price": 3.51
  },
  {
    "date": "2024-04-05",
    "product": "DZ MALINA (COLES), PAK. 500G",
    "country": "Belgium",
    "quantity": 38702.66,
    "cost": 9009.0,
    "price": 4.3
  },
  {
    "date": "2024-04-06",
    "product": "DZ MALINA (COLES), PAK. 500G",
    "country": "Belgium",
    "quantity": 77405.33,
    "cost": 18018.0,
    "price": 4.3
  },
  {
    "date": "2024-04-12",
    "product": "DZ MALINA (COLES), PAK. 500G",
    "country": "Belgium",
    "quantity": 77405.33,
    "cost": 18018.0,
    "price": 4.3
  },
  {
    "date": "2024-04-13",
    "product": "DZ MALINA (COLES), PAK. 500G",
    "country": "Belgium",
    "quantity": 77405.33,
    "cost": 18018.0,
    "price": 4.3
  },
  {
    "date": "2024-04-26",
    "product": "DZ MALINA (COLES), PAK. 500G",
    "country": "Belgium",
    "quantity": 77405.33,
    "cost": 18018.0,
    "price": 4.3
  },
  {
    "date": "2024-04-05",
    "product": "D/Z MALINA  ROLEND",
    "country": "Canada",
    "quantity": 48960.0,
    "cost": 20400.0,
    "price": 2.4
  },
  {
    "date": "2024-04-24",
    "product": "DZ MALINA ROLEND",
    "country": "Canada",
    "quantity": 50000.0,
    "cost": 20000.0,
    "price": 2.5
  },
  {
    "date": "2024-04-26",
    "product": "D/Z MALINA 300G.,500G.",
    "country": "Switzerland",
    "quantity": 12308.52,
    "cost": 5016.0,
    "price": 2.45
  },
  {
    "date": "2024-04-20",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 14X500GR",
    "country": "Switzerland",
    "quantity": 12936.0,
    "cost": 32866.5,
    "price": 2.54
  },
  {
    "date": "2024-04-01",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5 KG",
    "country": "Switzerland",
    "quantity": 59251.5,
    "cost": 20790.0,
    "price": 2.85
  },
  {
    "date": "2024-04-01",
    "product": "DUBOKO ZAMRZNUTA MALINA - 10/1 KG",
    "country": "Czech Republic",
    "quantity": 50790.4,
    "cost": 20480.0,
    "price": 2.48
  },
  {
    "date": "2024-04-20",
    "product": "SMRZNUTA MALINA  ROLEND",
    "country": "Czech Republic",
    "quantity": 59475.2,
    "cost": 20480.0,
    "price": 2.9
  },
  {
    "date": "2024-04-05",
    "product": "DUBOKO ZAMRZNUTA MALINA 90/10 - WILLAMETTE",
    "country": "Germany",
    "quantity": 20790.0,
    "cost": 46257.75,
    "price": 2.23
  },
  {
    "date": "2024-04-19",
    "product": "DZ MALINA ROLEND PAK.4X2,5 KG",
    "country": "Germany",
    "quantity": 46278.54,
    "cost": 20790.0,
    "price": 2.23
  },
  {
    "date": "2024-04-22",
    "product": "DZ MALINA ROLEND 90/10",
    "country": "Germany",
    "quantity": 46320.12,
    "cost": 20790.0,
    "price": 2.23
  },
  {
    "date": "2024-04-08",
    "product": "DZ MALINA ROLEND 90/10",
    "country": "Germany",
    "quantity": 44364.6,
    "cost": 19782.0,
    "price": 2.24
  },
  {
    "date": "2024-04-05",
    "product": "DZ MALINA ROLEND PAK.12X750 GR",
    "country": "Germany",
    "quantity": 23065.56,
    "cost": 10206.0,
    "price": 2.26
  },
  {
    "date": "2024-04-29",
    "product": "D/Z MALINA 750G",
    "country": "Germany",
    "quantity": 27719.82,
    "cost": 12150.0,
    "price": 2.28
  },
  {
    "date": "2024-04-08",
    "product": "ZAMRZNUTA MALINA ROLEND 90/10, 20X500GR",
    "country": "Germany",
    "quantity": 17920.0,
    "cost": 41036.8,
    "price": 2.29
  },
  {
    "date": "2024-04-27",
    "product": "D/Z MALINA 500G",
    "country": "Germany",
    "quantity": 36869.18,
    "cost": 15840.0,
    "price": 2.33
  },
  {
    "date": "2024-04-06",
    "product": "D/Z MALINA - DEEP FROZEN RASPBERRY ROLLEND 4X2,5KG G.CROWN",
    "country": "Germany",
    "quantity": 48399.12,
    "cost": 20790.0,
    "price": 2.33
  },
  {
    "date": "2024-04-13",
    "product": "D/Z MALINA 500G",
    "country": "Germany",
    "quantity": 37189.15,
    "cost": 15840.0,
    "price": 2.35
  },
  {
    "date": "2024-04-08",
    "product": "D/Z MALINA 500G",
    "country": "Germany",
    "quantity": 37217.66,
    "cost": 15840.0,
    "price": 2.35
  },
  {
    "date": "2024-04-05",
    "product": "D.Z. MALINA ROLEND 90/10, PAK. 500 G",
    "country": "Germany",
    "quantity": 43008.0,
    "cost": 17920.0,
    "price": 2.4
  },
  {
    "date": "2024-04-06",
    "product": "D.Z. MALINA ROLEND 90/10, PAK. 500 G",
    "country": "Germany",
    "quantity": 20160.0,
    "cost": 8400.0,
    "price": 2.4
  },
  {
    "date": "2024-04-16",
    "product": "D/Z MALINA 500G",
    "country": "Germany",
    "quantity": 35651.88,
    "cost": 14850.0,
    "price": 2.4
  },
  {
    "date": "2024-04-05",
    "product": "D/Z MALINA 500G",
    "country": "Germany",
    "quantity": 24873.12,
    "cost": 10350.0,
    "price": 2.4
  },
  {
    "date": "2024-04-09",
    "product": "D/Z MALINA 500G",
    "country": "Germany",
    "quantity": 35708.31,
    "cost": 14850.0,
    "price": 2.4
  },
  {
    "date": "2024-04-13",
    "product": "D/Z MALINA 750G",
    "country": "Germany",
    "quantity": 21075.68,
    "cost": 8748.0,
    "price": 2.41
  },
  {
    "date": "2024-04-23",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 10X500GR",
    "country": "Germany",
    "quantity": 14355.0,
    "cost": 34654.95,
    "price": 2.41
  },
  {
    "date": "2024-04-08",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 6X500GR I 10X500GR",
    "country": "Germany",
    "quantity": 33994.8,
    "cost": 14040.0,
    "price": 2.42
  },
  {
    "date": "2024-04-06",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 6X500GR I 10X500GR",
    "country": "Germany",
    "quantity": 34330.05,
    "cost": 14175.0,
    "price": 2.42
  },
  {
    "date": "2024-04-27",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 10X500GR",
    "country": "Germany",
    "quantity": 16335.0,
    "cost": 39585.15,
    "price": 2.42
  },
  {
    "date": "2024-04-23",
    "product": "D/Z MALINA 500G",
    "country": "Germany",
    "quantity": 72067.05,
    "cost": 29700.0,
    "price": 2.43
  },
  {
    "date": "2024-04-20",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 10X500GR",
    "country": "Germany",
    "quantity": 20205.0,
    "cost": 49040.55,
    "price": 2.43
  },
  {
    "date": "2024-04-13",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 10X500GR",
    "country": "Germany",
    "quantity": 11385.0,
    "cost": 27665.55,
    "price": 2.43
  },
  {
    "date": "2024-04-05",
    "product": "D/Z MALINA 300G, 500G",
    "country": "Germany",
    "quantity": 39496.8,
    "cost": 16248.0,
    "price": 2.43
  },
  {
    "date": "2024-04-01",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:14X500GR",
    "country": "Germany",
    "quantity": 45091.2,
    "cost": 18480.0,
    "price": 2.44
  },
  {
    "date": "2024-04-02",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:14X500GR",
    "country": "Germany",
    "quantity": 90182.4,
    "cost": 36960.0,
    "price": 2.44
  },
  {
    "date": "2024-04-06",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:14X500GR",
    "country": "Germany",
    "quantity": 45091.2,
    "cost": 18480.0,
    "price": 2.44
  },
  {
    "date": "2024-04-09",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:14X500GR",
    "country": "Germany",
    "quantity": 45091.2,
    "cost": 18480.0,
    "price": 2.44
  },
  {
    "date": "2024-04-13",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:14X500GR",
    "country": "Germany",
    "quantity": 45091.2,
    "cost": 18480.0,
    "price": 2.44
  },
  {
    "date": "2024-04-16",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:14X500GR",
    "country": "Germany",
    "quantity": 45091.2,
    "cost": 18480.0,
    "price": 2.44
  },
  {
    "date": "2024-04-30",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:14X500GR",
    "country": "Germany",
    "quantity": 90182.4,
    "cost": 36960.0,
    "price": 2.44
  },
  {
    "date": "2024-04-30",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 6X500GR",
    "country": "Germany",
    "quantity": 7524.0,
    "cost": 18358.56,
    "price": 2.44
  },
  {
    "date": "2024-04-26",
    "product": "D/Z MALINA 300G., 500G",
    "country": "Germany",
    "quantity": 39883.1,
    "cost": 16320.0,
    "price": 2.44
  },
  {
    "date": "2024-04-16",
    "product": "D/Z MALINA",
    "country": "Germany",
    "quantity": 50935.5,
    "cost": 20790.0,
    "price": 2.45
  },
  {
    "date": "2024-04-19",
    "product": "D/Z MALINA 500G",
    "country": "Germany",
    "quantity": 36533.97,
    "cost": 14850.0,
    "price": 2.46
  },
  {
    "date": "2024-04-15",
    "product": "D/Z MALINA 500G",
    "country": "Germany",
    "quantity": 36542.88,
    "cost": 14850.0,
    "price": 2.46
  },
  {
    "date": "2024-04-22",
    "product": "D/Z MALINA 500G",
    "country": "Germany",
    "quantity": 36575.55,
    "cost": 14850.0,
    "price": 2.46
  },
  {
    "date": "2024-04-25",
    "product": "D/Z MALINA 500G",
    "country": "Germany",
    "quantity": 28593.79,
    "cost": 11583.0,
    "price": 2.47
  },
  {
    "date": "2024-04-27",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 14X500GR;20X500GR",
    "country": "Germany",
    "quantity": 47424.0,
    "cost": 19200.0,
    "price": 2.47
  },
  {
    "date": "2024-04-25",
    "product": "D/Z MALINA 500G.",
    "country": "Germany",
    "quantity": 17352.04,
    "cost": 7020.0,
    "price": 2.47
  },
  {
    "date": "2024-04-06",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 14X500GR",
    "country": "Germany",
    "quantity": 36856.51,
    "cost": 14784.0,
    "price": 2.49
  },
  {
    "date": "2024-04-13",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 14X500GR",
    "country": "Germany",
    "quantity": 36856.51,
    "cost": 14784.0,
    "price": 2.49
  },
  {
    "date": "2024-04-20",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 14X500GR",
    "country": "Germany",
    "quantity": 36856.51,
    "cost": 14784.0,
    "price": 2.49
  },
  {
    "date": "2024-04-23",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 14X500GR",
    "country": "Germany",
    "quantity": 36856.51,
    "cost": 14784.0,
    "price": 2.49
  },
  {
    "date": "2024-04-30",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 14X500GR",
    "country": "Germany",
    "quantity": 36856.51,
    "cost": 14784.0,
    "price": 2.49
  },
  {
    "date": "2024-04-27",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 6X500GR; 10X500GR",
    "country": "Germany",
    "quantity": 14652.0,
    "cost": 36542.88,
    "price": 2.49
  },
  {
    "date": "2024-04-02",
    "product": "D/Z MALINA 300G.",
    "country": "Germany",
    "quantity": 41668.7,
    "cost": 16632.0,
    "price": 2.51
  },
  {
    "date": "2024-04-06",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR; 14X500GR",
    "country": "Germany",
    "quantity": 50234.8,
    "cost": 20020.0,
    "price": 2.51
  },
  {
    "date": "2024-04-08",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 16X500GR",
    "country": "Germany",
    "quantity": 37140.36,
    "cost": 14784.0,
    "price": 2.51
  },
  {
    "date": "2024-04-09",
    "product": "TK- HIMBEEREN FRESHONA DE/AT  20X500G",
    "country": "Germany",
    "quantity": 51435.0,
    "cost": 20250.0,
    "price": 2.54
  },
  {
    "date": "2024-04-13",
    "product": "TK- HIMBEEREN FRESHONA DE/AT  20X500G",
    "country": "Germany",
    "quantity": 51435.0,
    "cost": 20250.0,
    "price": 2.54
  },
  {
    "date": "2024-04-13",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X500GR",
    "country": "Germany",
    "quantity": 41490.9,
    "cost": 16335.0,
    "price": 2.54
  },
  {
    "date": "2024-04-16",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "Germany",
    "quantity": 50800.0,
    "cost": 20000.0,
    "price": 2.54
  },
  {
    "date": "2024-04-23",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "Germany",
    "quantity": 51206.4,
    "cost": 20160.0,
    "price": 2.54
  },
  {
    "date": "2024-04-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X500GR",
    "country": "Germany",
    "quantity": 41490.9,
    "cost": 16335.0,
    "price": 2.54
  },
  {
    "date": "2024-04-27",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X300GR; 20X500GR",
    "country": "Germany",
    "quantity": 50685.55,
    "cost": 19790.0,
    "price": 2.56
  },
  {
    "date": "2024-04-27",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 18X500GR;24X350GR;20X500GR",
    "country": "Germany",
    "quantity": 50778.31,
    "cost": 19819.8,
    "price": 2.56
  },
  {
    "date": "2024-04-16",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X500GR; 18X500GR",
    "country": "Germany",
    "quantity": 45794.88,
    "cost": 17775.0,
    "price": 2.58
  },
  {
    "date": "2024-04-30",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:18X500GR;24X350GR",
    "country": "Germany",
    "quantity": 49247.36,
    "cost": 19051.2,
    "price": 2.59
  },
  {
    "date": "2024-04-06",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:18X500GR;20X500GR",
    "country": "Germany",
    "quantity": 48720.17,
    "cost": 18774.0,
    "price": 2.6
  },
  {
    "date": "2024-04-30",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 18X500GR",
    "country": "Germany",
    "quantity": 48592.47,
    "cost": 18711.0,
    "price": 2.6
  },
  {
    "date": "2024-04-19",
    "product": "DZ MALINA ROLEND",
    "country": "Germany",
    "quantity": 23296.0,
    "cost": 8960.0,
    "price": 2.6
  },
  {
    "date": "2024-04-02",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X300GR; 18X500GR",
    "country": "Germany",
    "quantity": 46704.92,
    "cost": 17892.0,
    "price": 2.61
  },
  {
    "date": "2024-04-15",
    "product": "SMRZNUTA MALINA / IQF RASPBERRY, PAKOVANO U 2079 KUTIJA",
    "country": "Germany",
    "quantity": 56148.59,
    "cost": 20790.0,
    "price": 2.7
  },
  {
    "date": "2024-04-22",
    "product": "DUBOKO ZAMRZNUTA MALINA  95/5   PAKOVANJE: 4X2,5KG",
    "country": "Germany",
    "quantity": 56148.59,
    "cost": 20790.0,
    "price": 2.7
  },
  {
    "date": "2024-04-02",
    "product": "D/Z MALINE \"IQF RASPBERRY \"",
    "country": "Germany",
    "quantity": 58212.0,
    "cost": 20790.0,
    "price": 2.8
  },
  {
    "date": "2024-04-12",
    "product": "DUBOKO ZAMRZNUTA MALINA",
    "country": "Germany",
    "quantity": 9676.8,
    "cost": 3360.0,
    "price": 2.88
  },
  {
    "date": "2024-04-09",
    "product": "ZAMRZNUTA ORGANSKA MALINA, PAKOVANJE:16X300GR",
    "country": "Germany",
    "quantity": 15481.07,
    "cost": 3931.2,
    "price": 3.94
  },
  {
    "date": "2024-04-11",
    "product": "D.Z. MALINA ROLEND, PAK. 200 GR",
    "country": "Denmark",
    "quantity": 12004.2,
    "cost": 3240.0,
    "price": 3.71
  },
  {
    "date": "2024-04-27",
    "product": "D.Z. MALINA ROLEND, PAK. 200 GR",
    "country": "Denmark",
    "quantity": 52818.48,
    "cost": 14256.0,
    "price": 3.71
  },
  {
    "date": "2024-04-20",
    "product": "D.Z. MALINA ROLEND, PAK. 200G I 400G",
    "country": "Finland",
    "quantity": 59529.17,
    "cost": 16372.8,
    "price": 3.64
  },
  {
    "date": "2024-04-15",
    "product": "ZAMRZNUTA MALINA -DF RASPBERRIES  WHOLE (4X2,5)",
    "country": "France",
    "quantity": 18480.0,
    "cost": 43428.0,
    "price": 2.35
  },
  {
    "date": "2024-04-12",
    "product": "DZ MALINA ROLEND",
    "country": "France",
    "quantity": 43617.0,
    "cost": 18480.0,
    "price": 2.36
  },
  {
    "date": "2024-04-19",
    "product": "ZAMRZNUTA MALINA -DF RASPBERRIES  WHOLE (5X1)",
    "country": "France",
    "quantity": 15840.0,
    "cost": 38016.0,
    "price": 2.4
  },
  {
    "date": "2024-04-26",
    "product": "ZAMRZNUTA MALINA -DF RASPBERRIES  WHOLE (5X1)",
    "country": "France",
    "quantity": 15840.0,
    "cost": 38016.0,
    "price": 2.4
  },
  {
    "date": "2024-04-05",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 6X0,5KG",
    "country": "France",
    "quantity": 3.0,
    "cost": 7.35,
    "price": 2.45
  },
  {
    "date": "2024-04-12",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 6X0,5KG",
    "country": "France",
    "quantity": 3.0,
    "cost": 7.35,
    "price": 2.45
  },
  {
    "date": "2024-04-22",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 6X0,5KG",
    "country": "France",
    "quantity": 3.0,
    "cost": 7.35,
    "price": 2.45
  },
  {
    "date": "2024-04-05",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 15/1KG",
    "country": "France",
    "quantity": 51156.0,
    "cost": 20880.0,
    "price": 2.45
  },
  {
    "date": "2024-04-08",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 15/1KG",
    "country": "France",
    "quantity": 28224.0,
    "cost": 11520.0,
    "price": 2.45
  },
  {
    "date": "2024-04-12",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:15X1KG",
    "country": "France",
    "quantity": 51156.0,
    "cost": 20880.0,
    "price": 2.45
  },
  {
    "date": "2024-04-22",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:15/1KG",
    "country": "France",
    "quantity": 51156.0,
    "cost": 20880.0,
    "price": 2.45
  },
  {
    "date": "2024-04-04",
    "product": "D.Z. MALINA ROLEND-PAQUITO, PAK. 450G",
    "country": "France",
    "quantity": 36018.68,
    "cost": 14701.5,
    "price": 2.45
  },
  {
    "date": "2024-04-26",
    "product": "D.Z. MALINA ROLEND - PAQUITO, PAK. 450G",
    "country": "France",
    "quantity": 36018.68,
    "cost": 14701.5,
    "price": 2.45
  },
  {
    "date": "2024-04-01",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 15/1KG",
    "country": "France",
    "quantity": 104400.0,
    "cost": 41760.0,
    "price": 2.5
  },
  {
    "date": "2024-04-01",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 6X0,5KG",
    "country": "France",
    "quantity": 6.0,
    "cost": 15.0,
    "price": 2.5
  },
  {
    "date": "2024-04-25",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:15/1KG",
    "country": "France",
    "quantity": 54180.0,
    "cost": 20880.0,
    "price": 2.59
  },
  {
    "date": "2024-04-25",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 3X0,5KG",
    "country": "France",
    "quantity": 3.0,
    "cost": 7.81,
    "price": 2.6
  },
  {
    "date": "2024-04-15",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 6X0,5KG",
    "country": "France",
    "quantity": 3.0,
    "cost": 7.95,
    "price": 2.65
  },
  {
    "date": "2024-04-15",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:15/1KG",
    "country": "France",
    "quantity": 55332.0,
    "cost": 20880.0,
    "price": 2.65
  },
  {
    "date": "2024-04-25",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE 5X1KG",
    "country": "France",
    "quantity": 47757.6,
    "cost": 17820.0,
    "price": 2.68
  },
  {
    "date": "2024-04-25",
    "product": "D\\Z MALINA  MONOPRIX 500G, CASINO 500 G",
    "country": "France",
    "quantity": 45901.35,
    "cost": 16335.0,
    "price": 2.81
  },
  {
    "date": "2024-04-26",
    "product": "ZAMRZNUT MALINA(IQF RASPBERRY WHOLE 1 KG)",
    "country": "France",
    "quantity": 18480.0,
    "cost": 53222.4,
    "price": 2.88
  },
  {
    "date": "2024-04-29",
    "product": "SMRZNUTA MALINA",
    "country": "France",
    "quantity": 50801.85,
    "cost": 16335.0,
    "price": 3.11
  },
  {
    "date": "2024-04-22",
    "product": "D.Z. MALINA ROLEND, PAK. 500 G",
    "country": "France",
    "quantity": 30950.4,
    "cost": 9920.0,
    "price": 3.12
  },
  {
    "date": "2024-04-27",
    "product": "D\\Z MALINA -FERTODI \"ROLEND\" PAK. 4KG (8X500G)- 800 KUTIJA",
    "country": "France",
    "quantity": 10048.0,
    "cost": 3200.0,
    "price": 3.14
  },
  {
    "date": "2024-04-12",
    "product": "D.Z. MALINA MIKER ROLEND",
    "country": "France",
    "quantity": 36590.4,
    "cost": 11616.0,
    "price": 3.15
  },
  {
    "date": "2024-04-15",
    "product": "D.Z. MALINA, PAK. 500 G",
    "country": "France",
    "quantity": 7110.0,
    "cost": 2250.0,
    "price": 3.16
  },
  {
    "date": "2024-04-24",
    "product": "D.Z. MALINA, PAK. 500 G",
    "country": "France",
    "quantity": 5688.0,
    "cost": 1800.0,
    "price": 3.16
  },
  {
    "date": "2024-04-26",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 8X500GR",
    "country": "France",
    "quantity": 38565.12,
    "cost": 11616.0,
    "price": 3.32
  },
  {
    "date": "2024-04-08",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X0,5KG;3X0,5KG",
    "country": "France",
    "quantity": 13.98,
    "cost": 3.99,
    "price": 3.5
  },
  {
    "date": "2024-04-16",
    "product": "DZ MALINA ROLEND",
    "country": "France",
    "quantity": 5184.0,
    "cost": 1296.0,
    "price": 4.0
  },
  {
    "date": "2024-04-18",
    "product": "D/Z MALINA ROLEND PAK.5X1 KG",
    "country": "France",
    "quantity": 77338.8,
    "cost": 17820.0,
    "price": 4.34
  },
  {
    "date": "2024-04-11",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 12X500GR",
    "country": "France",
    "quantity": 51004.8,
    "cost": 11088.0,
    "price": 4.6
  },
  {
    "date": "2024-04-08",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:12X0,5KG",
    "country": "France",
    "quantity": 6120.0,
    "cost": 37026.0,
    "price": 6.05
  },
  {
    "date": "2024-04-20",
    "product": "DZ MALINA ROLEND PAK.11 KG",
    "country": "United Kingdom",
    "quantity": 48496.8,
    "cost": 20207.0,
    "price": 2.4
  },
  {
    "date": "2024-04-13",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "United Kingdom",
    "quantity": 51351.3,
    "cost": 20790.0,
    "price": 2.47
  },
  {
    "date": "2024-04-22",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "United Kingdom",
    "quantity": 51351.3,
    "cost": 20790.0,
    "price": 2.47
  },
  {
    "date": "2024-04-08",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "United Kingdom",
    "quantity": 52390.8,
    "cost": 20790.0,
    "price": 2.52
  },
  {
    "date": "2024-04-11",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X1KG",
    "country": "United Kingdom",
    "quantity": 20979.0,
    "cost": 8100.0,
    "price": 2.59
  },
  {
    "date": "2024-04-11",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 6X1KG",
    "country": "United Kingdom",
    "quantity": 20260.8,
    "cost": 7560.0,
    "price": 2.68
  },
  {
    "date": "2024-04-22",
    "product": "DZ MALINA ,PAK.5X1 KG I PAK.4X2,5 KG",
    "country": "United Kingdom",
    "quantity": 55984.0,
    "cost": 20800.0,
    "price": 2.69
  },
  {
    "date": "2024-04-10",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "United Kingdom",
    "quantity": 57172.5,
    "cost": 20790.0,
    "price": 2.75
  },
  {
    "date": "2024-04-15",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "United Kingdom",
    "quantity": 57172.5,
    "cost": 20790.0,
    "price": 2.75
  },
  {
    "date": "2024-04-19",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "United Kingdom",
    "quantity": 57172.5,
    "cost": 20790.0,
    "price": 2.75
  },
  {
    "date": "2024-04-29",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "United Kingdom",
    "quantity": 57172.5,
    "cost": 20790.0,
    "price": 2.75
  },
  {
    "date": "2024-04-12",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "United Kingdom",
    "quantity": 59667.3,
    "cost": 20790.0,
    "price": 2.87
  },
  {
    "date": "2024-04-30",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "United Kingdom",
    "quantity": 59667.3,
    "cost": 20790.0,
    "price": 2.87
  },
  {
    "date": "2024-04-13",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 24X350GR",
    "country": "United Kingdom",
    "quantity": 19958.4,
    "cost": 59476.03,
    "price": 2.98
  },
  {
    "date": "2024-04-30",
    "product": "DUBOKO ZAMRZNUTA MALINA 300G (1/4,2 KG)",
    "country": "United Kingdom",
    "quantity": 57018.18,
    "cost": 17472.0,
    "price": 3.26
  },
  {
    "date": "2024-04-26",
    "product": "DUBOKO ZAMRZNUTA MALINA 300G (1/4,2 KG)",
    "country": "United Kingdom",
    "quantity": 57104.7,
    "cost": 17472.0,
    "price": 3.27
  },
  {
    "date": "2024-04-19",
    "product": "DUBOKO ZAMRZNUTA MALINA 300G (1/4,2 KG)",
    "country": "United Kingdom",
    "quantity": 57251.72,
    "cost": 17472.0,
    "price": 3.28
  },
  {
    "date": "2024-04-03",
    "product": "DUBOKO ZAMRZNUTA MALINA 300G (1/4,2 KG)",
    "country": "United Kingdom",
    "quantity": 57285.23,
    "cost": 17472.0,
    "price": 3.28
  },
  {
    "date": "2024-04-20",
    "product": "DZ MALINA (OCADO), PAK. 300G",
    "country": "United Kingdom",
    "quantity": 51357.89,
    "cost": 12096.0,
    "price": 4.25
  },
  {
    "date": "2024-04-05",
    "product": "DZ MALINA (DEL MONTE), PAK.  300G",
    "country": "United Kingdom",
    "quantity": 33486.75,
    "cost": 7425.0,
    "price": 4.51
  },
  {
    "date": "2024-04-06",
    "product": "DZ MALINA (DEL MONTE), PAK.  300G",
    "country": "United Kingdom",
    "quantity": 36531.0,
    "cost": 8100.0,
    "price": 4.51
  },
  {
    "date": "2024-04-13",
    "product": "DUBOKO ZAMRZNUTA MALINA  PAKOVANJE 300G AD",
    "country": "United Kingdom",
    "quantity": 15876.0,
    "cost": 72946.3,
    "price": 4.59
  },
  {
    "date": "2024-04-10",
    "product": "DUBOKO ZAMRZNUTA MALINA",
    "country": "United Kingdom",
    "quantity": 59548.0,
    "cost": 12960.0,
    "price": 4.59
  },
  {
    "date": "2024-04-26",
    "product": "ZAMRZNUTA MALINA (IQF RASPBERRY WHOLE) PO FAKTURI 8845/2024",
    "country": "Greece",
    "quantity": 20776.0,
    "cost": 7840.0,
    "price": 2.65
  },
  {
    "date": "2024-04-02",
    "product": "D/Z MALINA 400G",
    "country": "Croatia",
    "quantity": 8859.84,
    "cost": 3840.0,
    "price": 2.31
  },
  {
    "date": "2024-04-02",
    "product": "DUBOKO ZAMRZNUTA MALINA 10 KG",
    "country": "Croatia",
    "quantity": 2968.0,
    "cost": 1120.0,
    "price": 2.65
  },
  {
    "date": "2024-04-01",
    "product": "DZ MALINA,PAK.2,5 KG,PROIZVOĐAČ:ARETOL DOO,NOVI SAD",
    "country": "Croatia",
    "quantity": 1740.8,
    "cost": 640.0,
    "price": 2.72
  },
  {
    "date": "2024-04-30",
    "product": "DUBOKO ZAMRZNUTA MALINA 250G SPAR",
    "country": "Croatia",
    "quantity": 11750.4,
    "cost": 1920.0,
    "price": 6.12
  },
  {
    "date": "2024-04-22",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10/1KG",
    "country": "Hungary",
    "quantity": 50995.2,
    "cost": 20480.0,
    "price": 2.49
  },
  {
    "date": "2024-04-29",
    "product": "D/Z MALINA 95/5 LOT NO:27042024",
    "country": "Hungary",
    "quantity": 28582.4,
    "cost": 9856.0,
    "price": 2.9
  },
  {
    "date": "2024-04-30",
    "product": "DZ MALINA (2,5KG)",
    "country": "Hungary",
    "quantity": 60006.4,
    "cost": 20480.0,
    "price": 2.93
  },
  {
    "date": "2024-04-01",
    "product": "ZAMRZNUTA MALINA 4X2,5KG - FROZEN RASSPERIES WHOLE 4X2,5KG",
    "country": "Italy",
    "quantity": 51200.0,
    "cost": 20480.0,
    "price": 2.5
  },
  {
    "date": "2024-04-23",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:20X500GR",
    "country": "Japan",
    "quantity": 9120.0,
    "cost": 33926.4,
    "price": 3.72
  },
  {
    "date": "2024-04-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:20X500GR",
    "country": "Japan",
    "quantity": 9120.0,
    "cost": 33926.4,
    "price": 3.72
  },
  {
    "date": "2024-04-11",
    "product": "DZ MALINA RASBERRIES RIMI FROZEN",
    "country": "Latvia",
    "quantity": 8208.0,
    "cost": 2400.0,
    "price": 3.42
  },
  {
    "date": "2024-04-18",
    "product": "DZ MALINA RASBERRIES RIMI FROZEN",
    "country": "Latvia",
    "quantity": 14774.4,
    "cost": 4320.0,
    "price": 3.42
  },
  {
    "date": "2024-04-25",
    "product": "DZ MALINA RASBERRIES RIMI FROZEN",
    "country": "Latvia",
    "quantity": 8208.0,
    "cost": 2400.0,
    "price": 3.42
  },
  {
    "date": "2024-04-04",
    "product": "D/Z MALINA - 144 KOLETA",
    "country": "Montenegro",
    "quantity": 4227.6,
    "cost": 1626.0,
    "price": 2.6
  },
  {
    "date": "2024-04-15",
    "product": "SMRZNUTE MALINE",
    "country": "Montenegro",
    "quantity": 3095.04,
    "cost": 998.4,
    "price": 3.1
  },
  {
    "date": "2024-04-25",
    "product": "SMRZNUTE MALINE",
    "country": "Montenegro",
    "quantity": 1547.52,
    "cost": 499.2,
    "price": 3.1
  },
  {
    "date": "2024-04-25",
    "product": "BSM MALINA 450G PO FAKTURI",
    "country": "Montenegro",
    "quantity": 2564.8,
    "cost": 504.0,
    "price": 5.09
  },
  {
    "date": "2024-04-29",
    "product": "BSM MALINA 450G PO FAKTURI",
    "country": "Montenegro",
    "quantity": 2564.8,
    "cost": 504.0,
    "price": 5.09
  },
  {
    "date": "2024-04-04",
    "product": "BSM MALINA 450G PO FAKTURI",
    "country": "Montenegro",
    "quantity": 2721.6,
    "cost": 504.0,
    "price": 5.4
  },
  {
    "date": "2024-04-17",
    "product": "MALINA 300 GR FAKTURA: 91346256 STAVKA: 9",
    "country": "North Macedonia",
    "quantity": 499.2,
    "cost": 1547.52,
    "price": 3.1
  },
  {
    "date": "2024-04-17",
    "product": "D/Z MALINA 300G",
    "country": "North Macedonia",
    "quantity": 3836.16,
    "cost": 1152.0,
    "price": 3.33
  },
  {
    "date": "2024-04-27",
    "product": "MALINA ROLEND METRO CHEF 4X2.5KG",
    "country": "Netherlands",
    "quantity": 46777.5,
    "cost": 20790.0,
    "price": 2.25
  },
  {
    "date": "2024-04-13",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "Netherlands",
    "quantity": 47104.0,
    "cost": 20480.0,
    "price": 2.3
  },
  {
    "date": "2024-04-26",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "Netherlands",
    "quantity": 47104.0,
    "cost": 20480.0,
    "price": 2.3
  },
  {
    "date": "2024-04-08",
    "product": "DUBOKO ZAMRZNUTA MALINA",
    "country": "Netherlands",
    "quantity": 2636.48,
    "cost": 1120.0,
    "price": 2.35
  },
  {
    "date": "2024-04-24",
    "product": "D/Z MALINA 750G / D/F RASPBERRY 750G",
    "country": "Netherlands",
    "quantity": 3589.69,
    "cost": 1512.0,
    "price": 2.37
  },
  {
    "date": "2024-04-05",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "Netherlands",
    "quantity": 44352.0,
    "cost": 18480.0,
    "price": 2.4
  },
  {
    "date": "2024-04-16",
    "product": "D.Z. MALINA ROLEND 90/10, PAK. 500 G",
    "country": "Netherlands",
    "quantity": 49152.0,
    "cost": 20480.0,
    "price": 2.4
  },
  {
    "date": "2024-04-04",
    "product": "D/Z MALINA 250G. / D/F RASPBERRY 250G.",
    "country": "Netherlands",
    "quantity": 16120.44,
    "cost": 6300.0,
    "price": 2.56
  },
  {
    "date": "2024-04-06",
    "product": "DUBOKO ZAMRZNUTA MALINA",
    "country": "Netherlands",
    "quantity": 40680.64,
    "cost": 15456.0,
    "price": 2.63
  },
  {
    "date": "2024-04-26",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X300GR",
    "country": "Netherlands",
    "quantity": 5184.0,
    "cost": 13996.8,
    "price": 2.7
  },
  {
    "date": "2024-04-01",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:10X300GR",
    "country": "Netherlands",
    "quantity": 4608.0,
    "cost": 12441.6,
    "price": 2.7
  },
  {
    "date": "2024-04-12",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:10X300GR",
    "country": "Netherlands",
    "quantity": 1728.0,
    "cost": 4665.6,
    "price": 2.7
  },
  {
    "date": "2024-04-27",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:10X300GR",
    "country": "Netherlands",
    "quantity": 3456.0,
    "cost": 9331.2,
    "price": 2.7
  },
  {
    "date": "2024-04-02",
    "product": "DUBOKO ZAMRZNUTA MALINA",
    "country": "Netherlands",
    "quantity": 20545.84,
    "cost": 7224.0,
    "price": 2.84
  },
  {
    "date": "2024-04-30",
    "product": "DUBOKO ZAMRZNUTA MALINA 250G, DUBOKO ZAMRZNUTA MALINA 750G",
    "country": "Netherlands",
    "quantity": 11630.66,
    "cost": 3326.0,
    "price": 3.5
  },
  {
    "date": "2024-04-08",
    "product": "DUBOKO ZAMRZNUTA MALINA 250G, DUBOKO ZAMRZNUTA MALINA 750G",
    "country": "Netherlands",
    "quantity": 16606.35,
    "cost": 4746.0,
    "price": 3.5
  },
  {
    "date": "2024-04-09",
    "product": "DUBOKO ZAMRZNUTA MALINA 250G, DUBOKO ZAMRZNUTA MALINA 750G",
    "country": "Netherlands",
    "quantity": 13185.56,
    "cost": 3736.0,
    "price": 3.53
  },
  {
    "date": "2024-04-01",
    "product": "DUBOKO ZAMRZNUTA MALINA 250G, DUBOKO ZAMRZNUTA MALINA 750G",
    "country": "Netherlands",
    "quantity": 8209.88,
    "cost": 2316.0,
    "price": 3.54
  },
  {
    "date": "2024-04-25",
    "product": "DUBOKO ZAMRZNUTA MALINA 250G, DUBOKO ZAMRZNUTA MALINA 750G",
    "country": "Netherlands",
    "quantity": 24567.46,
    "cost": 6910.0,
    "price": 3.56
  },
  {
    "date": "2024-04-06",
    "product": "D.Z. MALINA, PAK. 750 G",
    "country": "Netherlands",
    "quantity": 81900.72,
    "cost": 16038.0,
    "price": 5.11
  },
  {
    "date": "2024-04-22",
    "product": "D/Z MALINA ROLEND",
    "country": "Norway",
    "quantity": 60984.0,
    "cost": 20328.0,
    "price": 3.0
  },
  {
    "date": "2024-04-17",
    "product": "D.Z. MALINA, PAK. 300G",
    "country": "Norway",
    "quantity": 8596.85,
    "cost": 2381.4,
    "price": 3.61
  },
  {
    "date": "2024-04-04",
    "product": "D.Z. MALINA, PAK. 300 G",
    "country": "Norway",
    "quantity": 22924.94,
    "cost": 6350.4,
    "price": 3.61
  },
  {
    "date": "2024-04-30",
    "product": "D.Z. MALINA, PAK. 400G I 2 KG",
    "country": "Norway",
    "quantity": 57872.88,
    "cost": 15897.6,
    "price": 3.64
  },
  {
    "date": "2024-04-05",
    "product": "D.Z. MALINA, PAK. 400G I 2 KG",
    "country": "Norway",
    "quantity": 60041.52,
    "cost": 16454.4,
    "price": 3.65
  },
  {
    "date": "2024-04-04",
    "product": "D.Z. MALINA, PAK. 400G",
    "country": "Norway",
    "quantity": 59058.72,
    "cost": 16070.4,
    "price": 3.68
  },
  {
    "date": "2024-04-11",
    "product": "DUBOKO ZAMRZNUTA MALINA",
    "country": "New Zealand",
    "quantity": 90596.0,
    "cost": 20590.0,
    "price": 4.4
  },
  {
    "date": "2024-04-15",
    "product": "D\\Z MALINA -WILLAMETTE \"ROLEND\" 11\\1 - 1.848 KUTIJA",
    "country": "Poland",
    "quantity": 20328.0,
    "cost": 49193.76,
    "price": 2.42
  },
  {
    "date": "2024-04-19",
    "product": "DZ MALINA 90/10",
    "country": "Poland",
    "quantity": 50820.0,
    "cost": 20328.0,
    "price": 2.5
  },
  {
    "date": "2024-04-08",
    "product": "RASPBERRY,W&B,IQF,CONV,CARTONS",
    "country": "Poland",
    "quantity": 52852.8,
    "cost": 20328.0,
    "price": 2.6
  },
  {
    "date": "2024-04-09",
    "product": "RASPBERRY,W&B,IQF,CONV,CARTONS",
    "country": "Poland",
    "quantity": 52852.8,
    "cost": 20328.0,
    "price": 2.6
  },
  {
    "date": "2024-04-20",
    "product": "D\\Z MALINA \"WHOLE  1X11 KG\"",
    "country": "Poland",
    "quantity": 53259.36,
    "cost": 20328.0,
    "price": 2.62
  },
  {
    "date": "2024-04-02",
    "product": "D\\Z MALINA \"ROLEND\"- SORTE FERTODI  11\\1 - 1.848 KUTIJA",
    "country": "Poland",
    "quantity": 20328.0,
    "cost": 55902.0,
    "price": 2.75
  },
  {
    "date": "2024-04-12",
    "product": "D\\Z MALINA \"ROLEND\"- SORTE FERTODI  11\\1 - 1.848 KUTIJA",
    "country": "Poland",
    "quantity": 20328.0,
    "cost": 55902.0,
    "price": 2.75
  },
  {
    "date": "2024-04-13",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 11/1KG",
    "country": "Poland",
    "quantity": 55902.0,
    "cost": 20328.0,
    "price": 2.75
  },
  {
    "date": "2024-04-19",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 11/1KG",
    "country": "Poland",
    "quantity": 55902.0,
    "cost": 20328.0,
    "price": 2.75
  },
  {
    "date": "2024-04-03",
    "product": "DUBOKO ZAMRZNUTA MALINA KONENCIONAL",
    "country": "Poland",
    "quantity": 20328.0,
    "cost": 56511.84,
    "price": 2.78
  },
  {
    "date": "2024-04-13",
    "product": "DUBOKO ZAMRZNUTA MALINA KONENCIONAL",
    "country": "Poland",
    "quantity": 20328.0,
    "cost": 56511.84,
    "price": 2.78
  },
  {
    "date": "2024-04-19",
    "product": "DUBOKO ZAMRZNUTA MALINA KONENCIONAL",
    "country": "Poland",
    "quantity": 20328.0,
    "cost": 56511.84,
    "price": 2.78
  },
  {
    "date": "2024-04-12",
    "product": "DUBOKO ZAMRZNUTA MALINA  90/10   PAKOVANJE: 1X11KG",
    "country": "Poland",
    "quantity": 57324.96,
    "cost": 20328.0,
    "price": 2.82
  },
  {
    "date": "2024-04-27",
    "product": "DUBOKO ZAMRZNUTA MALINA  90/10   PAKOVANJE: 1X11KG",
    "country": "Poland",
    "quantity": 57324.96,
    "cost": 20328.0,
    "price": 2.82
  },
  {
    "date": "2024-04-22",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 11KG",
    "country": "Poland",
    "quantity": 57629.88,
    "cost": 20328.0,
    "price": 2.84
  },
  {
    "date": "2024-04-15",
    "product": "D/Z MALINA 300G.",
    "country": "Portugal",
    "quantity": 2928.04,
    "cost": 1209.6,
    "price": 2.42
  },
  {
    "date": "2024-04-29",
    "product": "DZ MALINA,PAK.450 G,PROIZVOĐAČ:ARETOL DOO,NOVI SAD",
    "country": "Romania",
    "quantity": 1702.4,
    "cost": 576.0,
    "price": 2.96
  },
  {
    "date": "2024-04-03",
    "product": "DZ MALINA,PAK.450 G,PROIZVOĐAČ:ARETOL DOO,NOVI SAD",
    "country": "Romania",
    "quantity": 1932.8,
    "cost": 576.0,
    "price": 3.36
  },
  {
    "date": "2024-04-03",
    "product": "DUBOKO ZAMRZNUTA MALINA",
    "country": "Russia",
    "quantity": 20496.0,
    "cost": 8400.0,
    "price": 2.44
  },
  {
    "date": "2024-04-05",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "Russia",
    "quantity": 42336.0,
    "cost": 15120.0,
    "price": 2.8
  },
  {
    "date": "2024-04-12",
    "product": "D.Z. MALINA, PAK. 4X2,5 KG",
    "country": "Russia",
    "quantity": 1098.72,
    "cost": 302.4,
    "price": 3.63
  },
  {
    "date": "2024-04-24",
    "product": "D.Z. MALINA, PAK. 10X400 G; 5X1 KG",
    "country": "Saudi Arabia",
    "quantity": 25156.56,
    "cost": 7930.0,
    "price": 3.17
  },
  {
    "date": "2024-04-17",
    "product": "DZ MALINA",
    "country": "Saudi Arabia",
    "quantity": 25941.75,
    "cost": 7000.0,
    "price": 3.71
  },
  {
    "date": "2024-04-29",
    "product": "DUBOKO ZAMRZNUTA MALINA 400G",
    "country": "Saudi Arabia",
    "quantity": 10514.97,
    "cost": 2784.0,
    "price": 3.78
  },
  {
    "date": "2024-04-09",
    "product": "D.Z. MALINA, PAK. 16X350 KG",
    "country": "Saudi Arabia",
    "quantity": 47520.0,
    "cost": 10080.0,
    "price": 4.71
  },
  {
    "date": "2024-04-24",
    "product": "D.Z. MALINA, PAK. 16X350 KG",
    "country": "Saudi Arabia",
    "quantity": 47520.0,
    "cost": 10080.0,
    "price": 4.71
  },
  {
    "date": "2024-04-09",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE 12X750GR",
    "country": "Sweden",
    "quantity": 5184.0,
    "cost": 15552.0,
    "price": 3.0
  },
  {
    "date": "2024-04-12",
    "product": "D.Z. MALINA ROLEND, PAK. 2 X 2,5 KG",
    "country": "Sweden",
    "quantity": 36374.4,
    "cost": 10800.0,
    "price": 3.37
  },
  {
    "date": "2024-04-19",
    "product": "DZ MALINA (ICA), PAK. 250G",
    "country": "Sweden",
    "quantity": 48302.1,
    "cost": 13860.0,
    "price": 3.49
  },
  {
    "date": "2024-04-11",
    "product": "D.Z. MALINA ROLEND, PAK. 200 I 400 G",
    "country": "Sweden",
    "quantity": 42728.9,
    "cost": 11966.4,
    "price": 3.57
  },
  {
    "date": "2024-04-20",
    "product": "D.Z. MALINA ROLEND, PAK. 10X500 G; 10X225 G; 4X2,5 KG",
    "country": "Sweden",
    "quantity": 12265.0,
    "cost": 44154.2,
    "price": 3.6
  },
  {
    "date": "2024-04-06",
    "product": "D.Z. MALINA, PAK. 10X500G",
    "country": "Sweden",
    "quantity": 62553.6,
    "cost": 17280.0,
    "price": 3.62
  },
  {
    "date": "2024-04-24",
    "product": "D.Z. MALINA ROLEND, PAK. 10X500 G",
    "country": "Sweden",
    "quantity": 64508.4,
    "cost": 17820.0,
    "price": 3.62
  },
  {
    "date": "2024-04-25",
    "product": "D.Z. MALINA ROLEND, PAK. 10X500 G",
    "country": "Sweden",
    "quantity": 64508.4,
    "cost": 17820.0,
    "price": 3.62
  },
  {
    "date": "2024-04-29",
    "product": "D.Z. MALINA ROLEND, PAK. 10X500 G",
    "country": "Sweden",
    "quantity": 64508.4,
    "cost": 17820.0,
    "price": 3.62
  },
  {
    "date": "2024-04-17",
    "product": "D.Z. MALINA, PAK. 10X225 G; 4X2,5 KG",
    "country": "Sweden",
    "quantity": 41408.32,
    "cost": 11420.0,
    "price": 3.63
  },
  {
    "date": "2024-04-22",
    "product": "D.Z. MALINA, PAK. 10X500 G; 10X225 G",
    "country": "Sweden",
    "quantity": 54858.0,
    "cost": 15093.0,
    "price": 3.63
  },
  {
    "date": "2024-04-13",
    "product": "D.Z. MALINA, PAK. 10X500 G; 10X225 G",
    "country": "Sweden",
    "quantity": 52641.6,
    "cost": 14472.0,
    "price": 3.64
  },
  {
    "date": "2024-04-30",
    "product": "D.Z. MALINA ROLEND, PAK. 200 I 400 G",
    "country": "Sweden",
    "quantity": 44942.47,
    "cost": 12355.2,
    "price": 3.64
  },
  {
    "date": "2024-04-29",
    "product": "D.Z. MALINA ROLEND, PAK. 200 I 400 G",
    "country": "Sweden",
    "quantity": 39327.77,
    "cost": 10756.8,
    "price": 3.66
  },
  {
    "date": "2024-04-20",
    "product": "D.Z. MALINA, PAK. 10X500 G; 10X225 G",
    "country": "Sweden",
    "quantity": 54196.8,
    "cost": 14823.0,
    "price": 3.66
  },
  {
    "date": "2024-04-13",
    "product": "D.Z. MALINA ROLEND, PAK. 200 I 400 G",
    "country": "Sweden",
    "quantity": 42404.04,
    "cost": 11232.0,
    "price": 3.78
  },
  {
    "date": "2024-04-22",
    "product": "DUBOKO ZAMRZNUTA MALINA  20X500G",
    "country": "Slovenia",
    "quantity": 640.0,
    "cost": 2880.0,
    "price": 4.5
  },
  {
    "date": "2024-04-30",
    "product": "DUBOKO ZAMRZNUTA MALINA 250G SPAR",
    "country": "Slovenia",
    "quantity": 11750.4,
    "cost": 1920.0,
    "price": 6.12
  },
  {
    "date": "2024-04-26",
    "product": "DUBOKO ZAMRZNUTA MALINA,  LOT.NO: 24075",
    "country": "Turkey",
    "quantity": 20328.0,
    "cost": 56105.28,
    "price": 2.76
  },
  {
    "date": "2024-04-13",
    "product": "D/Z MALINA(FROZEN RASPBERRY IQF),LOT:HV-2023-008",
    "country": "Turkey",
    "quantity": 5120.0,
    "cost": 21760.0,
    "price": 4.25
  },
  {
    "date": "2024-04-19",
    "product": "DZ  MALINA ,LOT:R040424",
    "country": "United States",
    "quantity": 52685.0,
    "cost": 20500.0,
    "price": 2.57
  },
  {
    "date": "2024-04-20",
    "product": "DZ MALINA ROLEND",
    "country": "United States",
    "quantity": 54000.0,
    "cost": 20000.0,
    "price": 2.7
  },
  {
    "date": "2024-04-19",
    "product": "D.Z. MALINA, PAK. 4X2,5 KG",
    "country": "United States",
    "quantity": 53329.73,
    "cost": 18000.0,
    "price": 2.96
  },
  {
    "date": "2024-05-13",
    "product": "ZAMRZNUTA MALINA",
    "country": "Austria",
    "quantity": 14850.0,
    "cost": 40840.47,
    "price": 2.75
  },
  {
    "date": "2024-05-14",
    "product": "DZ MALINA (S-BUDGET)",
    "country": "Austria",
    "quantity": 16038.0,
    "cost": 47312.1,
    "price": 2.95
  },
  {
    "date": "2024-05-15",
    "product": "ZAMRZNUTA MALINA ROLEND",
    "country": "Austria",
    "quantity": 15300.0,
    "cost": 37283.4,
    "price": 2.44
  },
  {
    "date": "2024-05-20",
    "product": "ZAMRZNUTA MALINA",
    "country": "Austria",
    "quantity": 2000.0,
    "cost": 4300.0,
    "price": 2.15
  },
  {
    "date": "2024-05-28",
    "product": "DZ MALINA (S-BUDGET)",
    "country": "Austria",
    "quantity": 16038.0,
    "cost": 47312.1,
    "price": 2.95
  },
  {
    "date": "2024-05-04",
    "product": "DZ MALINA (CROP'S",
    "country": "Belgium",
    "quantity": 7800.0,
    "cost": 24304.8,
    "price": 3.12
  },
  {
    "date": "2024-05-04",
    "product": "DZ MALINA (CRUMBLE SYSTEME U)",
    "country": "Belgium",
    "quantity": 7722.0,
    "cost": 15984.54,
    "price": 2.07
  },
  {
    "date": "2024-05-04",
    "product": "DZ MALINA (SYSTEME U)",
    "country": "Belgium",
    "quantity": 19800.0,
    "cost": 53460.0,
    "price": 2.7
  },
  {
    "date": "2024-05-04",
    "product": "DZ MALINA (WHOLE",
    "country": "Belgium",
    "quantity": 9760.0,
    "cost": 27796.0,
    "price": 2.85
  },
  {
    "date": "2024-05-04",
    "product": "ZAMRZNUTA MALINA ROLEND",
    "country": "Belgium",
    "quantity": 8019.0,
    "cost": 21170.16,
    "price": 2.64
  },
  {
    "date": "2024-05-07",
    "product": "ZAMRZNUTA MALINA",
    "country": "Belgium",
    "quantity": 16335.0,
    "cost": 43124.4,
    "price": 2.64
  },
  {
    "date": "2024-05-07",
    "product": "ZAMRZNUTA MALINA",
    "country": "Belgium",
    "quantity": 4860.0,
    "cost": 15746.4,
    "price": 3.24
  },
  {
    "date": "2024-05-07",
    "product": "ZAMRZNUTA MALINA",
    "country": "Belgium",
    "quantity": 16500.0,
    "cost": 56595.0,
    "price": 3.43
  },
  {
    "date": "2024-05-07",
    "product": "ZAMRZNUTA MALINA",
    "country": "Belgium",
    "quantity": 1890.0,
    "cost": 4800.6,
    "price": 2.54
  },
  {
    "date": "2024-05-07",
    "product": "ZAMRZNUTA MALINA",
    "country": "Belgium",
    "quantity": 18270.0,
    "cost": 45309.6,
    "price": 2.48
  },
  {
    "date": "2024-05-09",
    "product": "ZAMRZNUTA MALINA",
    "country": "Belgium",
    "quantity": 3780.0,
    "cost": 9601.2,
    "price": 2.54
  },
  {
    "date": "2024-05-09",
    "product": "ZAMRZNUTA MALINA",
    "country": "Belgium",
    "quantity": 13230.0,
    "cost": 32810.4,
    "price": 2.48
  },
  {
    "date": "2024-05-11",
    "product": "-D/Z MALINA FARMFOODS ,PAK.3.536 KUT. OD 4,2KG",
    "country": "Belgium",
    "quantity": 14851.2,
    "cost": 49900.03,
    "price": 3.36
  },
  {
    "date": "2024-05-13",
    "product": "ZAMRZNUTA MALINA",
    "country": "Belgium",
    "quantity": 4752.0,
    "cost": 12877.92,
    "price": 2.71
  },
  {
    "date": "2024-05-13",
    "product": "ZAMRZNUTA MALINA",
    "country": "Belgium",
    "quantity": 17820.0,
    "cost": 45975.6,
    "price": 2.58
  },
  {
    "date": "2024-05-17",
    "product": "ZAMRZNUTA MALINA",
    "country": "Belgium",
    "quantity": 15840.0,
    "cost": 44985.6,
    "price": 2.84
  },
  {
    "date": "2024-05-18",
    "product": "DZ MALINA (CROPS",
    "country": "Belgium",
    "quantity": 19580.0,
    "cost": 60768.0,
    "price": 3.1
  },
  {
    "date": "2024-05-20",
    "product": "ZAMRZNUTA MALINA",
    "country": "Belgium",
    "quantity": 17360.0,
    "cost": 54163.2,
    "price": 3.12
  },
  {
    "date": "2024-05-24",
    "product": "DZ MALINA (WHOLE)",
    "country": "Belgium",
    "quantity": 11520.0,
    "cost": 31104.0,
    "price": 2.7
  },
  {
    "date": "2024-05-25",
    "product": "DZ MALINA (CROPS)",
    "country": "Belgium",
    "quantity": 5760.0,
    "cost": 17935.2,
    "price": 3.11
  },
  {
    "date": "2024-05-25",
    "product": "ZAMRZNUTA MALINA",
    "country": "Belgium",
    "quantity": 16335.0,
    "cost": 43124.4,
    "price": 2.64
  },
  {
    "date": "2024-05-25",
    "product": "ZAMRZNUTA MALINA",
    "country": "Belgium",
    "quantity": 10560.0,
    "cost": 32630.4,
    "price": 3.09
  },
  {
    "date": "2024-05-27",
    "product": "ZAMRZNUTA MALINA",
    "country": "Belgium",
    "quantity": 17820.0,
    "cost": 45975.6,
    "price": 2.58
  },
  {
    "date": "2024-05-28",
    "product": "ZAMRZNUTA MALINA ROLEND",
    "country": "Belgium",
    "quantity": 14701.5,
    "cost": 38811.96,
    "price": 2.64
  },
  {
    "date": "2024-05-31",
    "product": "ZAMRZNUTA MALINA",
    "country": "Belgium",
    "quantity": 16500.0,
    "cost": 56595.0,
    "price": 3.43
  },
  {
    "date": "2024-05-11",
    "product": "ZAMRZNUTA MALINA",
    "country": "BG",
    "quantity": 20480.0,
    "cost": 56320.0,
    "price": 2.75
  },
  {
    "date": "2024-05-22",
    "product": "D\\Z MALINA ROLEND 4X2,5KG ,WILLAMETTE (US NORMA)",
    "country": "Canada",
    "quantity": 18000.0,
    "cost": 50040.0,
    "price": 2.78
  },
  {
    "date": "2024-05-22",
    "product": "D\\Z MALINA ROLEND 4X2,5KG",
    "country": "Canada",
    "quantity": 18000.0,
    "cost": 50040.0,
    "price": 2.78
  },
  {
    "date": "2024-05-30",
    "product": "D\\Z MALINA ROLEND 4X2,5KG VILAMET",
    "country": "Canada",
    "quantity": 18000.0,
    "cost": 50040.0,
    "price": 2.78
  },
  {
    "date": "2024-05-07",
    "product": "D/Z MALINA 500G",
    "country": "Switzerland",
    "quantity": 12096.0,
    "cost": 29564.64,
    "price": 2.44
  },
  {
    "date": "2024-05-23",
    "product": "D/Z MALINA 500G",
    "country": "Switzerland",
    "quantity": 9696.0,
    "cost": 23335.2,
    "price": 2.41
  },
  {
    "date": "2024-05-04",
    "product": "ZAMRZNUTA MALINA",
    "country": "Germany",
    "quantity": 14784.0,
    "cost": 36856.51,
    "price": 2.49
  },
  {
    "date": "2024-05-04",
    "product": "ZAMRZNUTA MALINA",
    "country": "Germany",
    "quantity": 18711.0,
    "cost": 48592.47,
    "price": 2.6
  },
  {
    "date": "2024-05-04",
    "product": "ZAMRZNUTA MALINA",
    "country": "Germany",
    "quantity": 40500.0,
    "cost": 102870.0,
    "price": 2.54
  },
  {
    "date": "2024-05-04",
    "product": "ZAMRZNUTA MALINA",
    "country": "Germany",
    "quantity": 15408.0,
    "cost": 37670.4,
    "price": 2.44
  },
  {
    "date": "2024-05-04",
    "product": "ZAMRZNUTA MALINA",
    "country": "Germany",
    "quantity": 10368.0,
    "cost": 28304.64,
    "price": 2.73
  },
  {
    "date": "2024-05-04",
    "product": "ZAMRZNUTA MALINA",
    "country": "Germany",
    "quantity": 18480.0,
    "cost": 45091.2,
    "price": 2.44
  },
  {
    "date": "2024-05-11",
    "product": "ZAMRZNUTA MALINA ROLEND",
    "country": "Germany",
    "quantity": 16335.0,
    "cost": 39694.05,
    "price": 2.43
  },
  {
    "date": "2024-05-11",
    "product": "ZAMRZNUTA MALINA ROLEND",
    "country": "Germany",
    "quantity": 18711.0,
    "cost": 46029.06,
    "price": 2.46
  },
  {
    "date": "2024-05-11",
    "product": "ZAMRZNUTA MALINA ROLEND",
    "country": "Germany",
    "quantity": 12825.0,
    "cost": 31056.75,
    "price": 2.42
  },
  {
    "date": "2024-05-11",
    "product": "ZAMRZNUTA MALINA",
    "country": "Germany",
    "quantity": 19360.0,
    "cost": 47942.4,
    "price": 2.48
  },
  {
    "date": "2024-05-11",
    "product": "ZAMRZNUTA MALINA",
    "country": "Germany",
    "quantity": 14784.0,
    "cost": 36470.6,
    "price": 2.47
  },
  {
    "date": "2024-05-11",
    "product": "ZAMRZNUTA MALINA",
    "country": "Germany",
    "quantity": 30490.0,
    "cost": 77444.6,
    "price": 2.54
  },
  {
    "date": "2024-05-11",
    "product": "ZAMRZNUTA MALINA",
    "country": "Germany",
    "quantity": 19242.0,
    "cost": 49391.78,
    "price": 2.57
  },
  {
    "date": "2024-05-11",
    "product": "ZAMRZNUTA MALINA",
    "country": "Germany",
    "quantity": 20480.0,
    "cost": 58163.2,
    "price": 2.84
  },
  {
    "date": "2024-05-11",
    "product": "ZAMRZNUTA MALINA",
    "country": "Germany",
    "quantity": 13068.0,
    "cost": 31885.92,
    "price": 2.44
  },
  {
    "date": "2024-05-14",
    "product": "ZAMRZNUTA MALINA",
    "country": "Germany",
    "quantity": 14784.0,
    "cost": 36856.51,
    "price": 2.49
  },
  {
    "date": "2024-05-14",
    "product": "ZAMRZNUTA MALINA",
    "country": "Germany",
    "quantity": 19760.0,
    "cost": 48214.4,
    "price": 2.44
  },
  {
    "date": "2024-05-14",
    "product": "ZAMRZNUTA MALINA",
    "country": "Germany",
    "quantity": 20160.0,
    "cost": 51206.4,
    "price": 2.54
  },
  {
    "date": "2024-05-18",
    "product": "ZAMRZNUTA MALINA ROLEND",
    "country": "Germany",
    "quantity": 8370.0,
    "cost": 20231.1,
    "price": 2.42
  },
  {
    "date": "2024-05-18",
    "product": "ZAMRZNUTA MALINA",
    "country": "Germany",
    "quantity": 14784.0,
    "cost": 36856.51,
    "price": 2.49
  },
  {
    "date": "2024-05-18",
    "product": "ZAMRZNUTA MALINA",
    "country": "Germany",
    "quantity": 80570.0,
    "cost": 204647.8,
    "price": 2.54
  },
  {
    "date": "2024-05-18",
    "product": "ZAMRZNUTA MALINA",
    "country": "Germany",
    "quantity": 20480.0,
    "cost": 58163.2,
    "price": 2.84
  },
  {
    "date": "2024-05-18",
    "product": "ZAMRZNUTA MALINA",
    "country": "Germany",
    "quantity": 14652.0,
    "cost": 36542.88,
    "price": 2.49
  },
  {
    "date": "2024-05-20",
    "product": "ZAMRZNUTA MALINA",
    "country": "Germany",
    "quantity": 20250.0,
    "cost": 51435.0,
    "price": 2.54
  },
  {
    "date": "2024-05-21",
    "product": "ZAMRZNUTA MALINA",
    "country": "Germany",
    "quantity": 20084.4,
    "cost": 50965.99,
    "price": 2.54
  },
  {
    "date": "2024-05-21",
    "product": "ZAMRZNUTA MALINA",
    "country": "Germany",
    "quantity": 17073.0,
    "cost": 44817.38,
    "price": 2.63
  },
  {
    "date": "2024-05-21",
    "product": "ZAMRZNUTA MALINA",
    "country": "Germany",
    "quantity": 14784.0,
    "cost": 36856.51,
    "price": 2.49
  },
  {
    "date": "2024-05-21",
    "product": "ZAMRZNUTA MALINA",
    "country": "Germany",
    "quantity": 25200.0,
    "cost": 64008.0,
    "price": 2.54
  },
  {
    "date": "2024-05-24",
    "product": "ZAMRZNUTA MALINA ROLEND",
    "country": "Germany",
    "quantity": 17920.0,
    "cost": 40320.0,
    "price": 2.25
  },
  {
    "date": "2024-05-25",
    "product": "ZAMRZNUTA MALINA ROLEND",
    "country": "Germany",
    "quantity": 16335.0,
    "cost": 39694.05,
    "price": 2.43
  },
  {
    "date": "2024-05-25",
    "product": "ZAMRZNUTA MALINA ROLEND",
    "country": "Germany",
    "quantity": 13500.0,
    "cost": 32733.0,
    "price": 2.42
  },
  {
    "date": "2024-05-25",
    "product": "ZAMRZNUTA MALINA",
    "country": "Germany",
    "quantity": 14784.0,
    "cost": 36856.51,
    "price": 2.49
  },
  {
    "date": "2024-05-25",
    "product": "ZAMRZNUTA MALINA",
    "country": "Germany",
    "quantity": 80730.0,
    "cost": 203239.8,
    "price": 2.52
  },
  {
    "date": "2024-05-25",
    "product": "ZAMRZNUTA MALINA",
    "country": "Germany",
    "quantity": 13068.0,
    "cost": 31885.92,
    "price": 2.44
  },
  {
    "date": "2024-05-27",
    "product": "ZAMRZNUTA MALINA",
    "country": "Germany",
    "quantity": 16335.0,
    "cost": 41490.9,
    "price": 2.54
  },
  {
    "date": "2024-05-28",
    "product": "ZAMRZNUTA MALINA",
    "country": "Germany",
    "quantity": 14784.0,
    "cost": 36256.28,
    "price": 2.45
  },
  {
    "date": "2024-05-28",
    "product": "ZAMRZNUTA MALINA",
    "country": "Germany",
    "quantity": 27900.0,
    "cost": 70866.0,
    "price": 2.54
  },
  {
    "date": "2024-05-29",
    "product": "ZAMRZNUTA MALINA",
    "country": "Germany",
    "quantity": 18711.0,
    "cost": 48592.47,
    "price": 2.6
  },
  {
    "date": "2024-05-31",
    "product": "D.Z. MALINA ROLEND",
    "country": "Denmark",
    "quantity": 2592.0,
    "cost": 9603.36,
    "price": 3.71
  },
  {
    "date": "2024-05-24",
    "product": "DUBOKO ZAMRZNUTA MALINA 1/5 KG (10X500G) -K-MENU",
    "country": "Finland",
    "quantity": 6960.0,
    "cost": 23066.4,
    "price": 3.31
  },
  {
    "date": "2024-05-29",
    "product": "D.Z. MALINA ROLEND",
    "country": "Finland",
    "quantity": 13478.4,
    "cost": 51080.54,
    "price": 3.79
  },
  {
    "date": "2024-05-07",
    "product": "ZAMRZNUTA MALINA",
    "country": "France",
    "quantity": 3.0,
    "cost": 7.65,
    "price": 2.55
  },
  {
    "date": "2024-05-07",
    "product": "ZAMRZNUTA MALINA",
    "country": "France",
    "quantity": 20880.0,
    "cost": 53244.0,
    "price": 2.55
  },
  {
    "date": "2024-05-08",
    "product": "D\\Z MALINA ROLEND 5X1KG - VILAMET",
    "country": "France",
    "quantity": 19320.0,
    "cost": 92736.0,
    "price": 4.8
  },
  {
    "date": "2024-05-09",
    "product": "ZAMRZNUTA MALINA",
    "country": "France",
    "quantity": 3.0,
    "cost": 7.35,
    "price": 2.45
  },
  {
    "date": "2024-05-13",
    "product": "ZAMRZNUTA MALINA",
    "country": "France",
    "quantity": 3.0,
    "cost": 7.35,
    "price": 2.45
  },
  {
    "date": "2024-05-13",
    "product": "ZAMRZNUTA MALINA",
    "country": "France",
    "quantity": 20880.0,
    "cost": 51156.0,
    "price": 2.45
  },
  {
    "date": "2024-05-16",
    "product": "D.Z. MALINA",
    "country": "France",
    "quantity": 3150.0,
    "cost": 9954.0,
    "price": 3.16
  },
  {
    "date": "2024-05-17",
    "product": "ZAMRZNUTA MALINA",
    "country": "France",
    "quantity": 15648.0,
    "cost": 46536.0,
    "price": 2.97
  },
  {
    "date": "2024-05-20",
    "product": "ZAMRZNUTA MALINA",
    "country": "France",
    "quantity": 11088.0,
    "cost": 36036.0,
    "price": 3.25
  },
  {
    "date": "2024-05-20",
    "product": "ZAMRZNUTA MALINA",
    "country": "France",
    "quantity": 3.0,
    "cost": 7.35,
    "price": 2.45
  },
  {
    "date": "2024-05-23",
    "product": "ZAMRZNUTA MALINA",
    "country": "France",
    "quantity": 14040.0,
    "cost": 36504.0,
    "price": 2.6
  },
  {
    "date": "2024-05-24",
    "product": "D\\Z MALINA ROLEND 5X1KG - VILAMET",
    "country": "France",
    "quantity": 19320.0,
    "cost": 92736.0,
    "price": 4.8
  },
  {
    "date": "2024-05-24",
    "product": "ZAMRZNUTA MALINA",
    "country": "France",
    "quantity": 3.0,
    "cost": 7.35,
    "price": 2.45
  },
  {
    "date": "2024-05-27",
    "product": "D.Z. MALINA MIKER",
    "country": "France",
    "quantity": 8910.0,
    "cost": 29700.0,
    "price": 3.33
  },
  {
    "date": "2024-05-27",
    "product": "D.Z. MALINA",
    "country": "France",
    "quantity": 1800.0,
    "cost": 5688.0,
    "price": 3.16
  },
  {
    "date": "2024-05-27",
    "product": "ZAMRZNUTA MALINA",
    "country": "France",
    "quantity": 3.0,
    "cost": 7.81,
    "price": 2.6
  },
  {
    "date": "2024-05-31",
    "product": "D\\Z MALINA ROLEND 5X1KG - VILAMET",
    "country": "France",
    "quantity": 18480.0,
    "cost": 48540.8,
    "price": 2.63
  },
  {
    "date": "2024-05-07",
    "product": "ZAMRZNUTA MALINA",
    "country": "United Kingdom",
    "quantity": 20790.0,
    "cost": 59667.3,
    "price": 2.87
  },
  {
    "date": "2024-05-09",
    "product": "ZAMRZNUTA MALINA",
    "country": "United Kingdom",
    "quantity": 62370.0,
    "cost": 176507.1,
    "price": 2.83
  },
  {
    "date": "2024-05-10",
    "product": "ZAMRZNUTA MALINA ROLEND",
    "country": "United Kingdom",
    "quantity": 19958.4,
    "cost": 59476.03,
    "price": 2.98
  },
  {
    "date": "2024-05-11",
    "product": "DZ MALINA (DEL MONTE)",
    "country": "United Kingdom",
    "quantity": 4050.0,
    "cost": 18265.5,
    "price": 4.51
  },
  {
    "date": "2024-05-15",
    "product": "ZAMRZNUTA MALINA",
    "country": "United Kingdom",
    "quantity": 20790.0,
    "cost": 57172.5,
    "price": 2.75
  },
  {
    "date": "2024-05-17",
    "product": "ZAMRZNUTA MALINA",
    "country": "United Kingdom",
    "quantity": 20790.0,
    "cost": 59667.3,
    "price": 2.87
  },
  {
    "date": "2024-05-20",
    "product": "ZAMRZNUTA MALINA",
    "country": "United Kingdom",
    "quantity": 20790.0,
    "cost": 59667.3,
    "price": 2.87
  },
  {
    "date": "2024-05-22",
    "product": "ZAMRZNUTA MALINA",
    "country": "United Kingdom",
    "quantity": 20790.0,
    "cost": 57172.5,
    "price": 2.75
  },
  {
    "date": "2024-05-24",
    "product": "ZAMRZNUTA MALINA",
    "country": "United Kingdom",
    "quantity": 19958.4,
    "cost": 59476.03,
    "price": 2.98
  },
  {
    "date": "2024-05-24",
    "product": "ZAMRZNUTA MALINA",
    "country": "United Kingdom",
    "quantity": 41580.0,
    "cost": 119334.6,
    "price": 2.87
  },
  {
    "date": "2024-05-25",
    "product": "DZ MALINA (DEL MONTE)",
    "country": "United Kingdom",
    "quantity": 5400.0,
    "cost": 24354.0,
    "price": 4.51
  },
  {
    "date": "2024-05-13",
    "product": "DZ MALINA PAK.20X400 GR",
    "country": "Croatia",
    "quantity": 1152.0,
    "cost": 4262.4,
    "price": 3.7
  },
  {
    "date": "2024-05-10",
    "product": "ZAMRZNUTA MALINA ROLEND",
    "country": "Hungary",
    "quantity": 1920.0,
    "cost": 5088.0,
    "price": 2.65
  },
  {
    "date": "2024-05-25",
    "product": "ZAMRZNUTA MALINA ROLEND",
    "country": "Hungary",
    "quantity": 3240.0,
    "cost": 8496.0,
    "price": 2.62
  },
  {
    "date": "2024-05-29",
    "product": "ZAMRZNUTA MALINA",
    "country": "Japan",
    "quantity": 9130.0,
    "cost": 33963.6,
    "price": 3.72
  },
  {
    "date": "2024-05-30",
    "product": "ZAMRZNUTA MALINA",
    "country": "Japan",
    "quantity": 9130.0,
    "cost": 33963.6,
    "price": 3.72
  },
  {
    "date": "2024-05-31",
    "product": "D.Z. MALINA",
    "country": "KW",
    "quantity": 1680.0,
    "cost": 7920.0,
    "price": 4.71
  },
  {
    "date": "2024-05-07",
    "product": "D.Z. MALINA ROLEND 90/10",
    "country": "Netherlands",
    "quantity": 20480.0,
    "cost": 49152.0,
    "price": 2.4
  },
  {
    "date": "2024-05-09",
    "product": "DUBOKO ZAMRZNUTA MALINA 250G",
    "country": "Netherlands",
    "quantity": 2278.0,
    "cost": 8147.69,
    "price": 3.58
  },
  {
    "date": "2024-05-10",
    "product": "DUBOKO ZAMRZNUTA MALINA 250G",
    "country": "Netherlands",
    "quantity": 3774.0,
    "cost": 13247.76,
    "price": 3.51
  },
  {
    "date": "2024-05-13",
    "product": "ZAMRZNUTA MALINA",
    "country": "Netherlands",
    "quantity": 13440.0,
    "cost": 30912.0,
    "price": 2.3
  },
  {
    "date": "2024-05-17",
    "product": "DUBOKO ZAMRZNUTA MALINA 250G",
    "country": "Netherlands",
    "quantity": 4146.0,
    "cost": 14740.47,
    "price": 3.56
  },
  {
    "date": "2024-05-20",
    "product": "ZAMRZNUTA MALINA",
    "country": "Netherlands",
    "quantity": 11480.0,
    "cost": 30819.2,
    "price": 2.68
  },
  {
    "date": "2024-05-27",
    "product": "DUBOKO ZAMRZNUTA MALINA 250G",
    "country": "Netherlands",
    "quantity": 4746.0,
    "cost": 16606.34,
    "price": 3.5
  },
  {
    "date": "2024-05-27",
    "product": "ZAMRZNUTA MALINA",
    "country": "Netherlands",
    "quantity": 20480.0,
    "cost": 47104.0,
    "price": 2.3
  },
  {
    "date": "2024-05-27",
    "product": "ZAMRZNUTA MALINA",
    "country": "Netherlands",
    "quantity": 4032.0,
    "cost": 10886.4,
    "price": 2.7
  },
  {
    "date": "2024-05-31",
    "product": "DUBOKO ZAMRZNUTA MALINA 250G",
    "country": "Netherlands",
    "quantity": 4184.0,
    "cost": 14802.67,
    "price": 3.54
  },
  {
    "date": "2024-05-11",
    "product": "D.Z. MALINA",
    "country": "Norway",
    "quantity": 11260.8,
    "cost": 40098.24,
    "price": 3.56
  },
  {
    "date": "2024-05-17",
    "product": "D.Z. MALINA",
    "country": "Norway",
    "quantity": 8996.4,
    "cost": 32477.0,
    "price": 3.61
  },
  {
    "date": "2024-05-25",
    "product": "D.Z. MALINA ROLEND",
    "country": "Norway",
    "quantity": 34214.4,
    "cost": 125737.92,
    "price": 3.68
  },
  {
    "date": "2024-05-25",
    "product": "ZAMRZNUTA MALINA ROLEND",
    "country": "Norway",
    "quantity": 20328.0,
    "cost": 60984.0,
    "price": 3.0
  },
  {
    "date": "2024-05-20",
    "product": "ZAMRZNUTA MALINA ROLEND",
    "country": "Poland",
    "quantity": 20328.0,
    "cost": 63829.92,
    "price": 3.14
  },
  {
    "date": "2024-05-21",
    "product": "ZAMRZNUTA MALINA ROLEND",
    "country": "Poland",
    "quantity": 20328.0,
    "cost": 63829.92,
    "price": 3.14
  },
  {
    "date": "2024-05-15",
    "product": "DZ MALINA",
    "country": "Romania",
    "quantity": 3240.0,
    "cost": 9185.4,
    "price": 2.84
  },
  {
    "date": "2024-05-15",
    "product": "DZ MALINA",
    "country": "Romania",
    "quantity": 1280.0,
    "cost": 3740.8,
    "price": 2.92
  },
  {
    "date": "2024-05-08",
    "product": "ZAMRZNUTA MALINA,PRVA KLASA 90*10",
    "country": "Russia",
    "quantity": 5000.0,
    "cost": 15550.0,
    "price": 3.11
  },
  {
    "date": "2024-05-09",
    "product": "D.Z. MALINA",
    "country": "Russia",
    "quantity": 3360.0,
    "cost": 10080.0,
    "price": 3.0
  },
  {
    "date": "2024-05-21",
    "product": "D.Z. MALINA ROLEND",
    "country": "Russia",
    "quantity": 5880.0,
    "cost": 17640.0,
    "price": 3.0
  },
  {
    "date": "2024-05-10",
    "product": "D.Z. MALINA",
    "country": "SA",
    "quantity": 10080.0,
    "cost": 47520.0,
    "price": 4.71
  },
  {
    "date": "2024-05-07",
    "product": "D.Z. MALINA ROLEND",
    "country": "Sweden",
    "quantity": 8100.0,
    "cost": 27280.8,
    "price": 3.37
  },
  {
    "date": "2024-05-07",
    "product": "DUBOKO ZAMRZNUTA MALINA 500G (10 X 500G=1/5KG)",
    "country": "Sweden",
    "quantity": 13605.0,
    "cost": 42640.5,
    "price": 3.13
  },
  {
    "date": "2024-05-08",
    "product": "D.Z. MALINA ROLEND",
    "country": "Sweden",
    "quantity": 17700.0,
    "cost": 63832.08,
    "price": 3.61
  },
  {
    "date": "2024-05-08",
    "product": "DUBOKO ZAMRZNUTA MALINA 500G (10 X 500G=1/5KG)",
    "country": "Sweden",
    "quantity": 16125.0,
    "cost": 50632.5,
    "price": 3.14
  },
  {
    "date": "2024-05-10",
    "product": "DUBOKO ZAMRZNUTA MALINA 500G (10 X 500G=1/5KG)",
    "country": "Sweden",
    "quantity": 12180.0,
    "cost": 36948.0,
    "price": 3.03
  },
  {
    "date": "2024-05-13",
    "product": "DZ MALINA (ICA)",
    "country": "Sweden",
    "quantity": 17640.0,
    "cost": 61475.4,
    "price": 3.49
  },
  {
    "date": "2024-05-15",
    "product": "D.Z. MALINA",
    "country": "Sweden",
    "quantity": 13716.0,
    "cost": 49778.4,
    "price": 3.63
  },
  {
    "date": "2024-05-15",
    "product": "DUBOKO ZAMRZNUTA MALINA 500G (10 X 500G=1/5KG)",
    "country": "Sweden",
    "quantity": 13260.0,
    "cost": 41358.0,
    "price": 3.12
  },
  {
    "date": "2024-05-16",
    "product": "D.Z. MALINA",
    "country": "Sweden",
    "quantity": 17036.0,
    "cost": 61232.32,
    "price": 3.59
  },
  {
    "date": "2024-05-17",
    "product": "DUBOKO ZAMRZNUTA MALINA 500G (10 X 500G=1/5KG)",
    "country": "Sweden",
    "quantity": 13020.0,
    "cost": 39732.0,
    "price": 3.05
  },
  {
    "date": "2024-05-18",
    "product": "D.Z. MALINA",
    "country": "Sweden",
    "quantity": 14519.0,
    "cost": 50816.32,
    "price": 3.5
  },
  {
    "date": "2024-05-21",
    "product": "D.Z. MALINA ROLEND",
    "country": "Sweden",
    "quantity": 17280.0,
    "cost": 62553.6,
    "price": 3.62
  },
  {
    "date": "2024-05-22",
    "product": "DUBOKO ZAMRZNUTA MALINA 500G (10 X 500G=1/5KG)",
    "country": "Sweden",
    "quantity": 9690.0,
    "cost": 29757.0,
    "price": 3.07
  },
  {
    "date": "2024-05-23",
    "product": "D.Z. MALINA ROLEND",
    "country": "Sweden",
    "quantity": 10540.8,
    "cost": 38839.61,
    "price": 3.68
  },
  {
    "date": "2024-05-24",
    "product": "ZAMRZNUTA MALINA",
    "country": "Sweden",
    "quantity": 4608.0,
    "cost": 13824.0,
    "price": 3.0
  },
  {
    "date": "2024-05-25",
    "product": "DUBOKO ZAMRZNUTA MALINA 500G (10 X 500G=1/5KG)",
    "country": "Sweden",
    "quantity": 16095.0,
    "cost": 51643.5,
    "price": 3.21
  },
  {
    "date": "2024-05-27",
    "product": "D.Z. MALINA ROLEND",
    "country": "Sweden",
    "quantity": 8942.4,
    "cost": 33224.9,
    "price": 3.72
  },
  {
    "date": "2024-05-28",
    "product": "DUBOKO ZAMRZNUTA MALINA 500G (10 X 500G=1/5KG)",
    "country": "Sweden",
    "quantity": 16350.0,
    "cost": 52323.0,
    "price": 3.2
  },
  {
    "date": "2024-05-29",
    "product": "DUBOKO ZAMRZNUTA MALINA 500G (10 X 500G=1/5KG)",
    "country": "Sweden",
    "quantity": 26640.0,
    "cost": 80544.0,
    "price": 3.02
  },
  {
    "date": "2024-05-13",
    "product": "ZAMRZNUTA MALINA ROLEND (IQF RASPBERRY 95/5",
    "country": "Slovenia",
    "quantity": 19840.0,
    "cost": 46912.0,
    "price": 2.36
  },
  {
    "date": "2024-07-01",
    "product": "D.Z. MALINA ROLEND - PAQUITO, PAK. 450G",
    "country": "AE",
    "quantity": 14701.5,
    "cost": 36018.68,
    "price": 2.45
  },
  {
    "date": "2024-07-01",
    "product": "DUBOKO ZAMRZNUTA MALINA 500G (10 X",
    "country": "Austria",
    "quantity": 15990.0,
    "cost": 48897.0,
    "price": 3.06
  },
  {
    "date": "2024-07-01",
    "product": "DZ MALINA ROLEND",
    "country": "Austria",
    "quantity": 20328.0,
    "cost": 71148.0,
    "price": 3.5
  },
  {
    "date": "2024-07-01",
    "product": "MALINA 300G - MONTELLA - PREMA FAKTURI",
    "country": "Austria",
    "quantity": 1680.0,
    "cost": 12320.0,
    "price": 7.33
  },
  {
    "date": "2024-07-01",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 10X250GR I",
    "country": "Austria",
    "quantity": 4920.0,
    "cost": 12912.0,
    "price": 2.62
  },
  {
    "date": "2024-07-01",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "Austria",
    "quantity": 12600.0,
    "cost": 38052.0,
    "price": 3.02
  },
  {
    "date": "2024-07-02",
    "product": "D/Z MALINA DF RASPBERRY ROLLEND 1X11KG",
    "country": "Austria",
    "quantity": 20328.0,
    "cost": 62813.52,
    "price": 3.09
  },
  {
    "date": "2024-07-02",
    "product": "D/Z MALINA 500G.",
    "country": "Austria",
    "quantity": 14850.0,
    "cost": 35559.81,
    "price": 2.39
  },
  {
    "date": "2024-07-02",
    "product": "DUBOKO ZAMRZNUTA MALINA 500G",
    "country": "Austria",
    "quantity": 7200.0,
    "cost": 22320.0,
    "price": 3.1
  },
  {
    "date": "2024-07-02",
    "product": "DZ MALINA ROLEND 90/10",
    "country": "Austria",
    "quantity": 16335.0,
    "cost": 57989.25,
    "price": 3.55
  },
  {
    "date": "2024-07-02",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 20X500GR;6X500GR",
    "country": "BA",
    "quantity": 15660.0,
    "cost": 38194.2,
    "price": 2.44
  },
  {
    "date": "2024-07-02",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR; 14X500GR",
    "country": "Belgium",
    "quantity": 19130.0,
    "cost": 47694.2,
    "price": 2.49
  },
  {
    "date": "2024-07-03",
    "product": "D.Z. MALINA, PAK. 10X225 G; 10X500 G; 4X2,5 KG",
    "country": "Belgium",
    "quantity": 16176.0,
    "cost": 58199.76,
    "price": 3.6
  },
  {
    "date": "2024-07-03",
    "product": "D/Z MALINA 400G",
    "country": "Belgium",
    "quantity": 4608.0,
    "cost": 10722.82,
    "price": 2.33
  },
  {
    "date": "2024-07-03",
    "product": "DUBOKO ZAMRZNUTA MALINA 300G (1/4,2 KG)",
    "country": "Belgium",
    "quantity": 17472.0,
    "cost": 57758.66,
    "price": 3.31
  },
  {
    "date": "2024-07-03",
    "product": "DUBOKO ZAMRZNUTA MALINA 500G (10 X 500G=1/5KG),",
    "country": "Belgium",
    "quantity": 13560.0,
    "cost": 42102.0,
    "price": 3.1
  },
  {
    "date": "2024-07-03",
    "product": "ZAMRZNUTA MALINA 95/5 (IQF RASPBERRY WHOLE 95/5)PO",
    "country": "Belgium",
    "quantity": 18480.0,
    "cost": 54885.6,
    "price": 2.97
  },
  {
    "date": "2024-07-03",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 14X500GR",
    "country": "Belgium",
    "quantity": 3920.0,
    "cost": 9564.8,
    "price": 2.44
  },
  {
    "date": "2024-07-03",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 1X1000GR; 14X500GR I",
    "country": "Belgium",
    "quantity": 12400.0,
    "cost": 30770.91,
    "price": 2.48
  },
  {
    "date": "2024-07-04",
    "product": "BSM MALINA 450G PO FAKTURI",
    "country": "Belgium",
    "quantity": 504.0,
    "cost": 2564.8,
    "price": 5.09
  },
  {
    "date": "2024-07-04",
    "product": "D.Z. MALINA, PAK. 10X225 G; 10X500 G",
    "country": "Belgium",
    "quantity": 15336.0,
    "cost": 55642.8,
    "price": 3.63
  },
  {
    "date": "2024-07-04",
    "product": "D.Z. MALINA, PAK. 400G",
    "country": "Belgium",
    "quantity": 14256.0,
    "cost": 52390.8,
    "price": 3.68
  },
  {
    "date": "2024-07-04",
    "product": "D/Z MALINA 500G.",
    "country": "Belgium",
    "quantity": 14850.0,
    "cost": 35473.68,
    "price": 2.39
  },
  {
    "date": "2024-07-04",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "Belgium",
    "quantity": 20790.0,
    "cost": 63825.3,
    "price": 3.07
  },
  {
    "date": "2024-07-05",
    "product": "D.Z. MALINA ROLEND",
    "country": "Belgium",
    "quantity": 20480.0,
    "cost": 55296.0,
    "price": 2.7
  },
  {
    "date": "2024-07-05",
    "product": "D.Z. MALINA, PAK. 500 G",
    "country": "Belgium",
    "quantity": 8100.0,
    "cost": 25596.0,
    "price": 3.16
  },
  {
    "date": "2024-07-05",
    "product": "D/Z MALINA 500G",
    "country": "Belgium",
    "quantity": 15840.0,
    "cost": 37189.15,
    "price": 2.35
  },
  {
    "date": "2024-07-05",
    "product": "D/Z MALINA 750G",
    "country": "Belgium",
    "quantity": 2430.0,
    "cost": 5798.95,
    "price": 2.39
  },
  {
    "date": "2024-07-05",
    "product": "DUBOKO ZAMRZNUTA MALINA 1 KG",
    "country": "Belgium",
    "quantity": 2400.0,
    "cost": 7680.0,
    "price": 3.2
  },
  {
    "date": "2024-07-05",
    "product": "DUBOKO ZAMRZNUTA MALINA 1/5 KG (10X500G) -K-MENU,",
    "country": "Belgium",
    "quantity": 9120.0,
    "cost": 30240.0,
    "price": 3.32
  },
  {
    "date": "2024-07-05",
    "product": "DUBOKO ZAMRZNUTA MALINA 10X500 GR BESTE WAHL",
    "country": "Belgium",
    "quantity": 16335.0,
    "cost": 54558.9,
    "price": 3.34
  },
  {
    "date": "2024-07-05",
    "product": "DUBOKO ZAMRZNUTA MALINA 500G (10 X 500G=1/5KG),",
    "country": "Belgium",
    "quantity": 7665.0,
    "cost": 23590.5,
    "price": 3.08
  },
  {
    "date": "2024-07-05",
    "product": "DZ MALINA (DEL MONTE), PAK. 300G",
    "country": "Belgium",
    "quantity": 16200.0,
    "cost": 73062.0,
    "price": 4.51
  },
  {
    "date": "2024-07-05",
    "product": "DZ MALINA ROLEND",
    "country": "Belgium",
    "quantity": 13300.0,
    "cost": 48412.0,
    "price": 3.64
  },
  {
    "date": "2024-07-05",
    "product": "DZ MALINA ROLEND",
    "country": "Belgium",
    "quantity": 20328.0,
    "cost": 71148.0,
    "price": 3.5
  },
  {
    "date": "2024-07-05",
    "product": "DZ MALINA ROLEND PAK.4X2,5 KG",
    "country": "Belgium",
    "quantity": 20790.0,
    "cost": 66528.0,
    "price": 3.2
  },
  {
    "date": "2024-07-06",
    "product": "D.Z. MALINA ROLEND, PAK. 200 I 400G",
    "country": "Belgium",
    "quantity": 14342.4,
    "cost": 52946.78,
    "price": 3.69
  },
  {
    "date": "2024-07-06",
    "product": "D/Z MALINA 500G / D/F RASPBERRY 500G",
    "country": "Belgium",
    "quantity": 8160.0,
    "cost": 19148.26,
    "price": 2.35
  },
  {
    "date": "2024-07-06",
    "product": "DZ MALINA (CROP'S), PAK. 6X300G",
    "country": "Belgium",
    "quantity": 1800.0,
    "cost": 10324.8,
    "price": 5.74
  },
  {
    "date": "2024-07-06",
    "product": "TK- HIMBEEREN FRESHONA DE/AT 20X500G",
    "country": "Belgium",
    "quantity": 20250.0,
    "cost": 62775.0,
    "price": 3.1
  },
  {
    "date": "2024-07-06",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 18X500GR",
    "country": "Canada",
    "quantity": 18711.0,
    "cost": 57386.64,
    "price": 3.07
  },
  {
    "date": "2024-07-06",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "Canada",
    "quantity": 20250.0,
    "cost": 61560.0,
    "price": 3.04
  },
  {
    "date": "2024-07-06",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:14X500GR",
    "country": "Switzerland",
    "quantity": 36960.0,
    "cost": 108662.4,
    "price": 2.94
  },
  {
    "date": "2024-07-08",
    "product": "D/Z MALINA 400G",
    "country": "Switzerland",
    "quantity": 3328.0,
    "cost": 7735.94,
    "price": 2.32
  },
  {
    "date": "2024-07-08",
    "product": "DUBOKO ZAMRZNUTA MALINA 300G (1/4,2 KG)",
    "country": "Switzerland",
    "quantity": 17472.0,
    "cost": 57704.16,
    "price": 3.3
  },
  {
    "date": "2024-07-08",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "Switzerland",
    "quantity": 20790.0,
    "cost": 51559.2,
    "price": 2.48
  },
  {
    "date": "2024-07-09",
    "product": "D.Z. MALINA, PAK. 6X600G(UZORAK)",
    "country": "Germany",
    "quantity": 3.6,
    "cost": 10.8,
    "price": 3.0
  },
  {
    "date": "2024-07-09",
    "product": "D\\Z MALINA ROLEND 4X2,5KG - IQF RASPBERRY ROLEND 4X2,5KG",
    "country": "Germany",
    "quantity": 10080.0,
    "cost": 28224.0,
    "price": 2.8
  },
  {
    "date": "2024-07-09",
    "product": "DUBOKO ZAMRZNUTA MALINA 4X 2,5KG",
    "country": "Germany",
    "quantity": 3920.0,
    "cost": 9564.8,
    "price": 2.44
  },
  {
    "date": "2024-07-09",
    "product": "DUBOKO ZAMRZNUTA MALINA 300GR",
    "country": "Germany",
    "quantity": 1008.0,
    "cost": 3218.54,
    "price": 3.19
  },
  {
    "date": "2024-07-09",
    "product": "-DZ MALINA, IQF RASPBERRY WHOLE 95/5 4X2,5KG CONTRACT :",
    "country": "Germany",
    "quantity": 7280.0,
    "cost": 23660.0,
    "price": 3.25
  },
  {
    "date": "2024-07-09",
    "product": "TK- HIMBEEREN FRESHONA DE/AT 20X500G",
    "country": "Germany",
    "quantity": 20250.0,
    "cost": 62775.0,
    "price": 3.1
  },
  {
    "date": "2024-07-09",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 6X500GR I 10X500GR",
    "country": "Germany",
    "quantity": 12825.0,
    "cost": 31056.75,
    "price": 2.42
  },
  {
    "date": "2024-07-09",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 14X500GR",
    "country": "Germany",
    "quantity": 14784.0,
    "cost": 44248.51,
    "price": 2.99
  },
  {
    "date": "2024-07-09",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 16X500GR",
    "country": "Germany",
    "quantity": 14784.0,
    "cost": 43648.28,
    "price": 2.95
  },
  {
    "date": "2024-07-10",
    "product": "D.Z. MALINA ROLEND, PAK. 2 X 2,5 KG",
    "country": "Germany",
    "quantity": 8100.0,
    "cost": 27280.8,
    "price": 3.37
  },
  {
    "date": "2024-07-10",
    "product": "D.Z. MALINA, PAK. 400G I 2KG",
    "country": "Germany",
    "quantity": 16579.2,
    "cost": 60071.76,
    "price": 3.62
  },
  {
    "date": "2024-07-10",
    "product": "DUBOKO ZAMRZNUTA MALINA 300G (1/4,2 KG)",
    "country": "Germany",
    "quantity": 17472.0,
    "cost": 57704.16,
    "price": 3.3
  },
  {
    "date": "2024-07-10",
    "product": "DUBOKO ZAMRZNUTA MALINA 500G (10 X 500G=1/5KG),",
    "country": "Germany",
    "quantity": 14100.0,
    "cost": 43584.0,
    "price": 3.09
  },
  {
    "date": "2024-07-10",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "Germany",
    "quantity": 20160.0,
    "cost": 59332.0,
    "price": 2.94
  },
  {
    "date": "2024-07-10",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:12X750GR",
    "country": "Germany",
    "quantity": 20655.0,
    "cost": 56388.15,
    "price": 2.73
  },
  {
    "date": "2024-07-10",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:14X500GR",
    "country": "Germany",
    "quantity": 18480.0,
    "cost": 54331.2,
    "price": 2.94
  },
  {
    "date": "2024-07-11",
    "product": "D.Z. MALINA ROLEND, PAK. 400 G",
    "country": "Germany",
    "quantity": 10627.2,
    "cost": 37699.99,
    "price": 3.55
  },
  {
    "date": "2024-07-11",
    "product": "D/Z MALINA PAK.4X2,5 KG",
    "country": "Germany",
    "quantity": 20790.0,
    "cost": 68211.99,
    "price": 3.28
  },
  {
    "date": "2024-07-11",
    "product": "D/Z MALINA ROLEND PAK.5X1 KG",
    "country": "Germany",
    "quantity": 17820.0,
    "cost": 64152.0,
    "price": 3.6
  },
  {
    "date": "2024-07-11",
    "product": "-D/Z MALINA ROLEND PAK.U 810KUT.L4178/26.06.2026-",
    "country": "Germany",
    "quantity": 8100.0,
    "cost": 25758.0,
    "price": 3.18
  },
  {
    "date": "2024-07-11",
    "product": "DUBOKO ZAMRZNUTA MALINA 250G, DUBOKO ZAMRZNUTA",
    "country": "Germany",
    "quantity": 12180.0,
    "cost": 42915.3,
    "price": 3.52
  },
  {
    "date": "2024-07-11",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE:750 GR",
    "country": "Germany",
    "quantity": 10692.0,
    "cost": 28226.88,
    "price": 2.64
  },
  {
    "date": "2024-07-12",
    "product": "DUBOKO ZAMRZNUTA MALINA 1 KG",
    "country": "Germany",
    "quantity": 9984.0,
    "cost": 48165.31,
    "price": 4.82
  },
  {
    "date": "2024-07-12",
    "product": "DUBOKO ZAMRZNUTA MALINA 300G",
    "country": "Germany",
    "quantity": 4708.2,
    "cost": 14909.3,
    "price": 3.17
  },
  {
    "date": "2024-07-12",
    "product": "DUBOKO ZAMRZNUTA MALINA 500G (10 X 500G=1/5KG),",
    "country": "Germany",
    "quantity": 8985.0,
    "cost": 27742.5,
    "price": 3.09
  },
  {
    "date": "2024-07-12",
    "product": "DZ MALINA (DEL MONTE), PAK. 300G",
    "country": "Germany",
    "quantity": 17550.0,
    "cost": 79150.5,
    "price": 4.51
  },
  {
    "date": "2024-07-12",
    "product": "ZAMRZNUTA MALINA (IQF RASPBERRY WHOLE) PO FAKTURI",
    "country": "Germany",
    "quantity": 10240.0,
    "cost": 36812.8,
    "price": 3.6
  },
  {
    "date": "2024-07-12",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X1KG",
    "country": "Germany",
    "quantity": 40.0,
    "cost": 147.0,
    "price": 3.68
  },
  {
    "date": "2024-07-12",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X500GR",
    "country": "Germany",
    "quantity": 16335.0,
    "cost": 43124.4,
    "price": 2.64
  },
  {
    "date": "2024-07-12",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5 KG",
    "country": "Germany",
    "quantity": 20790.0,
    "cost": 59251.5,
    "price": 2.85
  },
  {
    "date": "2024-07-12",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "Germany",
    "quantity": 20790.0,
    "cost": 70062.3,
    "price": 3.37
  },
  {
    "date": "2024-07-13",
    "product": "D.Z. MALINA ROLEND, PAK. 200 GR",
    "country": "Germany",
    "quantity": 3456.0,
    "cost": 12804.48,
    "price": 3.71
  },
  {
    "date": "2024-07-13",
    "product": "DUBOKO ZAMRZNUTA MALINA 250G SPAR",
    "country": "Germany",
    "quantity": 4800.0,
    "cost": 18048.0,
    "price": 3.76
  },
  {
    "date": "2024-07-13",
    "product": "DZ MALINA (S-BUDGET), PAK. 500G",
    "country": "Germany",
    "quantity": 11178.0,
    "cost": 47312.1,
    "price": 4.23
  },
  {
    "date": "2024-07-13",
    "product": "DZ MALINA ROLEND PAK.4X2,5 KG",
    "country": "Germany",
    "quantity": 20480.0,
    "cost": 55296.0,
    "price": 2.7
  },
  {
    "date": "2024-07-13",
    "product": "MALINA ROLEND D/Z 4X2,5/1 LOT300124\\M",
    "country": "Germany",
    "quantity": 20160.0,
    "cost": 59270.4,
    "price": 2.94
  },
  {
    "date": "2024-07-13",
    "product": "TK- HIMBEEREN FRESHONA DE/AT 20X500G",
    "country": "Germany",
    "quantity": 20250.0,
    "cost": 62775.0,
    "price": 3.1
  },
  {
    "date": "2024-07-13",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 6X500GR I 10X500GR",
    "country": "Germany",
    "quantity": 7245.0,
    "cost": 17569.35,
    "price": 2.43
  },
  {
    "date": "2024-07-13",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X500GR",
    "country": "Germany",
    "quantity": 16335.0,
    "cost": 49658.4,
    "price": 3.04
  },
  {
    "date": "2024-07-13",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "Germany",
    "quantity": 40500.0,
    "cost": 123120.0,
    "price": 3.04
  },
  {
    "date": "2024-07-13",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 6X500GR",
    "country": "Germany",
    "quantity": 13068.0,
    "cost": 38419.92,
    "price": 2.94
  },
  {
    "date": "2024-07-13",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:14X500GR",
    "country": "Germany",
    "quantity": 36960.0,
    "cost": 108662.4,
    "price": 2.94
  },
  {
    "date": "2024-07-15",
    "product": "D.Z. MALINA ROLEND, PAK. 200 I 400 G",
    "country": "Germany",
    "quantity": 8553.6,
    "cost": 31011.34,
    "price": 3.63
  },
  {
    "date": "2024-07-15",
    "product": "DUBOKO ZAMRZNUTA MALINA 1 KG",
    "country": "Germany",
    "quantity": 5600.0,
    "cost": 17920.0,
    "price": 3.2
  },
  {
    "date": "2024-07-15",
    "product": "DZ MALINA ROLEND",
    "country": "Germany",
    "quantity": 7560.0,
    "cost": 21924.0,
    "price": 2.9
  },
  {
    "date": "2024-07-15",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 12X500GR; 5X1KG; 4X2,5KG",
    "country": "Germany",
    "quantity": 8429.0,
    "cost": 30610.95,
    "price": 3.63
  },
  {
    "date": "2024-07-15",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "Germany",
    "quantity": 20250.0,
    "cost": 61560.0,
    "price": 3.04
  },
  {
    "date": "2024-07-15",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR; 10X300GR",
    "country": "Germany",
    "quantity": 14848.0,
    "cost": 35993.6,
    "price": 2.42
  },
  {
    "date": "2024-07-15",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "Germany",
    "quantity": 20790.0,
    "cost": 72765.0,
    "price": 3.5
  },
  {
    "date": "2024-07-15",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "Germany",
    "quantity": 20790.0,
    "cost": 70062.3,
    "price": 3.37
  },
  {
    "date": "2024-07-15",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 5X1KG",
    "country": "Germany",
    "quantity": 16500.0,
    "cost": 56595.0,
    "price": 3.43
  },
  {
    "date": "2024-07-16",
    "product": "D.Z. MALINA, PAK. 16X350 KG",
    "country": "Germany",
    "quantity": 2520.0,
    "cost": 11880.0,
    "price": 4.71
  },
  {
    "date": "2024-07-16",
    "product": "DZ MALINA (THIRIET, PICARD), PAK. 450G,750G",
    "country": "Germany",
    "quantity": 9234.0,
    "cost": 34100.19,
    "price": 3.69
  },
  {
    "date": "2024-07-16",
    "product": "DZ MALINA ROLEND",
    "country": "Germany",
    "quantity": 18480.0,
    "cost": 51744.0,
    "price": 2.8
  },
  {
    "date": "2024-07-16",
    "product": "DZ MALINA ROLEND FDA",
    "country": "Germany",
    "quantity": 20400.0,
    "cost": 55080.0,
    "price": 2.7
  },
  {
    "date": "2024-07-16",
    "product": "TK- HIMBEEREN FRESHONA DE/AT 20X500G",
    "country": "Germany",
    "quantity": 20250.0,
    "cost": 62775.0,
    "price": 3.1
  },
  {
    "date": "2024-07-16",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE 12X750GR",
    "country": "Germany",
    "quantity": 3456.0,
    "cost": 10368.0,
    "price": 3.0
  },
  {
    "date": "2024-07-16",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 14X500GR",
    "country": "Germany",
    "quantity": 29568.0,
    "cost": 88497.02,
    "price": 2.99
  },
  {
    "date": "2024-07-16",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "Germany",
    "quantity": 20250.0,
    "cost": 61560.0,
    "price": 3.04
  },
  {
    "date": "2024-07-16",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "Germany",
    "quantity": 8190.0,
    "cost": 24078.6,
    "price": 2.94
  },
  {
    "date": "2024-07-16",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:10X250GR",
    "country": "Germany",
    "quantity": 9000.0,
    "cost": 32032.5,
    "price": 3.56
  },
  {
    "date": "2024-07-16",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:2X2,50KG",
    "country": "Germany",
    "quantity": 4455.0,
    "cost": 12622.5,
    "price": 2.83
  },
  {
    "date": "2024-07-17",
    "product": "D.Z. MALINA, PAK. 10X225 G; 10X500 G; 4X2,5 KG",
    "country": "Germany",
    "quantity": 17636.0,
    "cost": 62436.64,
    "price": 3.54
  },
  {
    "date": "2024-07-17",
    "product": "DUBOKO ZAMRZNUTA MALINA 400G",
    "country": "Germany",
    "quantity": 2784.0,
    "cost": 10369.9,
    "price": 3.72
  },
  {
    "date": "2024-07-17",
    "product": "DUBOKO ZAMRZNUTA MALINA 500G (10 X 500G=1/5KG),",
    "country": "Germany",
    "quantity": 8175.0,
    "cost": 26161.5,
    "price": 3.2
  },
  {
    "date": "2024-07-17",
    "product": "DZ MALINA ROLEND PAK.4X2,5 KG",
    "country": "Germany",
    "quantity": 20790.0,
    "cost": 72765.0,
    "price": 3.5
  },
  {
    "date": "2024-07-17",
    "product": "RASPBERRY 400 GR - DUBOKO ZAMRZNUTA MALINA",
    "country": "Germany",
    "quantity": 936.0,
    "cost": 7768.8,
    "price": 8.3
  },
  {
    "date": "2024-07-17",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 20X500GR;6X500GR",
    "country": "Germany",
    "quantity": 14040.0,
    "cost": 34311.6,
    "price": 2.44
  },
  {
    "date": "2024-07-17",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "Germany",
    "quantity": 20250.0,
    "cost": 61560.0,
    "price": 3.04
  },
  {
    "date": "2024-07-18",
    "product": "D.Z. MALINA ROLEND, PAK. 200 GR",
    "country": "Germany",
    "quantity": 6912.0,
    "cost": 25608.96,
    "price": 3.71
  },
  {
    "date": "2024-07-18",
    "product": "D.Z. MALINA, PAK. 10X225 G; 10X500 G; 4X2,5 KG",
    "country": "Germany",
    "quantity": 13779.0,
    "cost": 48460.08,
    "price": 3.52
  },
  {
    "date": "2024-07-18",
    "product": "D.Z. MALINA, PAK. 16X350 KG",
    "country": "Germany",
    "quantity": 10080.0,
    "cost": 47520.0,
    "price": 4.71
  },
  {
    "date": "2024-07-18",
    "product": "D/Z MALINA 300G",
    "country": "Germany",
    "quantity": 2304.0,
    "cost": 7672.32,
    "price": 3.33
  },
  {
    "date": "2024-07-18",
    "product": "DUBOKO ZAMRZNUTA MALINA 250G",
    "country": "Denmark",
    "quantity": 448.0,
    "cost": 1617.1,
    "price": 3.61
  },
  {
    "date": "2024-07-18",
    "product": "SMRZNUTA MALINA 90/10,4X2,5 KG(IQF RASPBERRY",
    "country": "Denmark",
    "quantity": 3000.0,
    "cost": 10950.0,
    "price": 3.65
  },
  {
    "date": "2024-07-18",
    "product": "ZAMRZNUTA MALINA ROLEND 95/5 (IQF RASPBERRY WHOLE",
    "country": "Denmark",
    "quantity": 18000.0,
    "cost": 68400.0,
    "price": 3.8
  },
  {
    "date": "2024-07-18",
    "product": "ZAMRZNUTA MALINA ROLEND 95/5 (IQF RASPBERRY WHOLE",
    "country": "Finland",
    "quantity": 18000.0,
    "cost": 68400.0,
    "price": 3.8
  },
  {
    "date": "2024-07-18",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 30X300GR",
    "country": "Finland",
    "quantity": 2430.0,
    "cost": 9549.9,
    "price": 3.93
  },
  {
    "date": "2024-07-18",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "Finland",
    "quantity": 20790.0,
    "cost": 70062.3,
    "price": 3.37
  },
  {
    "date": "2024-07-19",
    "product": "D.Z. MALINA ROLEND 90/10, PAK. 500 G",
    "country": "Finland",
    "quantity": 20480.0,
    "cost": 72704.0,
    "price": 3.55
  },
  {
    "date": "2024-07-19",
    "product": "-D/Z MALINA FARMFOODS ,PAK.3.536 KUT. OD 4,2KG,",
    "country": "France",
    "quantity": 14851.2,
    "cost": 49751.52,
    "price": 3.35
  },
  {
    "date": "2024-07-19",
    "product": "DUBOKO ZAMRZNUTA MALINA 250G (10 X 250G=1/2,5KG)",
    "country": "France",
    "quantity": 3465.0,
    "cost": 11434.5,
    "price": 3.3
  },
  {
    "date": "2024-07-19",
    "product": "DUBOKO ZAMRZNUTA MALINA 300G",
    "country": "France",
    "quantity": 6724.2,
    "cost": 21293.3,
    "price": 3.17
  },
  {
    "date": "2024-07-19",
    "product": "DZ MALINA (OCADO), PAK. 300G",
    "country": "France",
    "quantity": 13248.0,
    "cost": 48580.42,
    "price": 3.67
  },
  {
    "date": "2024-07-19",
    "product": "DZ MALINA ROLEND",
    "country": "France",
    "quantity": 4140.0,
    "cost": 11592.0,
    "price": 2.8
  },
  {
    "date": "2024-07-19",
    "product": "DZ MALINA ROLEND PAK.4X2,5 KG",
    "country": "France",
    "quantity": 20790.0,
    "cost": 79002.0,
    "price": 3.8
  },
  {
    "date": "2024-07-19",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 5X1KG",
    "country": "France",
    "quantity": 9200.0,
    "cost": 25456.4,
    "price": 2.77
  },
  {
    "date": "2024-07-20",
    "product": "D.Z. MALINA ROLEND, PAK. 300G",
    "country": "France",
    "quantity": 14288.4,
    "cost": 51581.12,
    "price": 3.61
  },
  {
    "date": "2024-07-20",
    "product": "D/Z MALINA 500G",
    "country": "France",
    "quantity": 15840.0,
    "cost": 36869.18,
    "price": 2.33
  },
  {
    "date": "2024-07-20",
    "product": "DZ MALINA (SYSTEME U), PAK 5X1KG",
    "country": "France",
    "quantity": 16800.0,
    "cost": 45360.0,
    "price": 2.7
  },
  {
    "date": "2024-07-20",
    "product": "DZ MALINA ROLEND",
    "country": "France",
    "quantity": 7280.0,
    "cost": 20384.0,
    "price": 2.8
  },
  {
    "date": "2024-07-20",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 11KG/1",
    "country": "France",
    "quantity": 20328.0,
    "cost": 71148.0,
    "price": 3.5
  },
  {
    "date": "2024-07-20",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 6X500GR I 10X500GR",
    "country": "France",
    "quantity": 12960.0,
    "cost": 31312.8,
    "price": 2.42
  },
  {
    "date": "2024-07-20",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE:10X500GR",
    "country": "France",
    "quantity": 16335.0,
    "cost": 51128.55,
    "price": 3.13
  },
  {
    "date": "2024-07-20",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X500GR",
    "country": "France",
    "quantity": 16335.0,
    "cost": 49658.4,
    "price": 3.04
  },
  {
    "date": "2024-07-20",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 14X500GR I 20X500GR",
    "country": "France",
    "quantity": 20080.0,
    "cost": 59035.2,
    "price": 2.94
  },
  {
    "date": "2024-07-20",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "United Kingdom",
    "quantity": 20250.0,
    "cost": 61560.0,
    "price": 3.04
  },
  {
    "date": "2024-07-20",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 24X350GR",
    "country": "United Kingdom",
    "quantity": 19958.4,
    "cost": 60982.89,
    "price": 3.06
  },
  {
    "date": "2024-07-20",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:14X500GR",
    "country": "United Kingdom",
    "quantity": 18480.0,
    "cost": 55440.0,
    "price": 3.0
  },
  {
    "date": "2024-07-20",
    "product": "ZAMRZNUTA MALINA,PAKOVANJE:20X500GR",
    "country": "United Kingdom",
    "quantity": 20480.0,
    "cost": 47104.0,
    "price": 2.3
  },
  {
    "date": "2024-07-22",
    "product": "D\\Z MALINA ROLEND 5X1KG - VILAMET, LOT :240322A,240323 DF",
    "country": "United Kingdom",
    "quantity": 18480.0,
    "cost": 51744.0,
    "price": 2.8
  },
  {
    "date": "2024-07-22",
    "product": "DUBOKO ZAMRZNUTA MALINA 300GR , 1KG , 4X205KG",
    "country": "United Kingdom",
    "quantity": 14726.0,
    "cost": 37181.7,
    "price": 2.52
  },
  {
    "date": "2024-07-22",
    "product": "DUBOKO ZAMRZNUTA MALINA 500G",
    "country": "United Kingdom",
    "quantity": 6720.0,
    "cost": 20832.0,
    "price": 3.1
  },
  {
    "date": "2024-07-22",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X1KG",
    "country": "United Kingdom",
    "quantity": 7560.0,
    "cost": 19580.4,
    "price": 2.59
  },
  {
    "date": "2024-07-22",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "United Kingdom",
    "quantity": 11970.0,
    "cost": 40338.9,
    "price": 3.37
  },
  {
    "date": "2024-07-22",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 6X500GR",
    "country": "United Kingdom",
    "quantity": 13068.0,
    "cost": 38419.92,
    "price": 2.94
  },
  {
    "date": "2024-07-22",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:14X500GR",
    "country": "United Kingdom",
    "quantity": 18480.0,
    "cost": 55440.0,
    "price": 3.0
  },
  {
    "date": "2024-07-23",
    "product": "DUBOKO ZAMRZNUTA MALINA 1000G (10 X",
    "country": "United Kingdom",
    "quantity": 5625.0,
    "cost": 18292.5,
    "price": 3.25
  },
  {
    "date": "2024-07-23",
    "product": "DUBOKO ZAMRZNUTA MALINA 300G",
    "country": "United Kingdom",
    "quantity": 6724.2,
    "cost": 21293.3,
    "price": 3.17
  },
  {
    "date": "2024-07-23",
    "product": "DUBOKO ZAMRZNUTA MALINA 300G (1/4,2 KG)",
    "country": "United Kingdom",
    "quantity": 17472.0,
    "cost": 58108.55,
    "price": 3.33
  },
  {
    "date": "2024-07-23",
    "product": "TK- HIMBEEREN FRESHONA DE/AT 20X500G",
    "country": "United Kingdom",
    "quantity": 20250.0,
    "cost": 62775.0,
    "price": 3.1
  },
  {
    "date": "2024-07-23",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 16X500GR",
    "country": "United Kingdom",
    "quantity": 14784.0,
    "cost": 43648.28,
    "price": 2.95
  },
  {
    "date": "2024-07-23",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "United Kingdom",
    "quantity": 40410.0,
    "cost": 122846.4,
    "price": 3.04
  },
  {
    "date": "2024-07-23",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:14X500GR",
    "country": "Greece",
    "quantity": 36960.0,
    "cost": 109771.2,
    "price": 2.97
  },
  {
    "date": "2024-07-23",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:20X500GR",
    "country": "Greece",
    "quantity": 17820.0,
    "cost": 54885.6,
    "price": 3.08
  },
  {
    "date": "2024-07-23",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:20X500GR",
    "country": "Croatia",
    "quantity": 10170.0,
    "cost": 30916.8,
    "price": 3.04
  },
  {
    "date": "2024-07-24",
    "product": "D/Z MALINA ROLEND 90/10",
    "country": "Hungary",
    "quantity": 20328.0,
    "cost": 81312.0,
    "price": 4.0
  },
  {
    "date": "2024-07-24",
    "product": "DUBOKO ZAMRZNUTA MALINA 1000G (10 X 1000G=1/10KG),",
    "country": "Hungary",
    "quantity": 10860.0,
    "cost": 32958.0,
    "price": 3.03
  },
  {
    "date": "2024-07-24",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 10X250GR I",
    "country": "Hungary",
    "quantity": 6480.0,
    "cost": 16992.0,
    "price": 2.62
  },
  {
    "date": "2024-07-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X500GR",
    "country": "Hungary",
    "quantity": 16335.0,
    "cost": 49658.4,
    "price": 3.04
  },
  {
    "date": "2024-07-25",
    "product": "BSM MALINA 450G PO FAKTURI",
    "country": "IS",
    "quantity": 504.0,
    "cost": 2564.8,
    "price": 5.09
  },
  {
    "date": "2024-07-25",
    "product": "D/Z MALINA 300G",
    "country": "IS",
    "quantity": 3024.0,
    "cost": 6821.14,
    "price": 2.26
  },
  {
    "date": "2024-07-25",
    "product": "D/Z MALINA 300G",
    "country": "Japan",
    "quantity": 2520.0,
    "cost": 5763.24,
    "price": 2.29
  },
  {
    "date": "2024-07-25",
    "product": "D/Z MALINA 500G",
    "country": "LB",
    "quantity": 6240.0,
    "cost": 13846.56,
    "price": 2.22
  },
  {
    "date": "2024-07-25",
    "product": "DZ MALINA ROLEND",
    "country": "LY",
    "quantity": 3360.0,
    "cost": 8736.0,
    "price": 2.6
  },
  {
    "date": "2024-07-25",
    "product": "ZAMRZNUTA MALINA ROLEND (IQF RASPBERRY WHOLE",
    "country": "Montenegro",
    "quantity": 18480.0,
    "cost": 46200.0,
    "price": 2.5
  },
  {
    "date": "2024-07-25",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X1KG",
    "country": "Montenegro",
    "quantity": 8190.0,
    "cost": 20802.6,
    "price": 2.54
  },
  {
    "date": "2024-07-25",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "Montenegro",
    "quantity": 20160.0,
    "cost": 49996.8,
    "price": 2.48
  },
  {
    "date": "2024-07-25",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 5X1KG",
    "country": "North Macedonia",
    "quantity": 16500.0,
    "cost": 56595.0,
    "price": 3.43
  },
  {
    "date": "2024-07-25",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:4X2,5KG",
    "country": "Netherlands",
    "quantity": 20000.0,
    "cost": 42000.0,
    "price": 2.1
  },
  {
    "date": "2024-07-26",
    "product": "D.Z. MALINA ROLEND",
    "country": "Netherlands",
    "quantity": 20480.0,
    "cost": 55296.0,
    "price": 2.7
  },
  {
    "date": "2024-07-26",
    "product": "D.Z. MALINA ROLEND, PAK. 300G",
    "country": "Netherlands",
    "quantity": 17463.6,
    "cost": 63043.6,
    "price": 3.61
  },
  {
    "date": "2024-07-26",
    "product": "D.Z. MALINA, PAK. 750 G",
    "country": "Netherlands",
    "quantity": 7776.0,
    "cost": 37532.16,
    "price": 4.83
  },
  {
    "date": "2024-07-26",
    "product": "D/Z MALINA ROLEND",
    "country": "Netherlands",
    "quantity": 17820.0,
    "cost": 67894.2,
    "price": 3.81
  },
  {
    "date": "2024-07-26",
    "product": "DUBOKO ZAMRZNUTA MALINA 250G SPAR",
    "country": "Netherlands",
    "quantity": 2400.0,
    "cost": 9024.0,
    "price": 3.76
  },
  {
    "date": "2024-07-26",
    "product": "DUBOKO ZAMRZNUTA MALINA 750G",
    "country": "Netherlands",
    "quantity": 486.0,
    "cost": 1679.29,
    "price": 3.46
  },
  {
    "date": "2024-07-26",
    "product": "DZ KONVENCIONALNA MALINA ROLEND FDA",
    "country": "Netherlands",
    "quantity": 20400.0,
    "cost": 55080.0,
    "price": 2.7
  },
  {
    "date": "2024-07-26",
    "product": "DZ MALINA (W&B THIRIET), PAK. 5X1KG",
    "country": "Netherlands",
    "quantity": 6500.0,
    "cost": 22698.0,
    "price": 3.49
  },
  {
    "date": "2024-07-26",
    "product": "ZAMRZNUTA MALINA ROLEND 95/5 (IQF RASPBERRY WHOLE",
    "country": "Netherlands",
    "quantity": 18000.0,
    "cost": 68400.0,
    "price": 3.8
  },
  {
    "date": "2024-07-26",
    "product": "ZAMRZNUTA MALINA ROLEND 95/5 (IQF RASPBERRY WHOLE",
    "country": "Netherlands",
    "quantity": 18000.0,
    "cost": 68400.0,
    "price": 3.8
  },
  {
    "date": "2024-07-26",
    "product": "ZAMRZNUTA MALINA ROLEND 95/5 (IQF RASPBERRY WHOLE",
    "country": "Netherlands",
    "quantity": 18000.0,
    "cost": 68400.0,
    "price": 3.8
  },
  {
    "date": "2024-07-26",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE 4X0,5KG I 3X0,5KG",
    "country": "Norway",
    "quantity": 3.5,
    "cost": 11.77,
    "price": 3.36
  },
  {
    "date": "2024-07-26",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X1KG",
    "country": "Norway",
    "quantity": 20790.0,
    "cost": 57527.8,
    "price": 2.77
  },
  {
    "date": "2024-07-26",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "Norway",
    "quantity": 14490.0,
    "cost": 43759.8,
    "price": 3.02
  },
  {
    "date": "2024-07-26",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 5X1KG",
    "country": "Norway",
    "quantity": 9350.0,
    "cost": 37867.5,
    "price": 4.05
  },
  {
    "date": "2024-07-27",
    "product": "D.Z. MALINA ROLEND, PAK. 200 G",
    "country": "Norway",
    "quantity": 2592.0,
    "cost": 9603.36,
    "price": 3.71
  },
  {
    "date": "2024-07-27",
    "product": "D/Z MALINA ROLEND 4X2,5 KG - (IQF RASPBERRY ROLEND)",
    "country": "Norway",
    "quantity": 10080.0,
    "cost": 28224.0,
    "price": 2.8
  },
  {
    "date": "2024-07-27",
    "product": "D\\Z MALINA -VILAMET \"ROLEND\",PAK. 9\\1- 2.304 KUTIJE",
    "country": "Norway",
    "quantity": 20736.0,
    "cost": 74649.6,
    "price": 3.6
  },
  {
    "date": "2024-07-27",
    "product": "DUBOKO ZAMRZNUTA MALINA 1/5 KG (10X500G) -K-MENU,",
    "country": "Norway",
    "quantity": 6816.0,
    "cost": 22646.4,
    "price": 3.32
  },
  {
    "date": "2024-07-27",
    "product": "DZ MALINA (COLES), PAK. 500G",
    "country": "Poland",
    "quantity": 9009.0,
    "cost": 38702.66,
    "price": 4.3
  },
  {
    "date": "2024-07-27",
    "product": "DZ MALINA ROLEND",
    "country": "Poland",
    "quantity": 19530.0,
    "cost": 69917.4,
    "price": 3.58
  },
  {
    "date": "2024-07-27",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 6X500GR I 10X500GR",
    "country": "Poland",
    "quantity": 7560.0,
    "cost": 18219.6,
    "price": 2.41
  },
  {
    "date": "2024-07-27",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 6X750GR",
    "country": "Russia",
    "quantity": 4455.0,
    "cost": 11761.2,
    "price": 2.64
  },
  {
    "date": "2024-07-27",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "Russia",
    "quantity": 60570.0,
    "cost": 184132.8,
    "price": 3.04
  },
  {
    "date": "2024-07-27",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:10X300GR",
    "country": "Russia",
    "quantity": 14850.0,
    "cost": 47119.05,
    "price": 3.17
  },
  {
    "date": "2024-07-27",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:14X500GR",
    "country": "Russia",
    "quantity": 18480.0,
    "cost": 55440.0,
    "price": 3.0
  },
  {
    "date": "2024-07-29",
    "product": "D.Z. MALINA ROLEND, PAK. 200 I 400 G",
    "country": "SA",
    "quantity": 10238.4,
    "cost": 37858.1,
    "price": 3.7
  },
  {
    "date": "2024-07-29",
    "product": "DUBOKO ZAMRZNUTA MALINA 250G (10 X 250G=1/2,5KG)",
    "country": "SA",
    "quantity": 3465.0,
    "cost": 11434.5,
    "price": 3.3
  },
  {
    "date": "2024-07-29",
    "product": "DUBOKO ZAMRZNUTA MALINA 400G",
    "country": "SA",
    "quantity": 2880.0,
    "cost": 11808.0,
    "price": 4.1
  },
  {
    "date": "2024-07-29",
    "product": "DUBOKO ZAMRZNUTA MALINA 400G",
    "country": "SA",
    "quantity": 2880.0,
    "cost": 8928.0,
    "price": 3.1
  },
  {
    "date": "2024-07-29",
    "product": "DZ MALINA (SYSTEME U, PICARD), PAK. 750G",
    "country": "SA",
    "quantity": 16200.0,
    "cost": 36462.96,
    "price": 2.25
  },
  {
    "date": "2024-07-29",
    "product": "DZ MALINA (W&B THIRIET), PAK. 1KG",
    "country": "Sweden",
    "quantity": 6500.0,
    "cost": 22698.0,
    "price": 3.49
  },
  {
    "date": "2024-07-29",
    "product": "DZ MALINA ROLEND",
    "country": "Sweden",
    "quantity": 10000.0,
    "cost": 32000.0,
    "price": 3.2
  },
  {
    "date": "2024-07-29",
    "product": "DZ MALINA ROLEND PAK.2X2,5 KG",
    "country": "Sweden",
    "quantity": 2475.0,
    "cost": 8910.0,
    "price": 3.6
  },
  {
    "date": "2024-07-29",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X500GR",
    "country": "Sweden",
    "quantity": 16335.0,
    "cost": 49658.4,
    "price": 3.04
  },
  {
    "date": "2024-07-29",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 15X1KG",
    "country": "Sweden",
    "quantity": 20880.0,
    "cost": 51156.0,
    "price": 2.45
  },
  {
    "date": "2024-07-29",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "Sweden",
    "quantity": 20000.0,
    "cost": 60800.0,
    "price": 3.04
  },
  {
    "date": "2024-07-29",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "Sweden",
    "quantity": 20790.0,
    "cost": 72765.0,
    "price": 3.5
  },
  {
    "date": "2024-07-29",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 6X0,5KG",
    "country": "Sweden",
    "quantity": 3.0,
    "cost": 7.35,
    "price": 2.45
  },
  {
    "date": "2024-07-29",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:12X750GR",
    "country": "Sweden",
    "quantity": 20655.0,
    "cost": 56388.15,
    "price": 2.73
  },
  {
    "date": "2024-07-29",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:14X500GR",
    "country": "Sweden",
    "quantity": 8400.0,
    "cost": 24696.0,
    "price": 2.94
  },
  {
    "date": "2024-07-30",
    "product": "D.Z. MALINA ROLEND, 16 X 350 G",
    "country": "Sweden",
    "quantity": 5040.0,
    "cost": 23760.0,
    "price": 4.71
  },
  {
    "date": "2024-07-30",
    "product": "D.Z. MALINA ROLEND, PAK. 400 G",
    "country": "Sweden",
    "quantity": 4147.2,
    "cost": 14712.19,
    "price": 3.55
  },
  {
    "date": "2024-07-30",
    "product": "D/Z MALINA DF RASPBERRY ROLLEND 1X11KG",
    "country": "Sweden",
    "quantity": 20328.0,
    "cost": 62813.52,
    "price": 3.09
  },
  {
    "date": "2024-07-30",
    "product": "-D/Z MALINA ROLEND PAK.U 1485KUT.L4204/22.07.2026",
    "country": "Sweden",
    "quantity": 8100.0,
    "cost": 24705.0,
    "price": 3.05
  },
  {
    "date": "2024-07-30",
    "product": "DUBOKO ZAMRZNUTA MALINA CELA 4X2,5 KG",
    "country": "Sweden",
    "quantity": 2100.0,
    "cost": 28350.0,
    "price": 13.5
  },
  {
    "date": "2024-07-30",
    "product": "DUBOKO ZAMRZNUTA MALINA 250G, DUBOKO ZAMRZNUTA",
    "country": "Sweden",
    "quantity": 2316.0,
    "cost": 8209.89,
    "price": 3.54
  },
  {
    "date": "2024-07-30",
    "product": "DZ MALINA ROLEND PAK.11 KG",
    "country": "Sweden",
    "quantity": 20207.0,
    "cost": 56579.6,
    "price": 2.8
  },
  {
    "date": "2024-07-30",
    "product": "-DZ MALINA, IQF RASPBERRY WHOLE 95/5 4X2,5KG CONTRACT :",
    "country": "Sweden",
    "quantity": 20160.0,
    "cost": 58464.0,
    "price": 2.9
  },
  {
    "date": "2024-07-30",
    "product": "TK- HIMBEEREN FRESHONA DE/AT 20X500G",
    "country": "Sweden",
    "quantity": 20250.0,
    "cost": 62775.0,
    "price": 3.1
  },
  {
    "date": "2024-07-30",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X500GR",
    "country": "Sweden",
    "quantity": 16335.0,
    "cost": 53742.15,
    "price": 3.29
  },
  {
    "date": "2024-07-30",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 12X750GR; 20X500GR",
    "country": "Sweden",
    "quantity": 20196.0,
    "cost": 60825.6,
    "price": 3.01
  },
  {
    "date": "2024-07-30",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 14X500GR",
    "country": "Slovenia",
    "quantity": 29568.0,
    "cost": 89384.06,
    "price": 3.02
  },
  {
    "date": "2024-07-30",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "United States",
    "quantity": 40410.0,
    "cost": 122846.4,
    "price": 3.04
  },
  {
    "date": "2024-07-31",
    "product": "D.Z. MALINA, PAK. 500 G",
    "country": "United States",
    "quantity": 5400.0,
    "cost": 17064.0,
    "price": 3.16
  },
  {
    "date": "2024-07-31",
    "product": "DUBOKO ZAMRZNUTA MALINA 1000G DUBOKO ZAMRZNUTA",
    "country": "United States",
    "quantity": 11550.0,
    "cost": 35391.0,
    "price": 3.06
  },
  {
    "date": "2024-07-31",
    "product": "DZ MALINA ROLEND",
    "country": "United States",
    "quantity": 20000.0,
    "cost": 69000.0,
    "price": 3.45
  },
  {
    "date": "2024-07-31",
    "product": "ZAMRZNUT MALINA(IQF RASPBERRY WHOLE 0,500 KG)",
    "country": "United States",
    "quantity": 10650.0,
    "cost": 41535.0,
    "price": 3.9
  },
  {
    "date": "2024-07-31",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "United States",
    "quantity": 20790.0,
    "cost": 70062.3,
    "price": 3.37
  },
  {
    "date": "2024-07-31",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:20X500GR I 10X500GR",
    "country": "United States",
    "quantity": 18420.0,
    "cost": 55996.8,
    "price": 3.04
  },
  {
    "date": "2024-08-05",
    "product": "RASPBERRY 400 GR - DUBOKO ZAMRZNUTA MALINA",
    "country": "AE",
    "quantity": 1404.0,
    "cost": 11653.2,
    "price": 8.3
  },
  {
    "date": "2024-08-06",
    "product": "D/Z MALINA 300G",
    "country": "Austria",
    "quantity": 1296.0,
    "cost": 2923.34,
    "price": 2.26
  },
  {
    "date": "2024-08-13",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 20X500GR",
    "country": "Austria",
    "quantity": 9720.0,
    "cost": 23814.0,
    "price": 2.45
  },
  {
    "date": "2024-08-26",
    "product": "DUBOKO ZAMRZNUTA MALINA 250G",
    "country": "Austria",
    "quantity": 6240.0,
    "cost": 23462.4,
    "price": 3.76
  },
  {
    "date": "2024-08-27",
    "product": "DZ MALINA (S-BUDGET), PAK. 500G",
    "country": "Austria",
    "quantity": 16038.0,
    "cost": 65146.36,
    "price": 4.06
  },
  {
    "date": "2024-08-07",
    "product": "D.Z. MALINA, PAK. 1 KG",
    "country": "AU",
    "quantity": 4950.0,
    "cost": 15402.64,
    "price": 3.11
  },
  {
    "date": "2024-08-09",
    "product": "DUBOKO ZAMRZNUTA MALINA CELA 10X1KG, DUBOKO ZAMRZNUTA",
    "country": "AU",
    "quantity": 8000.0,
    "cost": 36676.35,
    "price": 4.58
  },
  {
    "date": "2024-08-28",
    "product": "D.Z. MALINA, PAK. 20X500 G",
    "country": "AU",
    "quantity": 17460.0,
    "cost": 68443.2,
    "price": 3.92
  },
  {
    "date": "2024-08-02",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE 6X750GR; 10X250GR",
    "country": "Belgium",
    "quantity": 15219.0,
    "cost": 41618.16,
    "price": 2.73
  },
  {
    "date": "2024-08-03",
    "product": "DZ MALINA (COLES), PAK. 500G",
    "country": "Belgium",
    "quantity": 9009.0,
    "cost": 38702.66,
    "price": 4.3
  },
  {
    "date": "2024-08-05",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 6X750GR",
    "country": "Belgium",
    "quantity": 5346.0,
    "cost": 14113.44,
    "price": 2.64
  },
  {
    "date": "2024-08-06",
    "product": "DZ MALINA (WHOLE), PAK. 10KG",
    "country": "Belgium",
    "quantity": 20480.0,
    "cost": 49152.0,
    "price": 2.4
  },
  {
    "date": "2024-08-08",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 5X1KG",
    "country": "Belgium",
    "quantity": 16500.0,
    "cost": 56595.0,
    "price": 3.43
  },
  {
    "date": "2024-08-09",
    "product": "DZ MALINA (COLES), PAK. 500G",
    "country": "Belgium",
    "quantity": 27027.0,
    "cost": 116107.9,
    "price": 4.3
  },
  {
    "date": "2024-08-15",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 6X250GR",
    "country": "Belgium",
    "quantity": 3648.0,
    "cost": 10360.32,
    "price": 2.84
  },
  {
    "date": "2024-08-16",
    "product": "DZ MALINA (COLES), PAK. 500G",
    "country": "Belgium",
    "quantity": 18018.0,
    "cost": 77405.33,
    "price": 4.3
  },
  {
    "date": "2024-08-16",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:20X500GR",
    "country": "Belgium",
    "quantity": 17820.0,
    "cost": 55085.6,
    "price": 3.09
  },
  {
    "date": "2024-08-17",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X500GR",
    "country": "Belgium",
    "quantity": 3072.0,
    "cost": 13670.4,
    "price": 4.45
  },
  {
    "date": "2024-08-19",
    "product": "DZ MALINA (SYSTEME U), PAK. 1KG",
    "country": "Belgium",
    "quantity": 19800.0,
    "cost": 53460.0,
    "price": 2.7
  },
  {
    "date": "2024-08-23",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 10X250GR",
    "country": "Belgium",
    "quantity": 6720.0,
    "cost": 19084.8,
    "price": 2.84
  },
  {
    "date": "2024-08-23",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 5X1KG",
    "country": "Belgium",
    "quantity": 16500.0,
    "cost": 56595.0,
    "price": 3.43
  },
  {
    "date": "2024-08-24",
    "product": "- D/F RASPBERRIES, D/Z MALINA, I.Q.F. ROLLEND, 10X1 KG I 4X2,5 KG, LOT",
    "country": "Belgium",
    "quantity": 18000.0,
    "cost": 45900.0,
    "price": 2.55
  },
  {
    "date": "2024-08-24",
    "product": "DZ MALINA (COLES), PAK. 500G",
    "country": "Belgium",
    "quantity": 18018.0,
    "cost": 77405.33,
    "price": 4.3
  },
  {
    "date": "2024-08-26",
    "product": "DZ MALINA (CROPS, THIRIET), PAK. 300G, 1KG",
    "country": "Belgium",
    "quantity": 17400.0,
    "cost": 63012.6,
    "price": 3.62
  },
  {
    "date": "2024-08-27",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE 5X1KG; 6X750GR",
    "country": "Belgium",
    "quantity": 13882.5,
    "cost": 37564.2,
    "price": 2.71
  },
  {
    "date": "2024-08-30",
    "product": "DZ MALINA (COLES), PAK. 500G",
    "country": "Belgium",
    "quantity": 18018.0,
    "cost": 77405.33,
    "price": 4.3
  },
  {
    "date": "2024-08-31",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X500GR",
    "country": "Belgium",
    "quantity": 18810.0,
    "cost": 61884.9,
    "price": 3.29
  },
  {
    "date": "2024-08-31",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 8X500GR",
    "country": "Belgium",
    "quantity": 10560.0,
    "cost": 32630.4,
    "price": 3.09
  },
  {
    "date": "2024-08-15",
    "product": "DZ MALINA ROLEND 4X2,5KG",
    "country": "Canada",
    "quantity": 10000.0,
    "cost": 20322.22,
    "price": 2.03
  },
  {
    "date": "2024-08-16",
    "product": "DZ MALINA ROLEND",
    "country": "Canada",
    "quantity": 20400.0,
    "cost": 48960.0,
    "price": 2.4
  },
  {
    "date": "2024-08-16",
    "product": "DZ MALINA ROLEND",
    "country": "Canada",
    "quantity": 12000.0,
    "cost": 43680.0,
    "price": 3.64
  },
  {
    "date": "2024-08-17",
    "product": "D/Z ORGANSKA MALINA ROLEND",
    "country": "Canada",
    "quantity": 20400.0,
    "cost": 91800.0,
    "price": 4.5
  },
  {
    "date": "2024-08-17",
    "product": "DZ MALINA ROLEND",
    "country": "Canada",
    "quantity": 20400.0,
    "cost": 55080.0,
    "price": 2.7
  },
  {
    "date": "2024-08-23",
    "product": "DZ MALINA ROLEND",
    "country": "Canada",
    "quantity": 40800.0,
    "cost": 97920.0,
    "price": 2.4
  },
  {
    "date": "2024-08-10",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 14X500GR",
    "country": "Switzerland",
    "quantity": 12936.0,
    "cost": 39534.5,
    "price": 3.06
  },
  {
    "date": "2024-08-12",
    "product": "RASPBERRY 300 GR - DUBOKO ZAMRZNUTA MALINA",
    "country": "CY",
    "quantity": 1980.0,
    "cost": 8448.0,
    "price": 4.27
  },
  {
    "date": "2024-08-03",
    "product": "TK- HIMBEEREN FRESHONA DE/AT 20X500G",
    "country": "Germany",
    "quantity": 20250.0,
    "cost": 62975.0,
    "price": 3.11
  },
  {
    "date": "2024-08-03",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 6X500GR I 10X500GR",
    "country": "Germany",
    "quantity": 13770.0,
    "cost": 33324.3,
    "price": 2.42
  },
  {
    "date": "2024-08-03",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X500GR",
    "country": "Germany",
    "quantity": 16335.0,
    "cost": 49858.4,
    "price": 3.05
  },
  {
    "date": "2024-08-03",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 14X500GR",
    "country": "Germany",
    "quantity": 14784.0,
    "cost": 45335.55,
    "price": 3.07
  },
  {
    "date": "2024-08-03",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "Germany",
    "quantity": 40550.0,
    "cost": 123672.0,
    "price": 3.05
  },
  {
    "date": "2024-08-03",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:14X500GR",
    "country": "Germany",
    "quantity": 18480.0,
    "cost": 55640.0,
    "price": 3.01
  },
  {
    "date": "2024-08-05",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 12X750GR; 14X500GR",
    "country": "Germany",
    "quantity": 5712.0,
    "cost": 16993.28,
    "price": 2.98
  },
  {
    "date": "2024-08-05",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "Germany",
    "quantity": 20160.0,
    "cost": 61486.4,
    "price": 3.05
  },
  {
    "date": "2024-08-05",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:6X500GR I 20X500GR",
    "country": "Germany",
    "quantity": 15876.0,
    "cost": 47631.44,
    "price": 3.0
  },
  {
    "date": "2024-08-06",
    "product": "DZ MALINA-TK HIMBEEREN FRESHONA DE/AT 20X500G",
    "country": "Germany",
    "quantity": 17100.0,
    "cost": 53184.32,
    "price": 3.11
  },
  {
    "date": "2024-08-06",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 12X750GR",
    "country": "Germany",
    "quantity": 19008.0,
    "cost": 56083.52,
    "price": 2.95
  },
  {
    "date": "2024-08-06",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 14X500GR",
    "country": "Germany",
    "quantity": 14784.0,
    "cost": 45335.55,
    "price": 3.07
  },
  {
    "date": "2024-08-06",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "Germany",
    "quantity": 40320.0,
    "cost": 124816.0,
    "price": 3.1
  },
  {
    "date": "2024-08-06",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:10X300GR",
    "country": "Germany",
    "quantity": 14850.0,
    "cost": 47319.05,
    "price": 3.19
  },
  {
    "date": "2024-08-09",
    "product": "DZ MALINA ROLEND PAK.4X2,5 KG",
    "country": "Germany",
    "quantity": 20160.0,
    "cost": 76608.0,
    "price": 3.8
  },
  {
    "date": "2024-08-10",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 6X500GR I 10X500GR",
    "country": "Germany",
    "quantity": 13230.0,
    "cost": 31983.3,
    "price": 2.42
  },
  {
    "date": "2024-08-10",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "Germany",
    "quantity": 60480.0,
    "cost": 185668.8,
    "price": 3.07
  },
  {
    "date": "2024-08-10",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "Germany",
    "quantity": 20790.0,
    "cost": 72765.0,
    "price": 3.5
  },
  {
    "date": "2024-08-10",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:10X300GR I 12X750GR",
    "country": "Germany",
    "quantity": 16740.0,
    "cost": 51302.9,
    "price": 3.06
  },
  {
    "date": "2024-08-10",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:14X500GR",
    "country": "Germany",
    "quantity": 18480.0,
    "cost": 55640.0,
    "price": 3.01
  },
  {
    "date": "2024-08-12",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:10X300GR I 12X750GR",
    "country": "Germany",
    "quantity": 16740.0,
    "cost": 51302.9,
    "price": 3.06
  },
  {
    "date": "2024-08-12",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:20X500GR",
    "country": "Germany",
    "quantity": 20160.0,
    "cost": 61486.4,
    "price": 3.05
  },
  {
    "date": "2024-08-13",
    "product": "TK- HIMBEEREN BESTE ERNTE 20X500G",
    "country": "Germany",
    "quantity": 20160.0,
    "cost": 62696.0,
    "price": 3.11
  },
  {
    "date": "2024-08-13",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X500; 12X750GR",
    "country": "Germany",
    "quantity": 16983.0,
    "cost": 51367.52,
    "price": 3.02
  },
  {
    "date": "2024-08-13",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:10X500GR",
    "country": "Germany",
    "quantity": 16335.0,
    "cost": 49858.4,
    "price": 3.05
  },
  {
    "date": "2024-08-13",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:14X500GR",
    "country": "Germany",
    "quantity": 18480.0,
    "cost": 55640.0,
    "price": 3.01
  },
  {
    "date": "2024-08-13",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:20X500GR",
    "country": "Germany",
    "quantity": 20160.0,
    "cost": 62696.0,
    "price": 3.11
  },
  {
    "date": "2024-08-14",
    "product": "TK- HIMBEEREN BESTE ERNTE 20X500G",
    "country": "Germany",
    "quantity": 20160.0,
    "cost": 62696.0,
    "price": 3.11
  },
  {
    "date": "2024-08-16",
    "product": "DZ MALINA ROLEND",
    "country": "Germany",
    "quantity": 11200.0,
    "cost": 31360.0,
    "price": 2.8
  },
  {
    "date": "2024-08-17",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 10X500GR",
    "country": "Germany",
    "quantity": 16335.0,
    "cost": 39694.05,
    "price": 2.43
  },
  {
    "date": "2024-08-17",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 6X500GR",
    "country": "Germany",
    "quantity": 4680.0,
    "cost": 11278.8,
    "price": 2.41
  },
  {
    "date": "2024-08-17",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 14X500GR",
    "country": "Germany",
    "quantity": 14784.0,
    "cost": 44448.51,
    "price": 3.01
  },
  {
    "date": "2024-08-17",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "Germany",
    "quantity": 20250.0,
    "cost": 61760.0,
    "price": 3.05
  },
  {
    "date": "2024-08-17",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 24X350GR",
    "country": "Germany",
    "quantity": 19958.4,
    "cost": 61172.91,
    "price": 3.07
  },
  {
    "date": "2024-08-17",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:10X300GR",
    "country": "Germany",
    "quantity": 14850.0,
    "cost": 47319.05,
    "price": 3.19
  },
  {
    "date": "2024-08-17",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:10X300GR; 18X500GR",
    "country": "Germany",
    "quantity": 18126.0,
    "cost": 56030.94,
    "price": 3.09
  },
  {
    "date": "2024-08-17",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:20X500GR",
    "country": "Germany",
    "quantity": 20160.0,
    "cost": 72776.0,
    "price": 3.61
  },
  {
    "date": "2024-08-20",
    "product": "-D/Z MALINA ROLEND PAK.U 1035 KUT.L4228/15.08.2026 - MATERIAL NO.",
    "country": "Germany",
    "quantity": 10350.0,
    "cost": 32913.0,
    "price": 3.18
  },
  {
    "date": "2024-08-20",
    "product": "TK- HIMBEEREN FRESHONA DE/AT 20X500G",
    "country": "Germany",
    "quantity": 20250.0,
    "cost": 73100.0,
    "price": 3.61
  },
  {
    "date": "2024-08-20",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "Germany",
    "quantity": 9120.0,
    "cost": 33032.0,
    "price": 3.62
  },
  {
    "date": "2024-08-20",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR; 12X750GR",
    "country": "Germany",
    "quantity": 19520.0,
    "cost": 58964.8,
    "price": 3.02
  },
  {
    "date": "2024-08-20",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 6X500GR",
    "country": "Germany",
    "quantity": 13068.0,
    "cost": 38619.92,
    "price": 2.96
  },
  {
    "date": "2024-08-20",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:10X500GR I 14X500GR",
    "country": "Germany",
    "quantity": 16725.0,
    "cost": 50708.0,
    "price": 3.03
  },
  {
    "date": "2024-08-20",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:14X500GR",
    "country": "Germany",
    "quantity": 18480.0,
    "cost": 66728.0,
    "price": 3.61
  },
  {
    "date": "2024-08-20",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:20X500GR",
    "country": "Germany",
    "quantity": 20160.0,
    "cost": 72776.0,
    "price": 3.61
  },
  {
    "date": "2024-08-23",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:20X500GR",
    "country": "Germany",
    "quantity": 20100.0,
    "cost": 72560.0,
    "price": 3.61
  },
  {
    "date": "2024-08-24",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 10X500GR",
    "country": "Germany",
    "quantity": 16335.0,
    "cost": 54722.25,
    "price": 3.35
  },
  {
    "date": "2024-08-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X500GR",
    "country": "Germany",
    "quantity": 16335.0,
    "cost": 49858.4,
    "price": 3.05
  },
  {
    "date": "2024-08-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 16X500GR",
    "country": "Germany",
    "quantity": 14784.0,
    "cost": 43848.28,
    "price": 2.97
  },
  {
    "date": "2024-08-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "Germany",
    "quantity": 20250.0,
    "cost": 73100.0,
    "price": 3.61
  },
  {
    "date": "2024-08-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:10X1000GR",
    "country": "Germany",
    "quantity": 18480.0,
    "cost": 56102.0,
    "price": 3.04
  },
  {
    "date": "2024-08-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:14X500GR",
    "country": "Germany",
    "quantity": 18480.0,
    "cost": 52683.2,
    "price": 2.85
  },
  {
    "date": "2024-08-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:20X500GR",
    "country": "Germany",
    "quantity": 20160.0,
    "cost": 60462.4,
    "price": 3.0
  },
  {
    "date": "2024-08-26",
    "product": "TK- HIMBEEREN FRESHONA DE/AT 20X500G",
    "country": "Germany",
    "quantity": 20250.0,
    "cost": 73100.0,
    "price": 3.61
  },
  {
    "date": "2024-08-26",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:10X300GR",
    "country": "Germany",
    "quantity": 14850.0,
    "cost": 47319.05,
    "price": 3.19
  },
  {
    "date": "2024-08-26",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:14X500GR",
    "country": "Germany",
    "quantity": 18480.0,
    "cost": 64880.0,
    "price": 3.51
  },
  {
    "date": "2024-08-27",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 14X500GR",
    "country": "Germany",
    "quantity": 14784.0,
    "cost": 44448.51,
    "price": 3.01
  },
  {
    "date": "2024-08-27",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 18X500GR",
    "country": "Germany",
    "quantity": 18711.0,
    "cost": 57586.64,
    "price": 3.08
  },
  {
    "date": "2024-08-27",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "Germany",
    "quantity": 9520.0,
    "cost": 35700.0,
    "price": 3.75
  },
  {
    "date": "2024-08-27",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:20X500GR",
    "country": "Germany",
    "quantity": 20160.0,
    "cost": 72776.0,
    "price": 3.61
  },
  {
    "date": "2024-08-28",
    "product": "TK- HIMBEEREN FRESHONA BESTE ERNTE 20X500G",
    "country": "Germany",
    "quantity": 20160.0,
    "cost": 72776.0,
    "price": 3.61
  },
  {
    "date": "2024-08-28",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "Germany",
    "quantity": 11970.0,
    "cost": 36488.8,
    "price": 3.05
  },
  {
    "date": "2024-08-31",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 10X500GR",
    "country": "Germany",
    "quantity": 7425.0,
    "cost": 24873.75,
    "price": 3.35
  },
  {
    "date": "2024-08-31",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 12X750GR",
    "country": "Germany",
    "quantity": 19008.0,
    "cost": 56083.52,
    "price": 2.95
  },
  {
    "date": "2024-08-31",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR; 6X500GR",
    "country": "Germany",
    "quantity": 14352.0,
    "cost": 43325.04,
    "price": 3.02
  },
  {
    "date": "2024-08-31",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 24X350GR",
    "country": "Germany",
    "quantity": 19958.4,
    "cost": 61172.91,
    "price": 3.07
  },
  {
    "date": "2024-08-31",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:14X500GR",
    "country": "Germany",
    "quantity": 18480.0,
    "cost": 54531.2,
    "price": 2.95
  },
  {
    "date": "2024-08-31",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:20X500GR",
    "country": "Germany",
    "quantity": 40320.0,
    "cost": 145552.0,
    "price": 3.61
  },
  {
    "date": "2024-08-20",
    "product": "D.Z. MALINA ROLEND, PAK. 200 G",
    "country": "Denmark",
    "quantity": 6912.0,
    "cost": 25608.96,
    "price": 3.71
  },
  {
    "date": "2024-08-23",
    "product": "D.Z. MALINA ROLEND, PAK. 200 GR",
    "country": "Denmark",
    "quantity": 7776.0,
    "cost": 28810.08,
    "price": 3.71
  },
  {
    "date": "2024-08-22",
    "product": "D.Z. MALINA ROLEND, PAK. 200 I 400 G",
    "country": "Finland",
    "quantity": 12182.4,
    "cost": 45352.22,
    "price": 3.72
  },
  {
    "date": "2024-08-06",
    "product": "D\\Z MALINA ROLEND 5X1KG- VILAMET, LOT:RD233322A, DF RASPBERRY",
    "country": "France",
    "quantity": 18432.0,
    "cost": 46944.0,
    "price": 2.55
  },
  {
    "date": "2024-08-09",
    "product": "D.Z. MALINA ROLEND 90/10",
    "country": "France",
    "quantity": 17820.0,
    "cost": 69498.0,
    "price": 3.9
  },
  {
    "date": "2024-08-09",
    "product": "ZAMRZNUT MALINA(IQF RASPBERRY WHOLE)",
    "country": "France",
    "quantity": 17820.0,
    "cost": 68197.14,
    "price": 3.83
  },
  {
    "date": "2024-08-16",
    "product": "D/Z MALINA ROLEND",
    "country": "France",
    "quantity": 17820.0,
    "cost": 69498.0,
    "price": 3.9
  },
  {
    "date": "2024-08-16",
    "product": "DZ MALINA ROLEND",
    "country": "France",
    "quantity": 10692.0,
    "cost": 39560.4,
    "price": 3.7
  },
  {
    "date": "2024-08-19",
    "product": "D\\Z MALINA ROLEND FERTODI 4 KG (8X500 GR.); 2.640 KUTIJA",
    "country": "France",
    "quantity": 10560.0,
    "cost": 48576.0,
    "price": 4.6
  },
  {
    "date": "2024-08-19",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 6X0,5KG",
    "country": "France",
    "quantity": 3.0,
    "cost": 10.35,
    "price": 3.45
  },
  {
    "date": "2024-08-20",
    "product": "DZ MALINA ROLEND",
    "country": "France",
    "quantity": 7924.0,
    "cost": 29318.8,
    "price": 3.7
  },
  {
    "date": "2024-08-20",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 15X1KG",
    "country": "France",
    "quantity": 20880.0,
    "cost": 69948.0,
    "price": 3.35
  },
  {
    "date": "2024-08-20",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 6X0,5KG",
    "country": "France",
    "quantity": 3.0,
    "cost": 10.05,
    "price": 3.35
  },
  {
    "date": "2024-08-22",
    "product": "12 PALETA/IQF ZAMRZNUTA MALINA VILAMET 5X1 KG PO FAKTURI",
    "country": "France",
    "quantity": 5940.0,
    "cost": 18889.2,
    "price": 3.18
  },
  {
    "date": "2024-08-22",
    "product": "9 PALETA/IQF ZAMRZNUTA MALINA VILAMET 5X1 KG PO FAKTURI",
    "country": "France",
    "quantity": 4455.0,
    "cost": 13898.02,
    "price": 3.12
  },
  {
    "date": "2024-08-22",
    "product": "D.Z. MALINA ROLEND 90/10",
    "country": "France",
    "quantity": 17820.0,
    "cost": 69498.0,
    "price": 3.9
  },
  {
    "date": "2024-08-23",
    "product": "D\\Z MALINA ROLEND 4X2,5KG - VILAMET, LOT : 18183 DF RASPBERRY IQF",
    "country": "France",
    "quantity": 20000.0,
    "cost": 80000.0,
    "price": 4.0
  },
  {
    "date": "2024-08-23",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 15X1KG",
    "country": "France",
    "quantity": 20880.0,
    "cost": 75168.0,
    "price": 3.6
  },
  {
    "date": "2024-08-23",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 6X0,5KG",
    "country": "France",
    "quantity": 3.0,
    "cost": 10.8,
    "price": 3.6
  },
  {
    "date": "2024-08-26",
    "product": "D/Z MALINA ROLEND",
    "country": "France",
    "quantity": 17820.0,
    "cost": 69498.0,
    "price": 3.9
  },
  {
    "date": "2024-08-26",
    "product": "D\\Z MALINA ROLEND 20X450G - VILAMET, LOT : 240523,240524 DF",
    "country": "France",
    "quantity": 19008.0,
    "cost": 47520.0,
    "price": 2.5
  },
  {
    "date": "2024-08-26",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 6X0,5KG",
    "country": "France",
    "quantity": 3.0,
    "cost": 10.05,
    "price": 3.35
  },
  {
    "date": "2024-08-27",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 12X500GR",
    "country": "France",
    "quantity": 11088.0,
    "cost": 51004.8,
    "price": 4.6
  },
  {
    "date": "2024-08-29",
    "product": "D.Z. MALINA ROLEND 90/10",
    "country": "France",
    "quantity": 6480.0,
    "cost": 25472.0,
    "price": 3.93
  },
  {
    "date": "2024-08-30",
    "product": "D.Z. MALINA, PAK. 500 G",
    "country": "France",
    "quantity": 6750.0,
    "cost": 21330.0,
    "price": 3.16
  },
  {
    "date": "2024-08-02",
    "product": "DUBOKO ZAMRZNUTA MALINA PAKOVANJE 300G AD",
    "country": "United Kingdom",
    "quantity": 18576.0,
    "cost": 86665.99,
    "price": 4.67
  },
  {
    "date": "2024-08-02",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "United Kingdom",
    "quantity": 20790.0,
    "cost": 70062.3,
    "price": 3.37
  },
  {
    "date": "2024-08-05",
    "product": "DUBOKO ZAMRZNUTA MALINA 300G (1/4,2 KG)",
    "country": "United Kingdom",
    "quantity": 17472.0,
    "cost": 57649.79,
    "price": 3.3
  },
  {
    "date": "2024-08-06",
    "product": "DUBOKO ZAMRZNUTA MALINA 300G (1/4,2 KG)",
    "country": "United Kingdom",
    "quantity": 17472.0,
    "cost": 57649.79,
    "price": 3.3
  },
  {
    "date": "2024-08-08",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "United Kingdom",
    "quantity": 20790.0,
    "cost": 70062.3,
    "price": 3.37
  },
  {
    "date": "2024-08-10",
    "product": "DZ MALINA (DEL MONTE), PAK. 300G",
    "country": "United Kingdom",
    "quantity": 9450.0,
    "cost": 42619.5,
    "price": 4.51
  },
  {
    "date": "2024-08-12",
    "product": "DUBOKO ZAMRZNUTA MALINA 300G (1/4,2 KG)",
    "country": "United Kingdom",
    "quantity": 17472.0,
    "cost": 57111.36,
    "price": 3.27
  },
  {
    "date": "2024-08-12",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "United Kingdom",
    "quantity": 20790.0,
    "cost": 70062.3,
    "price": 3.37
  },
  {
    "date": "2024-08-14",
    "product": "DZ MALINA ROLEND PAK.11 KG",
    "country": "United Kingdom",
    "quantity": 20207.0,
    "cost": 56579.6,
    "price": 2.8
  },
  {
    "date": "2024-08-14",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "United Kingdom",
    "quantity": 20790.0,
    "cost": 70062.3,
    "price": 3.37
  },
  {
    "date": "2024-08-15",
    "product": "DZ MALINA ROLEND PAK.11 KG",
    "country": "United Kingdom",
    "quantity": 20207.0,
    "cost": 56579.6,
    "price": 2.8
  },
  {
    "date": "2024-08-16",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "United Kingdom",
    "quantity": 20790.0,
    "cost": 70062.3,
    "price": 3.37
  },
  {
    "date": "2024-08-19",
    "product": "DUBOKO ZAMRZNUTA MALINA 300G (1/4,2 KG)",
    "country": "United Kingdom",
    "quantity": 17472.0,
    "cost": 81903.21,
    "price": 4.69
  },
  {
    "date": "2024-08-20",
    "product": "DUBOKO ZAMRZNUTA MALINA PAKOVANJE 300G AD",
    "country": "United Kingdom",
    "quantity": 15876.0,
    "cost": 73305.34,
    "price": 4.62
  },
  {
    "date": "2024-08-21",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "United Kingdom",
    "quantity": 20790.0,
    "cost": 70062.3,
    "price": 3.37
  },
  {
    "date": "2024-08-22",
    "product": "DZ MALINA ROLEND PAK.11 KG",
    "country": "United Kingdom",
    "quantity": 20207.0,
    "cost": 56579.6,
    "price": 2.8
  },
  {
    "date": "2024-08-22",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "United Kingdom",
    "quantity": 20790.0,
    "cost": 82536.3,
    "price": 3.97
  },
  {
    "date": "2024-08-26",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "United Kingdom",
    "quantity": 20790.0,
    "cost": 82536.3,
    "price": 3.97
  },
  {
    "date": "2024-08-27",
    "product": "DUBOKO ZAMRZNUTA MALINA 300G (1/4,2 KG)",
    "country": "United Kingdom",
    "quantity": 17472.0,
    "cost": 82308.31,
    "price": 4.71
  },
  {
    "date": "2024-08-28",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE 24X350GR",
    "country": "United Kingdom",
    "quantity": 19958.4,
    "cost": 59476.03,
    "price": 2.98
  },
  {
    "date": "2024-08-29",
    "product": "DUBOKO ZAMRZNUTA MALINA 300G (1/4,2 KG)",
    "country": "United Kingdom",
    "quantity": 17472.0,
    "cost": 82308.31,
    "price": 4.71
  },
  {
    "date": "2024-08-29",
    "product": "DZ MALINA (DEL MONTE), PAK. 300G",
    "country": "United Kingdom",
    "quantity": 5400.0,
    "cost": 24354.0,
    "price": 4.51
  },
  {
    "date": "2024-08-29",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "United Kingdom",
    "quantity": 20790.0,
    "cost": 82536.3,
    "price": 3.97
  },
  {
    "date": "2024-08-03",
    "product": "D\\Z MALINA -VILAMET \"ROLEND\",PAK. 12\\1-1.568 KUTIJA",
    "country": "Greece",
    "quantity": 18816.0,
    "cost": 67737.6,
    "price": 3.6
  },
  {
    "date": "2024-08-06",
    "product": "DUBOKO ZAMRZNUTA MALINA FRIZO 400G (12X400G)",
    "country": "Croatia",
    "quantity": 3494.4,
    "cost": 11605.3,
    "price": 3.32
  },
  {
    "date": "2024-08-07",
    "product": "DUBOKO ZAMRZNUTA MALINA 300GDUBOKO ZAMRZNUTA MALINA 2.5KG",
    "country": "Croatia",
    "quantity": 11785.6,
    "cost": 35695.36,
    "price": 3.03
  },
  {
    "date": "2024-08-26",
    "product": "DZ MALINA,PAK.2,5 KG,PROIZVOĐAČ:ARETOL DOO,NOVI SAD",
    "country": "Croatia",
    "quantity": 1280.0,
    "cost": 4633.6,
    "price": 3.62
  },
  {
    "date": "2024-08-27",
    "product": "DUBOKO ZAMRZNUTA MALINA 250G SPAR",
    "country": "Croatia",
    "quantity": 960.0,
    "cost": 11995.2,
    "price": 12.5
  },
  {
    "date": "2024-08-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "Hungary",
    "quantity": 6300.0,
    "cost": 18522.0,
    "price": 2.94
  },
  {
    "date": "2024-08-10",
    "product": "DUBOKO ZAMRZNUTA MALINA PAKOVANJE 300G",
    "country": "JO",
    "quantity": 2592.0,
    "cost": 11664.0,
    "price": 4.5
  },
  {
    "date": "2024-08-05",
    "product": "DUBOKO ZAMRZNUTA MALINA CELA 4X2,5 KG",
    "country": "Japan",
    "quantity": 18270.0,
    "cost": 82215.0,
    "price": 4.5
  },
  {
    "date": "2024-08-26",
    "product": "DUBOKO ZAMRZNUTA MALINA CELA 4X2,5 KG",
    "country": "Japan",
    "quantity": 18270.0,
    "cost": 82215.0,
    "price": 4.5
  },
  {
    "date": "2024-08-30",
    "product": "DZ MALINA ROLEND 95/5",
    "country": "Japan",
    "quantity": 10000.0,
    "cost": 43000.0,
    "price": 4.3
  },
  {
    "date": "2024-08-10",
    "product": "D.Z. MALINA, PAK. 16X350 G",
    "country": "KW",
    "quantity": 560.0,
    "cost": 2640.0,
    "price": 4.71
  },
  {
    "date": "2024-08-10",
    "product": "D.Z. MALINA, PAK. 20X350G",
    "country": "KW",
    "quantity": 1750.0,
    "cost": 7750.0,
    "price": 4.43
  },
  {
    "date": "2024-08-17",
    "product": "DUBOKO ZAMRZNUTA MALINA 5X1KG",
    "country": "KW",
    "quantity": 6600.0,
    "cost": 30888.0,
    "price": 4.68
  },
  {
    "date": "2024-08-09",
    "product": "D.Z. MALINA, PAK. 400 G",
    "country": "LB",
    "quantity": 2800.0,
    "cost": 11200.0,
    "price": 4.0
  },
  {
    "date": "2024-08-08",
    "product": "SMRZNUTE MALINE 300GR",
    "country": "Montenegro",
    "quantity": 499.2,
    "cost": 1547.52,
    "price": 3.1
  },
  {
    "date": "2024-08-22",
    "product": "MALINA 300GR",
    "country": "Montenegro",
    "quantity": 499.2,
    "cost": 1547.52,
    "price": 3.1
  },
  {
    "date": "2024-08-08",
    "product": "MALINA 300 GR FAKTURA: 916434419 STAVKA: 6",
    "country": "North Macedonia",
    "quantity": 499.2,
    "cost": 1547.52,
    "price": 3.1
  },
  {
    "date": "2024-08-16",
    "product": "MALINA 300G - GARDENIA - PREMA FAKTURI",
    "country": "North Macedonia",
    "quantity": 420.0,
    "cost": 2380.0,
    "price": 5.67
  },
  {
    "date": "2024-08-01",
    "product": "DUBOKO ZAMRZNUTA MALINA 250G, DUBOKO ZAMRZNUTA MALINA 750G",
    "country": "Netherlands",
    "quantity": 5566.0,
    "cost": 19716.17,
    "price": 3.54
  },
  {
    "date": "2024-08-02",
    "product": "DUBOKO ZAMRZNUTA MALINA 250G, DUBOKO ZAMRZNUTA MALINA 750G",
    "country": "Netherlands",
    "quantity": 2316.0,
    "cost": 8209.89,
    "price": 3.54
  },
  {
    "date": "2024-08-05",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:10X300GR I 20X500GR",
    "country": "Netherlands",
    "quantity": 12928.0,
    "cost": 31161.6,
    "price": 2.41
  },
  {
    "date": "2024-08-06",
    "product": "D.Z. MALINA ROLEND 90/10, PAK. 500 G",
    "country": "Netherlands",
    "quantity": 20480.0,
    "cost": 72704.0,
    "price": 3.55
  },
  {
    "date": "2024-08-13",
    "product": "D/Z MALINA 250G.,750G / D/F RASPBERRY 250G., 750G.",
    "country": "Netherlands",
    "quantity": 8652.0,
    "cost": 20927.96,
    "price": 2.42
  },
  {
    "date": "2024-08-16",
    "product": "DUBOKO ZAMRZNUTA MALINA 250G, DUBOKO ZAMRZNUTA MALINA 750G",
    "country": "Netherlands",
    "quantity": 15400.0,
    "cost": 53488.58,
    "price": 3.47
  },
  {
    "date": "2024-08-16",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X300GR",
    "country": "Netherlands",
    "quantity": 4608.0,
    "cost": 12441.6,
    "price": 2.7
  },
  {
    "date": "2024-08-17",
    "product": "D.Z. MALINA ROLEND 90/10, PAK. 500 G",
    "country": "Netherlands",
    "quantity": 20480.0,
    "cost": 72704.0,
    "price": 3.55
  },
  {
    "date": "2024-08-17",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "Netherlands",
    "quantity": 20480.0,
    "cost": 47104.0,
    "price": 2.3
  },
  {
    "date": "2024-08-20",
    "product": "DUBOKO ZAMRZNUTA MALINA 750G",
    "country": "Netherlands",
    "quantity": 3812.0,
    "cost": 13309.95,
    "price": 3.49
  },
  {
    "date": "2024-08-23",
    "product": "DUBOKO ZAMRZNUTA MALINA 250G, DUBOKO ZAMRZNUTA MALINA 750G",
    "country": "Netherlands",
    "quantity": 3698.0,
    "cost": 13123.38,
    "price": 3.55
  },
  {
    "date": "2024-08-29",
    "product": "D/Z MALINA 750G. / D/F RASPBERRY 750G.",
    "country": "Netherlands",
    "quantity": 4536.0,
    "cost": 15162.94,
    "price": 3.34
  },
  {
    "date": "2024-08-30",
    "product": "DUBOKO ZAMRZNUTA MALINA 250G",
    "country": "Netherlands",
    "quantity": 4032.0,
    "cost": 14553.91,
    "price": 3.61
  },
  {
    "date": "2024-08-31",
    "product": "DZ MALINA (CROPS), PAK.1KG",
    "country": "Netherlands",
    "quantity": 17820.0,
    "cost": 81383.94,
    "price": 4.57
  },
  {
    "date": "2024-08-15",
    "product": "D.Z. MALINA, PAK. 400G I 2KG",
    "country": "Norway",
    "quantity": 16502.4,
    "cost": 59544.72,
    "price": 3.61
  },
  {
    "date": "2024-08-24",
    "product": "D.Z. MALINA, PAK. 400G I 2KG",
    "country": "Norway",
    "quantity": 16617.6,
    "cost": 60335.28,
    "price": 3.63
  },
  {
    "date": "2024-08-29",
    "product": "D.Z. MALINA, PAK. 400G I 2KG",
    "country": "Norway",
    "quantity": 16137.6,
    "cost": 58693.68,
    "price": 3.64
  },
  {
    "date": "2024-08-12",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 12X750GR",
    "country": "NZ",
    "quantity": 18270.0,
    "cost": 52983.0,
    "price": 2.9
  },
  {
    "date": "2024-08-02",
    "product": "DZ MALINA 90/10",
    "country": "Poland",
    "quantity": 20328.0,
    "cost": 80092.32,
    "price": 3.94
  },
  {
    "date": "2024-08-24",
    "product": "D\\Z MALINA \"WHOLE 1X11 KG\"",
    "country": "Poland",
    "quantity": 20328.0,
    "cost": 80092.32,
    "price": 3.94
  },
  {
    "date": "2024-08-29",
    "product": "ZAMRZNUTA MALINA ROLEND (IQF RASPBERRY 90/10, 4X2,5KG) PO",
    "country": "Poland",
    "quantity": 18480.0,
    "cost": 79371.6,
    "price": 4.3
  },
  {
    "date": "2024-08-30",
    "product": "MALINA ROLEND D/Z 4X2,5/1 LOT QF300224\\M,QF300324\\M",
    "country": "Poland",
    "quantity": 13800.0,
    "cost": 40572.0,
    "price": 2.94
  },
  {
    "date": "2024-08-29",
    "product": "DADS FARM RASPBERRY IQF 400 GR - DUBOKO ZAMRZNUTA MALINA",
    "country": "QA",
    "quantity": 1200.0,
    "cost": 4740.0,
    "price": 3.95
  },
  {
    "date": "2024-08-09",
    "product": "DUBOKO ZAMRZNUTA MALINA 300GR , 1KG , 2,5KG",
    "country": "Russia",
    "quantity": 11928.0,
    "cost": 31559.3,
    "price": 2.65
  },
  {
    "date": "2024-08-23",
    "product": "IQF RASPBERRY ROLEND WILLAMETTE 10/1",
    "country": "Russia",
    "quantity": 19530.0,
    "cost": 78120.0,
    "price": 4.0
  },
  {
    "date": "2024-08-02",
    "product": "ZAMRZNUTA MALINA ROLEND,PAKOVANJE: 4X2,5KG",
    "country": "SA",
    "quantity": 9000.0,
    "cost": 39568.36,
    "price": 4.4
  },
  {
    "date": "2024-08-06",
    "product": "D.Z. MALINA, 16 X 350 G",
    "country": "SA",
    "quantity": 4032.0,
    "cost": 19008.0,
    "price": 4.71
  },
  {
    "date": "2024-08-08",
    "product": "BSM MALINA 450G PO FAKTURI",
    "country": "SA",
    "quantity": 864.0,
    "cost": 4780.8,
    "price": 5.53
  },
  {
    "date": "2024-08-29",
    "product": "D.Z. MALINA, PAK. 16 X 350 G",
    "country": "SA",
    "quantity": 3528.0,
    "cost": 16632.0,
    "price": 4.71
  },
  {
    "date": "2024-08-29",
    "product": "RASPBERRY 300 GR - DUBOKO ZAMRZNUTA MALINA",
    "country": "SA",
    "quantity": 2400.0,
    "cost": 14208.0,
    "price": 5.92
  },
  {
    "date": "2024-08-02",
    "product": "D.Z. MALINA, PAK. 10X225 G; 10X500 G; 4X2,5 KG",
    "country": "Sweden",
    "quantity": 13492.0,
    "cost": 49639.28,
    "price": 3.68
  },
  {
    "date": "2024-08-02",
    "product": "DUBOKO ZAMRZNUTA MALINA 250G (10 X 250G=1/2,5KG)",
    "country": "Sweden",
    "quantity": 3465.0,
    "cost": 11434.5,
    "price": 3.3
  },
  {
    "date": "2024-08-03",
    "product": "D.Z. MALINA ROLEND, PAK. 2 X 2,5 KG",
    "country": "Sweden",
    "quantity": 8100.0,
    "cost": 27280.8,
    "price": 3.37
  },
  {
    "date": "2024-08-03",
    "product": "D.Z. MALINA ROLEND, PAK. 400 G",
    "country": "Sweden",
    "quantity": 17107.2,
    "cost": 60687.79,
    "price": 3.55
  },
  {
    "date": "2024-08-05",
    "product": "DUBOKO ZAMRZNUTA MALINA 1000G",
    "country": "Sweden",
    "quantity": 7800.0,
    "cost": 23400.0,
    "price": 3.0
  },
  {
    "date": "2024-08-07",
    "product": "D.Z. MALINA, PAK. 10X225 G; 10X500 G; 4X2,5 KG",
    "country": "Sweden",
    "quantity": 17218.0,
    "cost": 62937.68,
    "price": 3.66
  },
  {
    "date": "2024-08-07",
    "product": "DUBOKO ZAMRZNUTA MALINA 1000G DUBOKO ZAMRZNUTA MALINA",
    "country": "Sweden",
    "quantity": 13050.0,
    "cost": 40095.0,
    "price": 3.07
  },
  {
    "date": "2024-08-08",
    "product": "D.Z. MALINA, PAK. 10X225G; 10X500G",
    "country": "Sweden",
    "quantity": 16956.0,
    "cost": 61507.2,
    "price": 3.63
  },
  {
    "date": "2024-08-09",
    "product": "D.Z. MALINA, PAK. 10X225 G; 10X500 G; 4X2,5 KG",
    "country": "Sweden",
    "quantity": 13573.0,
    "cost": 49900.88,
    "price": 3.68
  },
  {
    "date": "2024-08-09",
    "product": "DUBOKO ZAMRZNUTA MALINA 1000G (10 X 1000G=1/10KG),DUBOKO",
    "country": "Sweden",
    "quantity": 11550.0,
    "cost": 35835.0,
    "price": 3.1
  },
  {
    "date": "2024-08-14",
    "product": "DUBOKO ZAMRZNUTA MALINA 1000G (10 X 1000G=1/10KG),DUBOKO",
    "country": "Sweden",
    "quantity": 16650.0,
    "cost": 51495.0,
    "price": 3.09
  },
  {
    "date": "2024-08-16",
    "product": "DUBOKO ZAMRZNUTA MALINA 1000G (10 X 1000G=1/10KG),DUBOKO",
    "country": "Sweden",
    "quantity": 13350.0,
    "cost": 41115.0,
    "price": 3.08
  },
  {
    "date": "2024-08-17",
    "product": "D.Z. MALINA, PAK. 10X225 G; 10X500 G",
    "country": "Sweden",
    "quantity": 15957.0,
    "cost": 57859.2,
    "price": 3.63
  },
  {
    "date": "2024-08-17",
    "product": "D.Z. MALINA, PAK. 10X500 G; 4X2,5 KG",
    "country": "Sweden",
    "quantity": 14720.0,
    "cost": 58466.56,
    "price": 3.97
  },
  {
    "date": "2024-08-19",
    "product": "D.Z. MALINA ROLEND, PAK. 2 X 2,5 KG",
    "country": "Sweden",
    "quantity": 8100.0,
    "cost": 27280.8,
    "price": 3.37
  },
  {
    "date": "2024-08-19",
    "product": "DUBOKO ZAMRZNUTA MALINA 1000G (10 X 1000G=1/10KG),DUBOKO",
    "country": "Sweden",
    "quantity": 16860.0,
    "cost": 50916.0,
    "price": 3.02
  },
  {
    "date": "2024-08-21",
    "product": "DUBOKO ZAMRZNUTA MALINA 1000G (10 X 1000G=1/10KG),DUBOKO",
    "country": "Sweden",
    "quantity": 16080.0,
    "cost": 48768.0,
    "price": 3.03
  },
  {
    "date": "2024-08-22",
    "product": "D.Z. MALINA ROLEND, PAK. 400 G",
    "country": "Sweden",
    "quantity": 17107.2,
    "cost": 60687.79,
    "price": 3.55
  },
  {
    "date": "2024-08-22",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 1X10KG",
    "country": "Sweden",
    "quantity": 20480.0,
    "cost": 91340.8,
    "price": 4.46
  },
  {
    "date": "2024-08-23",
    "product": "DUBOKO ZAMRZNUTA MALINA 500G (10 X 500G=1/5KG), DUBOKO",
    "country": "Sweden",
    "quantity": 16020.0,
    "cost": 48372.0,
    "price": 3.02
  },
  {
    "date": "2024-08-23",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE 12X750GR; 2X2,5KG",
    "country": "Sweden",
    "quantity": 8856.0,
    "cost": 25560.0,
    "price": 2.89
  },
  {
    "date": "2024-08-24",
    "product": "D.Z. MALINA, PAK. 10X225 G; 10X500 G",
    "country": "Sweden",
    "quantity": 14958.0,
    "cost": 54211.2,
    "price": 3.62
  },
  {
    "date": "2024-08-26",
    "product": "DUBOKO ZAMRZNUTA MALINA 500G (10 X 500G=1/5KG), DUBOKO",
    "country": "Sweden",
    "quantity": 13950.0,
    "cost": 43275.0,
    "price": 3.1
  },
  {
    "date": "2024-08-28",
    "product": "DUBOKO ZAMRZNUTA MALINA 1000G (10 X 1000G=1/10KG),DUBOKO",
    "country": "Sweden",
    "quantity": 16800.0,
    "cost": 50802.0,
    "price": 3.02
  },
  {
    "date": "2024-08-30",
    "product": "DUBOKO ZAMRZNUTA MALINA 500G (10 X 1000G=1/5KG)DUBOKO",
    "country": "Sweden",
    "quantity": 12525.0,
    "cost": 39268.5,
    "price": 3.14
  },
  {
    "date": "2024-08-19",
    "product": "DUBOKO ZAMRZNUTA MALINA 250G",
    "country": "Slovenia",
    "quantity": 2400.0,
    "cost": 14688.0,
    "price": 6.12
  },
  {
    "date": "2024-08-01",
    "product": "ZAMRZNUTA MALINA ROLEND 95/5 (IQF RASPBERRY WHOLE 95/5) U",
    "country": "United States",
    "quantity": 18000.0,
    "cost": 70200.0,
    "price": 3.9
  },
  {
    "date": "2024-08-01",
    "product": "ZAMRZNUTA MALINA ROLEND 95/5 (IQF RASPBERRY WHOLE 95/5) U",
    "country": "United States",
    "quantity": 18000.0,
    "cost": 68400.0,
    "price": 3.8
  },
  {
    "date": "2024-08-01",
    "product": "ZAMRZNUTA MALINA ROLEND 95/5 (IQF RASPBERRY WHOLE 95/5) U",
    "country": "United States",
    "quantity": 18000.0,
    "cost": 70200.0,
    "price": 3.9
  },
  {
    "date": "2024-08-06",
    "product": "ZAMRZNUTA MALINA ROLEND 95/5 (IQF RASPBERRY WHOLE 95/5) U",
    "country": "United States",
    "quantity": 18000.0,
    "cost": 70200.0,
    "price": 3.9
  },
  {
    "date": "2024-08-08",
    "product": "ZAMRZNUTA MALINA ( IQF RASPBERRY WHOLE 24X340G )",
    "country": "United States",
    "quantity": 14688.0,
    "cost": 63158.4,
    "price": 4.3
  },
  {
    "date": "2024-08-08",
    "product": "ZAMRZNUTA MALINA ROLEND 95/5 (IQF RASPBERRY WHOLE 95/5) U",
    "country": "United States",
    "quantity": 18000.0,
    "cost": 70200.0,
    "price": 3.9
  },
  {
    "date": "2024-08-23",
    "product": "ZAMRZNUTA MALINA ROLEND 90/10 (IQF RASPBERRY WHOLE 90/10) U",
    "country": "United States",
    "quantity": 18000.0,
    "cost": 70200.0,
    "price": 3.9
  },
  {
    "date": "2024-08-23",
    "product": "ZAMRZNUTA MALINA ROLEND 95/5 (IQF RASPBERRY WHOLE 95/5) U",
    "country": "United States",
    "quantity": 18000.0,
    "cost": 71100.0,
    "price": 3.95
  },
  {
    "date": "2024-08-23",
    "product": "ZAMRZNUTA MALINA ROLEND 95/5 (IQF RASPBERRY WHOLE 95/5) U",
    "country": "United States",
    "quantity": 18000.0,
    "cost": 70200.0,
    "price": 3.9
  },
  {
    "date": "2024-08-23",
    "product": "ZAMRZNUTA MALINA ROLEND 95/5 (IQF RASPBERRY WHOLE 95/5) U",
    "country": "United States",
    "quantity": 18000.0,
    "cost": 70200.0,
    "price": 3.9
  },
  {
    "date": "2024-08-30",
    "product": "ZAMRZNUTA MALINA ROLEND 95/5 (IQF RASPBERRY WHOLE 95/5) U",
    "country": "United States",
    "quantity": 18000.0,
    "cost": 71100.0,
    "price": 3.95
  },
  {
    "date": "2024-06-21",
    "product": "DZ MALINA",
    "country": "AE",
    "quantity": 4000.0,
    "cost": 23830.0,
    "price": 5.96
  },
  {
    "date": "2024-06-07",
    "product": "DZ MALINA (S-BUDGET), PAK. 500G",
    "country": "Austria",
    "quantity": 7776.0,
    "cost": 22939.2,
    "price": 2.95
  },
  {
    "date": "2024-06-12",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 20X500GR;6X500GR",
    "country": "Austria",
    "quantity": 16020.0,
    "cost": 39105.0,
    "price": 2.44
  },
  {
    "date": "2024-06-24",
    "product": "DZ MALINA (S-BUDGET), PAK. 500G",
    "country": "Austria",
    "quantity": 11178.0,
    "cost": 32975.1,
    "price": 2.95
  },
  {
    "date": "2024-06-29",
    "product": "D/Z MALINA 300G",
    "country": "Austria",
    "quantity": 6912.0,
    "cost": 15644.16,
    "price": 2.26
  },
  {
    "date": "2024-06-01",
    "product": "DZ MALINA (SYSTEME U, PICARD), PAK. 750G",
    "country": "Belgium",
    "quantity": 10800.0,
    "cost": 25651.08,
    "price": 2.38
  },
  {
    "date": "2024-06-01",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 15X450GR",
    "country": "Belgium",
    "quantity": 4860.0,
    "cost": 15746.4,
    "price": 3.24
  },
  {
    "date": "2024-06-03",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 12X500GR",
    "country": "Belgium",
    "quantity": 16848.0,
    "cost": 69919.2,
    "price": 4.15
  },
  {
    "date": "2024-06-06",
    "product": "D\\Z MALINA \"ROLEND-WHOLE 750G\"",
    "country": "Belgium",
    "quantity": 14701.5,
    "cost": 38811.96,
    "price": 2.64
  },
  {
    "date": "2024-06-06",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 5X1KG",
    "country": "Belgium",
    "quantity": 16500.0,
    "cost": 56595.0,
    "price": 3.43
  },
  {
    "date": "2024-06-08",
    "product": "-D/Z MALINA COUNTRY RANGE,J4137A00D / BBE NOV/2026PAK.U 1344",
    "country": "Belgium",
    "quantity": 16464.0,
    "cost": 45719.52,
    "price": 2.78
  },
  {
    "date": "2024-06-10",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 5X1KG",
    "country": "Belgium",
    "quantity": 16500.0,
    "cost": 56595.0,
    "price": 3.43
  },
  {
    "date": "2024-06-11",
    "product": "- D/F RASPBERRIES, D/Z MALINA, I.Q.F. ROLLEND, 10X1 KG I 4X2,5 KG, LOT NO:",
    "country": "Belgium",
    "quantity": 20000.0,
    "cost": 52725.0,
    "price": 2.64
  },
  {
    "date": "2024-06-11",
    "product": "DUBOKO ZAMRZNUTA MALINA 300G",
    "country": "Belgium",
    "quantity": 3364.2,
    "cost": 10653.3,
    "price": 3.17
  },
  {
    "date": "2024-06-13",
    "product": "D\\Z MALINA \"ROLEND-WHOLE 750G\"",
    "country": "Belgium",
    "quantity": 14701.5,
    "cost": 38811.96,
    "price": 2.64
  },
  {
    "date": "2024-06-13",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X1KG",
    "country": "Belgium",
    "quantity": 5670.0,
    "cost": 14401.8,
    "price": 2.54
  },
  {
    "date": "2024-06-13",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "Belgium",
    "quantity": 14490.0,
    "cost": 35935.2,
    "price": 2.48
  },
  {
    "date": "2024-06-15",
    "product": "DZ MALINA (CROPS), PAK. 1KG",
    "country": "Belgium",
    "quantity": 5400.0,
    "cost": 17334.0,
    "price": 3.21
  },
  {
    "date": "2024-06-20",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 5X1KG",
    "country": "Belgium",
    "quantity": 16500.0,
    "cost": 56595.0,
    "price": 3.43
  },
  {
    "date": "2024-06-21",
    "product": "DZ MALINA (SYSTEME U), PAK. 5X1KG",
    "country": "Belgium",
    "quantity": 19800.0,
    "cost": 53460.0,
    "price": 2.7
  },
  {
    "date": "2024-06-21",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:20X500GR",
    "country": "Belgium",
    "quantity": 17820.0,
    "cost": 45975.6,
    "price": 2.58
  },
  {
    "date": "2024-06-22",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE:750 GR",
    "country": "Belgium",
    "quantity": 14701.5,
    "cost": 38811.96,
    "price": 2.64
  },
  {
    "date": "2024-06-22",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "Belgium",
    "quantity": 17080.0,
    "cost": 53289.6,
    "price": 3.12
  },
  {
    "date": "2024-06-25",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X500GR",
    "country": "Belgium",
    "quantity": 16335.0,
    "cost": 43124.4,
    "price": 2.64
  },
  {
    "date": "2024-06-28",
    "product": "DUBOKO ZAMRZNUTA MALINA, PAK 4X2,5KG",
    "country": "Belgium",
    "quantity": 20480.0,
    "cost": 71782.4,
    "price": 3.51
  },
  {
    "date": "2024-06-29",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 15X450GR; 4X2,5KG",
    "country": "Belgium",
    "quantity": 9583.0,
    "cost": 30511.32,
    "price": 3.18
  },
  {
    "date": "2024-06-29",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "Belgium",
    "quantity": 1920.0,
    "cost": 6297.6,
    "price": 3.28
  },
  {
    "date": "2024-06-29",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:20X500GR",
    "country": "Belgium",
    "quantity": 17820.0,
    "cost": 45975.6,
    "price": 2.58
  },
  {
    "date": "2024-06-07",
    "product": "D/Z MALINA ROLEND",
    "country": "Canada",
    "quantity": 18000.0,
    "cost": 48600.0,
    "price": 2.7
  },
  {
    "date": "2024-06-12",
    "product": "D\\Z MALINA ROLEND 4X2,5KG VILAMET, (US NORMA) LOT:4012 PO 30715-11",
    "country": "Canada",
    "quantity": 18000.0,
    "cost": 50040.0,
    "price": 2.78
  },
  {
    "date": "2024-06-13",
    "product": "D\\Z MALINA ROLEND 4X2,5KG ,WILLAMETTE (US NORMA), LOT 4013 PO 30715-",
    "country": "Canada",
    "quantity": 18000.0,
    "cost": 50040.0,
    "price": 2.78
  },
  {
    "date": "2024-06-19",
    "product": "D\\Z MALINA ROLEND 4X2,5KG ,VILAMET,(US NORMA), LOT 4014PO 30715-13",
    "country": "Canada",
    "quantity": 18000.0,
    "cost": 50040.0,
    "price": 2.78
  },
  {
    "date": "2024-06-19",
    "product": "D\\Z MALINA ROLEND 4X2,5KG ,VILAMET,(US NORMA), LOT 4015PO 30715-14",
    "country": "Canada",
    "quantity": 18000.0,
    "cost": 50040.0,
    "price": 2.78
  },
  {
    "date": "2024-06-28",
    "product": "D\\Z MALINA ROLEND 4X2,5KG ,VILAMET,(US NORMA), LOT 4016PO 30715-15",
    "country": "Canada",
    "quantity": 18000.0,
    "cost": 50040.0,
    "price": 2.78
  },
  {
    "date": "2024-06-03",
    "product": "D/Z MALINA 500G, 300G",
    "country": "Switzerland",
    "quantity": 8760.0,
    "cost": 19596.46,
    "price": 2.24
  },
  {
    "date": "2024-06-27",
    "product": "D/Z MALINA 300G",
    "country": "Switzerland",
    "quantity": 1008.0,
    "cost": 2305.3,
    "price": 2.29
  },
  {
    "date": "2024-06-27",
    "product": "D/Z MALINA 500G",
    "country": "Switzerland",
    "quantity": 6720.0,
    "cost": 14911.68,
    "price": 2.22
  },
  {
    "date": "2024-06-28",
    "product": "D/Z MALINA 300G",
    "country": "Switzerland",
    "quantity": 2016.0,
    "cost": 4610.59,
    "price": 2.29
  },
  {
    "date": "2024-06-28",
    "product": "D/Z MALINA 500G",
    "country": "Switzerland",
    "quantity": 5280.0,
    "cost": 11716.32,
    "price": 2.22
  },
  {
    "date": "2024-06-28",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 2X2,5KG",
    "country": "Switzerland",
    "quantity": 5400.0,
    "cost": 15660.0,
    "price": 2.9
  },
  {
    "date": "2024-06-29",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 14X500GR",
    "country": "Switzerland",
    "quantity": 12936.0,
    "cost": 32866.5,
    "price": 2.54
  },
  {
    "date": "2024-06-22",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "CZ",
    "quantity": 20790.0,
    "cost": 50935.5,
    "price": 2.45
  },
  {
    "date": "2024-06-25",
    "product": "IQF RASPBERRY (DZ MALINA),UPAKOVANA U 1060 KARTONA,1X12 KG. LOT",
    "country": "CZ",
    "quantity": 12720.0,
    "cost": 34725.6,
    "price": 2.73
  },
  {
    "date": "2024-06-01",
    "product": "D/Z MALINA- DEEP FROZEN RASPBERRY ROLLEND 4X2,5KG",
    "country": "Germany",
    "quantity": 5040.0,
    "cost": 15624.0,
    "price": 3.1
  },
  {
    "date": "2024-06-01",
    "product": "DUBOKO ZAMRZNUTA MALINA",
    "country": "Germany",
    "quantity": 9520.0,
    "cost": 32177.6,
    "price": 3.38
  },
  {
    "date": "2024-06-01",
    "product": "DUBOKO ZAMRZNUTA MALINA PAKOVANJE 400G",
    "country": "Germany",
    "quantity": 768.0,
    "cost": 2880.0,
    "price": 3.75
  },
  {
    "date": "2024-06-01",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE:6X500GR I 10X500GR",
    "country": "Germany",
    "quantity": 14310.0,
    "cost": 34665.3,
    "price": 2.42
  },
  {
    "date": "2024-06-01",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X500GR",
    "country": "Germany",
    "quantity": 16335.0,
    "cost": 41490.9,
    "price": 2.54
  },
  {
    "date": "2024-06-01",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 14X500GR",
    "country": "Germany",
    "quantity": 14784.0,
    "cost": 36856.51,
    "price": 2.49
  },
  {
    "date": "2024-06-01",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 18X500GR",
    "country": "Germany",
    "quantity": 18711.0,
    "cost": 48592.47,
    "price": 2.6
  },
  {
    "date": "2024-06-01",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "Germany",
    "quantity": 40320.0,
    "cost": 102412.8,
    "price": 2.54
  },
  {
    "date": "2024-06-01",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:14X500GR",
    "country": "Germany",
    "quantity": 18480.0,
    "cost": 45091.2,
    "price": 2.44
  },
  {
    "date": "2024-06-03",
    "product": "D\\Z MALINA ROLEND 4X2,5 KG",
    "country": "Germany",
    "quantity": 18480.0,
    "cost": 56364.0,
    "price": 3.05
  },
  {
    "date": "2024-06-04",
    "product": "DZ MALINA (BOFROST), PAK. 750G",
    "country": "Germany",
    "quantity": 16038.0,
    "cost": 56453.76,
    "price": 3.52
  },
  {
    "date": "2024-06-04",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 6X500GR I 10X500GR",
    "country": "Germany",
    "quantity": 11520.0,
    "cost": 27921.6,
    "price": 2.42
  },
  {
    "date": "2024-06-04",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 18X500GR",
    "country": "Germany",
    "quantity": 18711.0,
    "cost": 48592.47,
    "price": 2.6
  },
  {
    "date": "2024-06-04",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "Germany",
    "quantity": 20160.0,
    "cost": 51206.4,
    "price": 2.54
  },
  {
    "date": "2024-06-04",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:12X750GR",
    "country": "Germany",
    "quantity": 17820.0,
    "cost": 48648.6,
    "price": 2.73
  },
  {
    "date": "2024-06-04",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:14X500GR",
    "country": "Germany",
    "quantity": 18480.0,
    "cost": 45091.2,
    "price": 2.44
  },
  {
    "date": "2024-06-05",
    "product": "D/Z MALINA 500G",
    "country": "Germany",
    "quantity": 7680.0,
    "cost": 17730.05,
    "price": 2.31
  },
  {
    "date": "2024-06-05",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "Germany",
    "quantity": 20230.0,
    "cost": 51384.2,
    "price": 2.54
  },
  {
    "date": "2024-06-06",
    "product": "DUBOKO ZAMRZNUTA MALINA",
    "country": "Germany",
    "quantity": 11200.0,
    "cost": 32256.0,
    "price": 2.88
  },
  {
    "date": "2024-06-07",
    "product": "DZ MALINA ROLEND PAK.4X2,5 KG",
    "country": "Germany",
    "quantity": 20790.0,
    "cost": 63409.5,
    "price": 3.05
  },
  {
    "date": "2024-06-07",
    "product": "ZAMRZNUTA MALINA ROLEND (IQF RASPBERRY 95/5,4X2,5KG) PO FAKTURI",
    "country": "Germany",
    "quantity": 18480.0,
    "cost": 46200.0,
    "price": 2.5
  },
  {
    "date": "2024-06-08",
    "product": "D/Z MALINA - DF RASPBERRY ROLEND 4X2,5KG G.CROWN",
    "country": "Germany",
    "quantity": 20790.0,
    "cost": 48399.12,
    "price": 2.33
  },
  {
    "date": "2024-06-08",
    "product": "DZ MALINA ROLEND",
    "country": "Germany",
    "quantity": 20790.0,
    "cost": 46777.5,
    "price": 2.25
  },
  {
    "date": "2024-06-08",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 6X500GR I 10X500GR",
    "country": "Germany",
    "quantity": 28620.0,
    "cost": 69330.6,
    "price": 2.42
  },
  {
    "date": "2024-06-08",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 14X500GR",
    "country": "Germany",
    "quantity": 14784.0,
    "cost": 36856.51,
    "price": 2.49
  },
  {
    "date": "2024-06-08",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "Germany",
    "quantity": 20000.0,
    "cost": 50800.0,
    "price": 2.54
  },
  {
    "date": "2024-06-08",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR; 12X750GR",
    "country": "Germany",
    "quantity": 20142.0,
    "cost": 51045.48,
    "price": 2.53
  },
  {
    "date": "2024-06-08",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:14X500GR",
    "country": "Germany",
    "quantity": 55440.0,
    "cost": 135273.6,
    "price": 2.44
  },
  {
    "date": "2024-06-11",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X1000GR",
    "country": "Germany",
    "quantity": 12880.0,
    "cost": 32522.0,
    "price": 2.53
  },
  {
    "date": "2024-06-11",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "Germany",
    "quantity": 40430.0,
    "cost": 102692.2,
    "price": 2.54
  },
  {
    "date": "2024-06-13",
    "product": "DZ MALINA ROLEND PAK.4X2,5 KG",
    "country": "Germany",
    "quantity": 20790.0,
    "cost": 46278.54,
    "price": 2.23
  },
  {
    "date": "2024-06-14",
    "product": "DZ MALINA CELA \"IQF RASPBERRIES WHOLE\" 4X2,5; CONTRACT:EV2418452;",
    "country": "Germany",
    "quantity": 20790.0,
    "cost": 58212.0,
    "price": 2.8
  },
  {
    "date": "2024-06-14",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 14X500GR",
    "country": "Germany",
    "quantity": 14784.0,
    "cost": 36856.51,
    "price": 2.49
  },
  {
    "date": "2024-06-15",
    "product": "DZ MALINA ROLEND PAK.4X2,5 KG",
    "country": "Germany",
    "quantity": 20790.0,
    "cost": 63409.5,
    "price": 3.05
  },
  {
    "date": "2024-06-15",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 6X500GR I 10X500GR",
    "country": "Germany",
    "quantity": 14310.0,
    "cost": 34665.3,
    "price": 2.42
  },
  {
    "date": "2024-06-15",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR I 12X750GR",
    "country": "Germany",
    "quantity": 19494.0,
    "cost": 48789.0,
    "price": 2.5
  },
  {
    "date": "2024-06-17",
    "product": "- DZ MALINA, LOT: 484182 -",
    "country": "Germany",
    "quantity": 20796.0,
    "cost": 55525.32,
    "price": 2.67
  },
  {
    "date": "2024-06-17",
    "product": "DUBOKO ZAMRZNUTA MALINA 90/10 - WILLAMETTE",
    "country": "Germany",
    "quantity": 20790.0,
    "cost": 46257.75,
    "price": 2.23
  },
  {
    "date": "2024-06-17",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:14X500GR",
    "country": "Germany",
    "quantity": 18480.0,
    "cost": 45091.2,
    "price": 2.44
  },
  {
    "date": "2024-06-18",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 6X500GR I 10X500GR",
    "country": "Germany",
    "quantity": 15795.0,
    "cost": 38353.05,
    "price": 2.43
  },
  {
    "date": "2024-06-18",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500;18X500;12X750 GR",
    "country": "Germany",
    "quantity": 19746.0,
    "cost": 50434.51,
    "price": 2.55
  },
  {
    "date": "2024-06-18",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:14X500GR",
    "country": "Germany",
    "quantity": 18480.0,
    "cost": 45091.2,
    "price": 2.44
  },
  {
    "date": "2024-06-19",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "Germany",
    "quantity": 20250.0,
    "cost": 51435.0,
    "price": 2.54
  },
  {
    "date": "2024-06-20",
    "product": "- DZ MALINA, 2048 KUTIJA, LOT: PP14147 -",
    "country": "Germany",
    "quantity": 20480.0,
    "cost": 61440.0,
    "price": 3.0
  },
  {
    "date": "2024-06-20",
    "product": "DZ MALINA ROLEND",
    "country": "Germany",
    "quantity": 18480.0,
    "cost": 51744.0,
    "price": 2.8
  },
  {
    "date": "2024-06-21",
    "product": "- DZ MALINA, LOT: 24061003 -",
    "country": "Germany",
    "quantity": 20796.0,
    "cost": 55525.32,
    "price": 2.67
  },
  {
    "date": "2024-06-22",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 10X500GR",
    "country": "Germany",
    "quantity": 14850.0,
    "cost": 36085.5,
    "price": 2.43
  },
  {
    "date": "2024-06-22",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X300GR",
    "country": "Germany",
    "quantity": 1800.0,
    "cost": 5634.0,
    "price": 3.13
  },
  {
    "date": "2024-06-22",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "Germany",
    "quantity": 20250.0,
    "cost": 51435.0,
    "price": 2.54
  },
  {
    "date": "2024-06-22",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:10X300GR;12X750GR;20X500GR",
    "country": "Germany",
    "quantity": 18774.0,
    "cost": 47379.15,
    "price": 2.52
  },
  {
    "date": "2024-06-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "Germany",
    "quantity": 20250.0,
    "cost": 51435.0,
    "price": 2.54
  },
  {
    "date": "2024-06-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:12X750GR",
    "country": "Germany",
    "quantity": 17820.0,
    "cost": 48648.6,
    "price": 2.73
  },
  {
    "date": "2024-06-25",
    "product": "TK- HIMBEEREN FRESHONA DE/AT 20X500G",
    "country": "Germany",
    "quantity": 20250.0,
    "cost": 52650.0,
    "price": 2.6
  },
  {
    "date": "2024-06-25",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 12X750GR",
    "country": "Germany",
    "quantity": 10773.0,
    "cost": 24346.98,
    "price": 2.26
  },
  {
    "date": "2024-06-25",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 1X11KG I 20X500GR",
    "country": "Germany",
    "quantity": 20288.0,
    "cost": 49336.8,
    "price": 2.43
  },
  {
    "date": "2024-06-25",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:10X300GR;6X500GR;18X500GR",
    "country": "Germany",
    "quantity": 14472.0,
    "cost": 36579.74,
    "price": 2.53
  },
  {
    "date": "2024-06-25",
    "product": "ZAMRZNUTA MALINA,PAKOVANJE:4X2,5 KG",
    "country": "Germany",
    "quantity": 8400.0,
    "cost": 26880.0,
    "price": 3.2
  },
  {
    "date": "2024-06-28",
    "product": "- DZ MALINA, LOT: 24061004 -",
    "country": "Germany",
    "quantity": 20796.0,
    "cost": 55525.32,
    "price": 2.67
  },
  {
    "date": "2024-06-28",
    "product": "D/Z MALINA DF RASPBERRY ROLLEND 4X2,5KG G.CROWN",
    "country": "Germany",
    "quantity": 16760.0,
    "cost": 39520.08,
    "price": 2.36
  },
  {
    "date": "2024-06-28",
    "product": "D/Z MALINA 500G",
    "country": "Germany",
    "quantity": 15840.0,
    "cost": 37189.15,
    "price": 2.35
  },
  {
    "date": "2024-06-28",
    "product": "DZ MALINA ROLEND PAK.4X2,5 KG",
    "country": "Germany",
    "quantity": 20790.0,
    "cost": 66528.0,
    "price": 3.2
  },
  {
    "date": "2024-06-29",
    "product": "ZAMRZNUTA MALINA ROLEND PAKOVANJE:4X2,5KG",
    "country": "Germany",
    "quantity": 18480.0,
    "cost": 57288.0,
    "price": 3.1
  },
  {
    "date": "2024-06-29",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR; 1X11KGR",
    "country": "Germany",
    "quantity": 20026.0,
    "cost": 48747.0,
    "price": 2.43
  },
  {
    "date": "2024-06-29",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:14X500GR",
    "country": "Germany",
    "quantity": 18480.0,
    "cost": 45091.2,
    "price": 2.44
  },
  {
    "date": "2024-06-17",
    "product": "D.Z. MALINA ROLEND, PAK. 200 GR",
    "country": "Denmark",
    "quantity": 5184.0,
    "cost": 19206.72,
    "price": 3.71
  },
  {
    "date": "2024-06-12",
    "product": "D.Z. MALINA ROLEND, PAK. 200 G",
    "country": "Finland",
    "quantity": 6912.0,
    "cost": 26645.76,
    "price": 3.86
  },
  {
    "date": "2024-06-01",
    "product": "DZ MALINA ROLEND",
    "country": "France",
    "quantity": 8800.0,
    "cost": 20896.0,
    "price": 2.37
  },
  {
    "date": "2024-06-03",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 6X0,5KG",
    "country": "France",
    "quantity": 3.0,
    "cost": 7.35,
    "price": 2.45
  },
  {
    "date": "2024-06-03",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 7X0,5KG",
    "country": "France",
    "quantity": 3.5,
    "cost": 14.18,
    "price": 4.05
  },
  {
    "date": "2024-06-03",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:5X1KG",
    "country": "France",
    "quantity": 18150.0,
    "cost": 73507.5,
    "price": 4.05
  },
  {
    "date": "2024-06-04",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 5X0,5KG",
    "country": "France",
    "quantity": 2.5,
    "cost": 6.13,
    "price": 2.45
  },
  {
    "date": "2024-06-06",
    "product": "D\\Z MALINA -FERTODI \"ROLEND\",PAK. 4KG (8X500G)- 1520 KUTIJA",
    "country": "France",
    "quantity": 6080.0,
    "cost": 19152.0,
    "price": 3.15
  },
  {
    "date": "2024-06-06",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 4X2.5KG; 12X500GR",
    "country": "France",
    "quantity": 16560.0,
    "cost": 48636.0,
    "price": 2.94
  },
  {
    "date": "2024-06-07",
    "product": "ZAMRZNUT MALINA(IQF RASPBERRY WHOLE 0,500 KG)",
    "country": "France",
    "quantity": 13200.0,
    "cost": 47520.0,
    "price": 3.6
  },
  {
    "date": "2024-06-07",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 15X1KG",
    "country": "France",
    "quantity": 20880.0,
    "cost": 55332.0,
    "price": 2.65
  },
  {
    "date": "2024-06-07",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 6X0,5KG",
    "country": "France",
    "quantity": 3.0,
    "cost": 7.95,
    "price": 2.65
  },
  {
    "date": "2024-06-10",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 5X1KG",
    "country": "France",
    "quantity": 17820.0,
    "cost": 48114.0,
    "price": 2.7
  },
  {
    "date": "2024-06-10",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 15X1KG",
    "country": "France",
    "quantity": 41760.0,
    "cost": 102312.0,
    "price": 2.45
  },
  {
    "date": "2024-06-10",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 6X0,5KG",
    "country": "France",
    "quantity": 6.0,
    "cost": 14.7,
    "price": 2.45
  },
  {
    "date": "2024-06-11",
    "product": "- DZ MALINA -",
    "country": "France",
    "quantity": 17820.0,
    "cost": 46688.4,
    "price": 2.62
  },
  {
    "date": "2024-06-11",
    "product": "D.Z. MALINA ROLEND - PAQUITO, PAK. 450G",
    "country": "France",
    "quantity": 14701.5,
    "cost": 36018.68,
    "price": 2.45
  },
  {
    "date": "2024-06-14",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 15X1KG",
    "country": "France",
    "quantity": 20880.0,
    "cost": 51156.0,
    "price": 2.45
  },
  {
    "date": "2024-06-14",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 6X0,5KG",
    "country": "France",
    "quantity": 3.0,
    "cost": 7.35,
    "price": 2.45
  },
  {
    "date": "2024-06-14",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 7X0,5KG",
    "country": "France",
    "quantity": 3.5,
    "cost": 21.17,
    "price": 6.05
  },
  {
    "date": "2024-06-14",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:12X0,5KG",
    "country": "France",
    "quantity": 11880.0,
    "cost": 71874.0,
    "price": 6.05
  },
  {
    "date": "2024-06-17",
    "product": "D.Z. MALINA, PAK. 500 G",
    "country": "France",
    "quantity": 3150.0,
    "cost": 9954.0,
    "price": 3.16
  },
  {
    "date": "2024-06-17",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 15X1KG",
    "country": "France",
    "quantity": 20880.0,
    "cost": 51156.0,
    "price": 2.45
  },
  {
    "date": "2024-06-17",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 6X0,5KG",
    "country": "France",
    "quantity": 3.0,
    "cost": 7.35,
    "price": 2.45
  },
  {
    "date": "2024-06-18",
    "product": "D.Z. MALINA, PAK. 6X600G(UZORAK)",
    "country": "France",
    "quantity": 3.6,
    "cost": 10.8,
    "price": 3.0
  },
  {
    "date": "2024-06-18",
    "product": "D\\Z MALINA ROLEND 5X1KG - VILAMET, LOT :RD233322,D/Z MALINA ROLEND",
    "country": "France",
    "quantity": 18036.0,
    "cost": 66304.0,
    "price": 3.68
  },
  {
    "date": "2024-06-20",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 15X1KG",
    "country": "France",
    "quantity": 20880.0,
    "cost": 55332.0,
    "price": 2.65
  },
  {
    "date": "2024-06-20",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 6X0,5KG",
    "country": "France",
    "quantity": 3.0,
    "cost": 7.95,
    "price": 2.65
  },
  {
    "date": "2024-06-21",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 5X1KG",
    "country": "France",
    "quantity": 11880.0,
    "cost": 35328.88,
    "price": 2.97
  },
  {
    "date": "2024-06-24",
    "product": "D.Z. MALINA MIKER, PAK. 10X0,6KG",
    "country": "France",
    "quantity": 8910.0,
    "cost": 29700.0,
    "price": 3.33
  },
  {
    "date": "2024-06-27",
    "product": "D\\Z MALINA MONOPRIX 500G, CASINO 500 G",
    "country": "France",
    "quantity": 16335.0,
    "cost": 45901.35,
    "price": 2.81
  },
  {
    "date": "2024-06-27",
    "product": "ZAMRZNUT MALINA(IQF RASPBERRY WHOLE 5X1KG)",
    "country": "France",
    "quantity": 17820.0,
    "cost": 54778.68,
    "price": 3.07
  },
  {
    "date": "2024-06-01",
    "product": "DZ MALINA (OCADO), PAK. 300G",
    "country": "United Kingdom",
    "quantity": 13248.0,
    "cost": 48580.42,
    "price": 3.67
  },
  {
    "date": "2024-06-08",
    "product": "DZ MALINA ROLEND PAK.11 KG",
    "country": "United Kingdom",
    "quantity": 20207.0,
    "cost": 48496.8,
    "price": 2.4
  },
  {
    "date": "2024-06-10",
    "product": "DUBOKO ZAMRZNUTA MALINA 300G (1/4,2 KG)",
    "country": "United Kingdom",
    "quantity": 17472.0,
    "cost": 57419.72,
    "price": 3.29
  },
  {
    "date": "2024-06-17",
    "product": "DUBOKO ZAMRZNUTA MALINA 300G (1/4,2 KG)",
    "country": "United Kingdom",
    "quantity": 17472.0,
    "cost": 58067.18,
    "price": 3.32
  },
  {
    "date": "2024-06-17",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "United Kingdom",
    "quantity": 20790.0,
    "cost": 63825.3,
    "price": 3.07
  },
  {
    "date": "2024-06-18",
    "product": "DZ MALINA ROLEND PAK.11 KG",
    "country": "United Kingdom",
    "quantity": 20207.0,
    "cost": 48496.8,
    "price": 2.4
  },
  {
    "date": "2024-06-21",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "United Kingdom",
    "quantity": 20790.0,
    "cost": 63825.3,
    "price": 3.07
  },
  {
    "date": "2024-06-27",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "United Kingdom",
    "quantity": 20790.0,
    "cost": 64864.8,
    "price": 3.12
  },
  {
    "date": "2024-06-28",
    "product": "DUBOKO ZAMRZNUTA MALINA 300G (1/4,2 KG)",
    "country": "United Kingdom",
    "quantity": 17472.0,
    "cost": 57772.32,
    "price": 3.31
  },
  {
    "date": "2024-06-27",
    "product": "IQF RASPBERRY, I CLASS (DZ MALINA) UPAKOVANA U 640 KARTONA 1X10KG",
    "country": "Hungary",
    "quantity": 6400.0,
    "cost": 17472.0,
    "price": 2.73
  },
  {
    "date": "2024-06-21",
    "product": "D/Z MALINA",
    "country": "IT",
    "quantity": 20480.0,
    "cost": 52428.8,
    "price": 2.56
  },
  {
    "date": "2024-06-06",
    "product": "DUBOKO ZAMRZNUTA MALINA IQF CELA 4X2,5 KG",
    "country": "Japan",
    "quantity": 18270.0,
    "cost": 62118.0,
    "price": 3.4
  },
  {
    "date": "2024-06-12",
    "product": "DUBOKO ZAMRZNUTA MALINA 1/10 KG ( 4 X 2,5 KG),DUBOKO ZAMRZNUTA",
    "country": "Japan",
    "quantity": 11500.0,
    "cost": 35300.0,
    "price": 3.07
  },
  {
    "date": "2024-06-27",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG; 1X10KG",
    "country": "Japan",
    "quantity": 18500.0,
    "cost": 66825.0,
    "price": 3.61
  },
  {
    "date": "2024-06-10",
    "product": "SMRZNUTE MALINE",
    "country": "Montenegro",
    "quantity": 499.2,
    "cost": 1547.52,
    "price": 3.1
  },
  {
    "date": "2024-06-17",
    "product": "SMRZNUTE MALINA",
    "country": "Montenegro",
    "quantity": 499.2,
    "cost": 1547.52,
    "price": 3.1
  },
  {
    "date": "2024-06-18",
    "product": "BSM MALINA 450G PO FAKTURI",
    "country": "Montenegro",
    "quantity": 504.0,
    "cost": 2564.8,
    "price": 5.09
  },
  {
    "date": "2024-06-27",
    "product": "SMRZNUTE MALINE",
    "country": "Montenegro",
    "quantity": 499.2,
    "cost": 1547.52,
    "price": 3.1
  },
  {
    "date": "2024-06-10",
    "product": "MALINA 300 GR FAKTURA: 91461756 STAVKA: 11",
    "country": "North Macedonia",
    "quantity": 499.2,
    "cost": 1547.52,
    "price": 3.1
  },
  {
    "date": "2024-06-04",
    "product": "DUBOKO ZAMRZNUTA MALINA 4X2,5 KG- WILLAMETTE",
    "country": "Netherlands",
    "quantity": 20790.0,
    "cost": 59251.5,
    "price": 2.85
  },
  {
    "date": "2024-06-07",
    "product": "DUBOKO ZAMRZNUTA MALINA 250G, DUBOKO ZAMRZNUTA MALINA 750G",
    "country": "Netherlands",
    "quantity": 1382.0,
    "cost": 4913.49,
    "price": 3.56
  },
  {
    "date": "2024-06-07",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:10X300GR",
    "country": "Netherlands",
    "quantity": 11520.0,
    "cost": 31104.0,
    "price": 2.7
  },
  {
    "date": "2024-06-17",
    "product": "D.Z. MALINA ROLEND 90/10, PAK. 500 G",
    "country": "Netherlands",
    "quantity": 20480.0,
    "cost": 49152.0,
    "price": 2.4
  },
  {
    "date": "2024-06-17",
    "product": "D.Z. MALINA, PAK. 750 G",
    "country": "Netherlands",
    "quantity": 7290.0,
    "cost": 37227.6,
    "price": 5.11
  },
  {
    "date": "2024-06-17",
    "product": "DUBOKO ZAMRZNUTA MALINA 250G, DUBOKO ZAMRZNUTA MALINA 750G",
    "country": "Netherlands",
    "quantity": 5232.0,
    "cost": 18285.64,
    "price": 3.49
  },
  {
    "date": "2024-06-18",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR; 10X1KG; 10X300GR",
    "country": "Netherlands",
    "quantity": 14468.0,
    "cost": 33778.6,
    "price": 2.33
  },
  {
    "date": "2024-06-21",
    "product": "D.Z. MALINA ROLEND 90/10, PAK. 500 G",
    "country": "Netherlands",
    "quantity": 20480.0,
    "cost": 49152.0,
    "price": 2.4
  },
  {
    "date": "2024-06-24",
    "product": "D.Z. MALINA, PAK. 750 G",
    "country": "Netherlands",
    "quantity": 7776.0,
    "cost": 39709.44,
    "price": 5.11
  },
  {
    "date": "2024-06-24",
    "product": "DUBOKO ZAMRZNUTA MALINA 750G",
    "country": "Netherlands",
    "quantity": 5832.0,
    "cost": 20151.5,
    "price": 3.46
  },
  {
    "date": "2024-06-25",
    "product": "DUBOKO ZAMRZNUTA MALINA 250G",
    "country": "Netherlands",
    "quantity": 5376.0,
    "cost": 19405.21,
    "price": 3.61
  },
  {
    "date": "2024-06-26",
    "product": "D/Z MALINA 250G. / D/F RASPBERRY 250G.",
    "country": "Netherlands",
    "quantity": 1260.0,
    "cost": 3223.08,
    "price": 2.56
  },
  {
    "date": "2024-06-27",
    "product": "DUBOKO ZAMRZNUTA MALINA 250G, DUBOKO ZAMRZNUTA MALINA 750G",
    "country": "Netherlands",
    "quantity": 5718.0,
    "cost": 19964.93,
    "price": 3.49
  },
  {
    "date": "2024-06-28",
    "product": "D.Z. MALINA ROLEND 90/10, PAK. 500 G",
    "country": "Netherlands",
    "quantity": 20480.0,
    "cost": 49152.0,
    "price": 2.4
  },
  {
    "date": "2024-06-28",
    "product": "D/Z MALINA 250G / D/F RASPBERRY 250G",
    "country": "Netherlands",
    "quantity": 1680.0,
    "cost": 4298.11,
    "price": 2.56
  },
  {
    "date": "2024-06-07",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 2X2.5KG",
    "country": "Norway",
    "quantity": 19530.0,
    "cost": 62496.0,
    "price": 3.2
  },
  {
    "date": "2024-06-17",
    "product": "DZ MALINA ROLEND",
    "country": "Norway",
    "quantity": 20328.0,
    "cost": 71148.0,
    "price": 3.5
  },
  {
    "date": "2024-06-22",
    "product": "DZ MALINA ROLEND",
    "country": "Norway",
    "quantity": 20328.0,
    "cost": 71148.0,
    "price": 3.5
  },
  {
    "date": "2024-06-25",
    "product": "D.Z. MALINA, PAK. 400G I 2 KG",
    "country": "Norway",
    "quantity": 11750.4,
    "cost": 42631.92,
    "price": 3.63
  },
  {
    "date": "2024-06-28",
    "product": "D.Z. MALINA, PAK. 300G",
    "country": "Norway",
    "quantity": 11113.2,
    "cost": 40118.65,
    "price": 3.61
  },
  {
    "date": "2024-06-12",
    "product": "DUBOKO ZAMRZNUTA MALINA 300G",
    "country": "OM",
    "quantity": 2052.0,
    "cost": 8071.2,
    "price": 3.93
  },
  {
    "date": "2024-06-01",
    "product": "DZ MALINA 90/10",
    "country": "Poland",
    "quantity": 20328.0,
    "cost": 50820.0,
    "price": 2.5
  },
  {
    "date": "2024-06-03",
    "product": "D\\Z MALINA \"ROLEND\"-SORTE VILAMET 11\\1 -1.848 KUTIJA",
    "country": "Poland",
    "quantity": 20328.0,
    "cost": 61390.56,
    "price": 3.02
  },
  {
    "date": "2024-06-07",
    "product": "DUBOKO ZAMRZNUTA MALINA 90/10 PAKOVANJE: 1X11KG",
    "country": "Poland",
    "quantity": 20328.0,
    "cost": 57324.96,
    "price": 2.82
  },
  {
    "date": "2024-06-08",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 11KG",
    "country": "Poland",
    "quantity": 20328.0,
    "cost": 54682.32,
    "price": 2.69
  },
  {
    "date": "2024-06-17",
    "product": "DZ MALINA 90/10",
    "country": "Poland",
    "quantity": 20328.0,
    "cost": 50820.0,
    "price": 2.5
  },
  {
    "date": "2024-06-21",
    "product": "DZ MALINA ROLEND 90/10 PO RAČUNU 32/24",
    "country": "Poland",
    "quantity": 20328.0,
    "cost": 60984.0,
    "price": 3.0
  },
  {
    "date": "2024-06-22",
    "product": "DUBOKO ZAMRZNUTA MALINA 90/10 PAKOVANJE: 1X11KG",
    "country": "Poland",
    "quantity": 20328.0,
    "cost": 57324.96,
    "price": 2.82
  },
  {
    "date": "2024-06-10",
    "product": "SMRZNUTO VOĆE:MALINA-350GR",
    "country": "QA",
    "quantity": 5250.0,
    "cost": 33075.0,
    "price": 6.3
  },
  {
    "date": "2024-06-19",
    "product": "DZ MALINA,PAK.2,5 KG,PROIZVOĐAČ:ARETOL DOO,NOVI SAD",
    "country": "Romania",
    "quantity": 960.0,
    "cost": 2745.6,
    "price": 2.86
  },
  {
    "date": "2024-06-12",
    "product": "D.Z. MALINA ROLEND, PAK. 8X300 G",
    "country": "Russia",
    "quantity": 453.6,
    "cost": 1648.08,
    "price": 3.63
  },
  {
    "date": "2024-06-07",
    "product": "D.Z. MALINA, PAK. 10X400 G; 5X1 KG",
    "country": "SA",
    "quantity": 4160.0,
    "cost": 13156.65,
    "price": 3.16
  },
  {
    "date": "2024-06-14",
    "product": "D.Z. MALINA, PAK. 16X350 KG",
    "country": "SA",
    "quantity": 10080.0,
    "cost": 47520.0,
    "price": 4.71
  },
  {
    "date": "2024-06-17",
    "product": "RASPBERRY 300 GR - DUBOKO ZAMRZNUTA MALINA",
    "country": "SA",
    "quantity": 2400.0,
    "cost": 14208.0,
    "price": 5.92
  },
  {
    "date": "2024-06-03",
    "product": "DUBOKO ZAMRZNUTA MALINA 500G (10 X 500G=1/5KG), DUBOKO",
    "country": "Sweden",
    "quantity": 13200.0,
    "cost": 40320.0,
    "price": 3.05
  },
  {
    "date": "2024-06-03",
    "product": "DUBOKO ZAMRZNUTA MALINA 500G (10 X 500G=1/5KG), DUBOKO",
    "country": "Sweden",
    "quantity": 12570.0,
    "cost": 39087.0,
    "price": 3.11
  },
  {
    "date": "2024-06-04",
    "product": "D.Z. MALINA ROLEND, PAK. 200 I 400G",
    "country": "Sweden",
    "quantity": 7776.0,
    "cost": 28586.52,
    "price": 3.68
  },
  {
    "date": "2024-06-05",
    "product": "DUBOKO ZAMRZNUTA MALINA 500G (10 X 500G=1/5KG), DUBOKO",
    "country": "Sweden",
    "quantity": 15360.0,
    "cost": 47136.0,
    "price": 3.07
  },
  {
    "date": "2024-06-06",
    "product": "DZ MALINA (ICA), PAK. 250G",
    "country": "Sweden",
    "quantity": 9450.0,
    "cost": 32933.25,
    "price": 3.49
  },
  {
    "date": "2024-06-07",
    "product": "DUBOKO ZAMRZNUTA MALINA 1 KG (10 X 1 KG=1/10KG),",
    "country": "Sweden",
    "quantity": 12000.0,
    "cost": 36000.0,
    "price": 3.0
  },
  {
    "date": "2024-06-08",
    "product": "D.Z. MALINA ROLEND, PAK. 200 I 400G",
    "country": "Sweden",
    "quantity": 11923.2,
    "cost": 43632.43,
    "price": 3.66
  },
  {
    "date": "2024-06-10",
    "product": "D.Z. MALINA, PAK. 10X225 G; 10X500 G; 4X2,5 KG",
    "country": "Sweden",
    "quantity": 11579.0,
    "cost": 41866.96,
    "price": 3.62
  },
  {
    "date": "2024-06-10",
    "product": "D.Z. MALINA, PAK. 10X500 G; 4X2,5 KG",
    "country": "Sweden",
    "quantity": 16080.0,
    "cost": 57967.68,
    "price": 3.6
  },
  {
    "date": "2024-06-10",
    "product": "DUBOKO ZAMRZNUTA MALINA 500G (10 X 500G=1/5KG)",
    "country": "Sweden",
    "quantity": 12240.0,
    "cost": 37944.0,
    "price": 3.1
  },
  {
    "date": "2024-06-10",
    "product": "DUBOKO ZAMRZNUTA MALINA 500G (10 X 500G=1/5KG), DUBOKO",
    "country": "Sweden",
    "quantity": 13980.0,
    "cost": 44598.0,
    "price": 3.19
  },
  {
    "date": "2024-06-11",
    "product": "D.Z. MALINA ROLEND, PAK. 2 X 2,5 KG",
    "country": "Sweden",
    "quantity": 8100.0,
    "cost": 27280.8,
    "price": 3.37
  },
  {
    "date": "2024-06-12",
    "product": "DUBOKO ZAMRZNUTA MALINA 500G (10 X 500G=1/5KG)DUBOKO",
    "country": "Sweden",
    "quantity": 15120.0,
    "cost": 46152.0,
    "price": 3.05
  },
  {
    "date": "2024-06-14",
    "product": "DUBOKO ZAMRZNUTA MALINA 500G (10 X 500G=1/5KG), DUBOKO",
    "country": "Sweden",
    "quantity": 9780.0,
    "cost": 29628.0,
    "price": 3.03
  },
  {
    "date": "2024-06-20",
    "product": "D.Z. MALINA ROLEND, PAK. 200 I 400G",
    "country": "Sweden",
    "quantity": 15336.0,
    "cost": 54682.56,
    "price": 3.57
  },
  {
    "date": "2024-06-22",
    "product": "D.Z. MALINA ROLEND, PAK. 2 X 2,5 KG",
    "country": "Sweden",
    "quantity": 13500.0,
    "cost": 45468.0,
    "price": 3.37
  },
  {
    "date": "2024-06-22",
    "product": "D.Z. MALINA ROLEND, PAK. 200 G",
    "country": "Sweden",
    "quantity": 9288.0,
    "cost": 35340.84,
    "price": 3.81
  },
  {
    "date": "2024-06-24",
    "product": "DUBOKO ZAMRZNUTA MALINA 500G (10 X 500G=1/5KG)DUBOKO ZAMRZNUTA",
    "country": "Sweden",
    "quantity": 14160.0,
    "cost": 42576.0,
    "price": 3.01
  },
  {
    "date": "2024-06-27",
    "product": "DUBOKO ZAMRZNUTA MALINA 500G (10 X 500G=1/5KG), DUBOKO",
    "country": "Sweden",
    "quantity": 12600.0,
    "cost": 38280.0,
    "price": 3.04
  },
  {
    "date": "2024-06-29",
    "product": "DUBOKO ZAMRZNUTA MALINA 500G (10 X 500G=1/5KG), DUBOKO",
    "country": "Sweden",
    "quantity": 10770.0,
    "cost": 33285.0,
    "price": 3.09
  },
  {
    "date": "2024-06-21",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "Turkey",
    "quantity": 10240.0,
    "cost": 31334.4,
    "price": 3.06
  },
  {
    "date": "2024-06-06",
    "product": "DZ MALINA ROLEND FDA",
    "country": "United States",
    "quantity": 20400.0,
    "cost": 55080.0,
    "price": 2.7
  },
  {
    "date": "2024-09-24",
    "product": "DUBOKO ZAMRZNUTA MALINA 300G",
    "country": "AE",
    "quantity": 1368.9,
    "cost": 5805.88,
    "price": 4.24
  },
  {
    "date": "2024-09-24",
    "product": "DZ MALINA (S-BUDGET), PAK. 500G",
    "country": "AT",
    "quantity": 16038.0,
    "cost": 65146.36,
    "price": 4.06
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 20X500GR;6X500GR",
    "country": "AT",
    "quantity": 15480.0,
    "cost": 59526.0,
    "price": 3.85
  },
  {
    "date": "2024-09-24",
    "product": "DZ MALINA (S-BUDGET), PAK. 500G",
    "country": "AT",
    "quantity": 16038.0,
    "cost": 65146.36,
    "price": 4.06
  },
  {
    "date": "2024-09-24",
    "product": "DZ MALINA (S-BUDGET), PAK. 500G",
    "country": "AT",
    "quantity": 16038.0,
    "cost": 65146.36,
    "price": 4.06
  },
  {
    "date": "2024-09-24",
    "product": "DUBOKO ZAMRZNUTA MALINA 250G SPAR",
    "country": "AT",
    "quantity": 4800.0,
    "cost": 24000.0,
    "price": 5.0
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X300GR",
    "country": "AT",
    "quantity": 14850.0,
    "cost": 64206.47,
    "price": 4.32
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 20X500GR",
    "country": "AT",
    "quantity": 17820.0,
    "cost": 72349.2,
    "price": 4.06
  },
  {
    "date": "2024-09-24",
    "product": "DUBOKO ZAMRZNUTA MALINA CELA 10X1KG, DUBOKO ZAMRZNUTA MALINA CELA 4X2,5",
    "country": "AU",
    "quantity": 8000.0,
    "cost": 35907.18,
    "price": 4.49
  },
  {
    "date": "2024-09-24",
    "product": "DUBOKO ZAMRZNUTA MALINA CELA 10X1KG,",
    "country": "AU",
    "quantity": 5400.0,
    "cost": 25112.65,
    "price": 4.65
  },
  {
    "date": "2024-09-24",
    "product": "DZ MALINA -VOLIM MALINU 400G TROPIC",
    "country": "BA",
    "quantity": 3920.0,
    "cost": 13818.0,
    "price": 3.53
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 5X1KG",
    "country": "BE",
    "quantity": 16500.0,
    "cost": 56595.0,
    "price": 3.43
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 6X750GR",
    "country": "BE",
    "quantity": 5791.5,
    "cost": 15289.56,
    "price": 2.64
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 15X450GR",
    "country": "BE",
    "quantity": 12514.5,
    "cost": 52185.47,
    "price": 4.17
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 5X1KG",
    "country": "BE",
    "quantity": 16500.0,
    "cost": 56595.0,
    "price": 3.43
  },
  {
    "date": "2024-09-24",
    "product": "D\\Z MALINA \"ROLEND 500G\"",
    "country": "BE",
    "quantity": 16335.0,
    "cost": 69603.44,
    "price": 4.26
  },
  {
    "date": "2024-09-24",
    "product": "DZ MALINA (COLES), PAK. 500G",
    "country": "BE",
    "quantity": 18018.0,
    "cost": 87223.75,
    "price": 4.84
  },
  {
    "date": "2024-09-24",
    "product": "DZ MALINA (WHOLE, CROP'S), PAK 2,5KG, 300G",
    "country": "BE",
    "quantity": 8200.0,
    "cost": 37311.8,
    "price": 4.55
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:20X500GR",
    "country": "BE",
    "quantity": 17820.0,
    "cost": 73974.8,
    "price": 4.15
  },
  {
    "date": "2024-09-24",
    "product": "DZ MALINA (SYSTEME U), PAK.1KG",
    "country": "BE",
    "quantity": 19800.0,
    "cost": 53460.0,
    "price": 2.7
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X500GR",
    "country": "BE",
    "quantity": 32670.0,
    "cost": 133947.0,
    "price": 4.1
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG; 12X500GR",
    "country": "BE",
    "quantity": 9600.0,
    "cost": 40032.0,
    "price": 4.17
  },
  {
    "date": "2024-09-24",
    "product": "D\\Z MALINA \"ROLEND 500G\"",
    "country": "BE",
    "quantity": 16335.0,
    "cost": 69603.44,
    "price": 4.26
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 5X1/1",
    "country": "BE",
    "quantity": 19305.0,
    "cost": 75096.45,
    "price": 3.89
  },
  {
    "date": "2024-09-24",
    "product": "DZ  MALINA (BAKERY), PAK 6X500G",
    "country": "BE",
    "quantity": 5040.0,
    "cost": 34337.52,
    "price": 6.81
  },
  {
    "date": "2024-09-24",
    "product": "DZ MALINA (COLES), PAK. 500G",
    "country": "BE",
    "quantity": 18018.0,
    "cost": 88504.42,
    "price": 4.91
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 6X250GR",
    "country": "BE",
    "quantity": 3648.0,
    "cost": 12184.32,
    "price": 3.34
  },
  {
    "date": "2024-09-24",
    "product": "DZ MALINA (CROPS), PAK.1KG",
    "country": "BE",
    "quantity": 17820.0,
    "cost": 81383.94,
    "price": 4.57
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X500GR",
    "country": "BE",
    "quantity": 16335.0,
    "cost": 66973.5,
    "price": 4.1
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "BE",
    "quantity": 20790.0,
    "cost": 51559.2,
    "price": 2.48
  },
  {
    "date": "2024-09-24",
    "product": "D\\Z MALINA \"ROLEND 500G\"",
    "country": "BE",
    "quantity": 16335.0,
    "cost": 69603.44,
    "price": 4.26
  },
  {
    "date": "2024-09-24",
    "product": "SMRZNUTA MALINA U PAKOVANJIMA 5X1KG",
    "country": "BE",
    "quantity": 13200.0,
    "cost": 57684.0,
    "price": 4.37
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 6X1KG",
    "country": "BE",
    "quantity": 3150.0,
    "cost": 13639.5,
    "price": 4.33
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:20X500GR",
    "country": "BE",
    "quantity": 17820.0,
    "cost": 73974.8,
    "price": 4.15
  },
  {
    "date": "2024-09-24",
    "product": "DZ MALINA (COLES), PAK. 500G",
    "country": "BE",
    "quantity": 9009.0,
    "cost": 44252.21,
    "price": 4.91
  },
  {
    "date": "2024-09-24",
    "product": "DZ MALINA ROLEND 90/10",
    "country": "BE",
    "quantity": 16335.0,
    "cost": 66973.5,
    "price": 4.1
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X500GR",
    "country": "BE",
    "quantity": 16335.0,
    "cost": 66973.5,
    "price": 4.1
  },
  {
    "date": "2024-09-24",
    "product": "DZ MALINA (THIRIET, THIRIET W&B), PAK. 450G",
    "country": "BE",
    "quantity": 17617.5,
    "cost": 66605.09,
    "price": 3.78
  },
  {
    "date": "2024-09-24",
    "product": "DZ MALINA  (AUCHAN ), PAK. 600G",
    "country": "BE",
    "quantity": 6739.2,
    "cost": 21632.83,
    "price": 3.21
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 6X750GR",
    "country": "BE",
    "quantity": 6682.5,
    "cost": 20983.05,
    "price": 3.14
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 5X1KG",
    "country": "BE",
    "quantity": 16500.0,
    "cost": 56595.0,
    "price": 3.43
  },
  {
    "date": "2024-09-24",
    "product": "DZ MALINA (COLES), PAK. 500G",
    "country": "BE",
    "quantity": 18018.0,
    "cost": 88504.42,
    "price": 4.91
  },
  {
    "date": "2024-09-24",
    "product": "DZ MALINA ROLEND",
    "country": "CA",
    "quantity": 20400.0,
    "cost": 48960.0,
    "price": 2.4
  },
  {
    "date": "2024-09-24",
    "product": "DUBOKO ZAMRZNUTA MALINA 300G",
    "country": "CH",
    "quantity": 13860.0,
    "cost": 60984.0,
    "price": 4.4
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 2X2,5; 4X2,5 KG",
    "country": "CH",
    "quantity": 19800.0,
    "cost": 62114.5,
    "price": 3.14
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA , PAKOVANJE: 10X0,300KG",
    "country": "CH",
    "quantity": 7488.0,
    "cost": 38188.8,
    "price": 5.1
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5;10/1 KG",
    "country": "CH",
    "quantity": 18270.0,
    "cost": 65331.0,
    "price": 3.58
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5GR",
    "country": "CH",
    "quantity": 20000.0,
    "cost": 82600.0,
    "price": 4.13
  },
  {
    "date": "2024-09-24",
    "product": "TK- HIMBEEREN FRESHONA DE/AT 20X500G",
    "country": "DE",
    "quantity": 20250.0,
    "cost": 73100.0,
    "price": 3.61
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "DE",
    "quantity": 20250.0,
    "cost": 73100.0,
    "price": 3.61
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 6X500GR",
    "country": "DE",
    "quantity": 6480.0,
    "cost": 21708.0,
    "price": 3.35
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X500GR",
    "country": "DE",
    "quantity": 16335.0,
    "cost": 49858.4,
    "price": 3.05
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 18X500GR",
    "country": "DE",
    "quantity": 18711.0,
    "cost": 57586.64,
    "price": 3.08
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:20X500GR",
    "country": "DE",
    "quantity": 20160.0,
    "cost": 72776.0,
    "price": 3.61
  },
  {
    "date": "2024-09-24",
    "product": "TK- HIMBEEREN FRESHONA DE/AT 20X500G,TK-HIMBEEREN BESTE ERNTE 20X500G",
    "country": "DE",
    "quantity": 20470.0,
    "cost": 73892.0,
    "price": 3.61
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR; 10X1000GR",
    "country": "DE",
    "quantity": 19600.0,
    "cost": 59641.2,
    "price": 3.04
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 6X500GR",
    "country": "DE",
    "quantity": 6840.0,
    "cost": 22914.0,
    "price": 3.35
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X500GR",
    "country": "DE",
    "quantity": 16335.0,
    "cost": 67173.5,
    "price": 4.11
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 18X500GR",
    "country": "DE",
    "quantity": 18711.0,
    "cost": 77925.49,
    "price": 4.16
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "DE",
    "quantity": 20250.0,
    "cost": 81810.0,
    "price": 4.04
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:10X300GR",
    "country": "DE",
    "quantity": 14850.0,
    "cost": 63060.05,
    "price": 4.25
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:14X500GR",
    "country": "DE",
    "quantity": 18480.0,
    "cost": 74120.0,
    "price": 4.01
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:20X500GR",
    "country": "DE",
    "quantity": 60480.0,
    "cost": 244339.2,
    "price": 4.04
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 14X500GR",
    "country": "DE",
    "quantity": 14784.0,
    "cost": 59032.51,
    "price": 3.99
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 6X500GR",
    "country": "DE",
    "quantity": 13068.0,
    "cost": 52472.0,
    "price": 4.02
  },
  {
    "date": "2024-09-24",
    "product": "TK- HIMBEEREN BESTE ERNTE 20X500G",
    "country": "DE",
    "quantity": 20160.0,
    "cost": 81446.4,
    "price": 4.04
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 6X500GR I 10X500GR",
    "country": "DE",
    "quantity": 14040.0,
    "cost": 47034.0,
    "price": 3.35
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X500GR",
    "country": "DE",
    "quantity": 16335.0,
    "cost": 67173.5,
    "price": 4.11
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 14X500GR; 10X300GR",
    "country": "DE",
    "quantity": 10990.0,
    "cost": 44795.66,
    "price": 4.08
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:20X500GR",
    "country": "DE",
    "quantity": 20160.0,
    "cost": 81446.4,
    "price": 4.04
  },
  {
    "date": "2024-09-24",
    "product": "TK- HIMBEEREN FRESHONA BESTE ERNTE 20X500G",
    "country": "DE",
    "quantity": 20160.0,
    "cost": 81446.4,
    "price": 4.04
  },
  {
    "date": "2024-09-24",
    "product": "D/Z MALINA - DF RASPBERRY ROLLEND 12X750GR",
    "country": "DE",
    "quantity": 18711.0,
    "cost": 75966.66,
    "price": 4.06
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 6X500GR I 10X500GR",
    "country": "DE",
    "quantity": 13635.0,
    "cost": 45677.25,
    "price": 3.35
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 14X500GR",
    "country": "DE",
    "quantity": 14784.0,
    "cost": 59032.51,
    "price": 3.99
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 16X500GR",
    "country": "DE",
    "quantity": 14784.0,
    "cost": 59519.32,
    "price": 4.03
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "DE",
    "quantity": 48180.0,
    "cost": 194389.58,
    "price": 4.03
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 6X500GR",
    "country": "DE",
    "quantity": 13068.0,
    "cost": 52472.0,
    "price": 4.02
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:10X1000GR",
    "country": "DE",
    "quantity": 18480.0,
    "cost": 75690.8,
    "price": 4.1
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:10X300GR",
    "country": "DE",
    "quantity": 14850.0,
    "cost": 63060.05,
    "price": 4.25
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:20X500GR",
    "country": "DE",
    "quantity": 20160.0,
    "cost": 80908.13,
    "price": 4.01
  },
  {
    "date": "2024-09-24",
    "product": "TK- HIMBEEREN FRESHONA BESTE ERNTE 20X500G",
    "country": "DE",
    "quantity": 20160.0,
    "cost": 81446.4,
    "price": 4.04
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 10X500GR",
    "country": "DE",
    "quantity": 14850.0,
    "cost": 49747.5,
    "price": 3.35
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "DE",
    "quantity": 20250.0,
    "cost": 83225.0,
    "price": 4.11
  },
  {
    "date": "2024-09-24",
    "product": "TK- HIMBEEREN FRESHONA BESTE ERNTE 20X500G,TK- HIMBEEREN GUT&GUNSTIG",
    "country": "DE",
    "quantity": 20160.0,
    "cost": 81446.4,
    "price": 4.04
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X500GR",
    "country": "DE",
    "quantity": 16335.0,
    "cost": 67173.5,
    "price": 4.11
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 14X500GR",
    "country": "DE",
    "quantity": 14784.0,
    "cost": 59032.51,
    "price": 3.99
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 18X500GR; 24X350GR",
    "country": "DE",
    "quantity": 19731.6,
    "cost": 81528.21,
    "price": 4.13
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:20X500GR",
    "country": "DE",
    "quantity": 20160.0,
    "cost": 81446.4,
    "price": 4.04
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:14X500GR",
    "country": "DE",
    "quantity": 18480.0,
    "cost": 72811.2,
    "price": 3.94
  },
  {
    "date": "2024-09-24",
    "product": "-D/Z MALINA ROLEND PAK.U 1215 KUT.L4256/12.09.2026-MATERIAL NO. 3034285:",
    "country": "DE",
    "quantity": 12150.0,
    "cost": 38637.0,
    "price": 3.18
  },
  {
    "date": "2024-09-24",
    "product": "D/Z MALINA - DF RASPBERRY ROLLEND 12X750GR",
    "country": "DE",
    "quantity": 18711.0,
    "cost": 77837.76,
    "price": 4.16
  },
  {
    "date": "2024-09-24",
    "product": "TK- HIMBEEREN GUT&GUNSTIG 20X500G",
    "country": "DE",
    "quantity": 20160.0,
    "cost": 81446.4,
    "price": 4.04
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 6X500GR I 10X500GR",
    "country": "DE",
    "quantity": 13140.0,
    "cost": 44019.0,
    "price": 3.35
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X500GR",
    "country": "DE",
    "quantity": 24255.0,
    "cost": 99769.02,
    "price": 4.11
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "DE",
    "quantity": 20250.0,
    "cost": 81810.0,
    "price": 4.04
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:20X500GR",
    "country": "DE",
    "quantity": 60480.0,
    "cost": 244339.2,
    "price": 4.04
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:6X500GR I  12X750GR",
    "country": "DE",
    "quantity": 15588.0,
    "cost": 62432.64,
    "price": 4.01
  },
  {
    "date": "2024-09-24",
    "product": "D/Z MALINA - DF RASPBERRY ROLLEND 12X750GR",
    "country": "DE",
    "quantity": 18711.0,
    "cost": 78211.98,
    "price": 4.18
  },
  {
    "date": "2024-09-24",
    "product": "TK- HIMBEEREN FRESHONA DE/AT 20X500G",
    "country": "DE",
    "quantity": 20250.0,
    "cost": 81810.0,
    "price": 4.04
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 14X500GR",
    "country": "DE",
    "quantity": 14784.0,
    "cost": 60119.55,
    "price": 4.07
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "DE",
    "quantity": 20250.0,
    "cost": 83225.0,
    "price": 4.11
  },
  {
    "date": "2024-09-24",
    "product": "TK- HIMBEEREN FRESHONA DE/AT 20X500G,TK- HIMBEEREN GUT&GUNSTIG 20X500G",
    "country": "DE",
    "quantity": 20000.0,
    "cost": 80800.0,
    "price": 4.04
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "DE",
    "quantity": 20250.0,
    "cost": 81810.0,
    "price": 4.04
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:10X300GR",
    "country": "DE",
    "quantity": 14850.0,
    "cost": 63060.05,
    "price": 4.25
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:14X500GR",
    "country": "DE",
    "quantity": 18480.0,
    "cost": 72811.2,
    "price": 3.94
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:20X500GR",
    "country": "DE",
    "quantity": 20160.0,
    "cost": 80840.0,
    "price": 4.01
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:20X500GR; 10X300GR",
    "country": "DE",
    "quantity": 17370.0,
    "cost": 71647.3,
    "price": 4.12
  },
  {
    "date": "2024-09-24",
    "product": "TK- HIMBEEREN ALL SEASONS 14X500G",
    "country": "DE",
    "quantity": 33264.0,
    "cost": 131843.71,
    "price": 3.96
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 6X500GR",
    "country": "DE",
    "quantity": 7200.0,
    "cost": 28440.0,
    "price": 3.95
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X300GR; 24X350GR",
    "country": "DE",
    "quantity": 18100.8,
    "cost": 75321.99,
    "price": 4.16
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X500GR",
    "country": "DE",
    "quantity": 16335.0,
    "cost": 67173.5,
    "price": 4.11
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 12X750GR",
    "country": "DE",
    "quantity": 16632.0,
    "cost": 67060.64,
    "price": 4.03
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "DE",
    "quantity": 40500.0,
    "cost": 165035.0,
    "price": 4.07
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 6X500GR",
    "country": "DE",
    "quantity": 13068.0,
    "cost": 52472.0,
    "price": 4.02
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:20X500GR",
    "country": "DE",
    "quantity": 20160.0,
    "cost": 81446.4,
    "price": 4.04
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 6X500GR I 10X500GR",
    "country": "DE",
    "quantity": 10710.0,
    "cost": 42304.5,
    "price": 3.95
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 12X750GR",
    "country": "DE",
    "quantity": 16632.0,
    "cost": 66960.85,
    "price": 4.03
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "DE",
    "quantity": 40500.0,
    "cost": 165035.0,
    "price": 4.07
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:10X300GR",
    "country": "DE",
    "quantity": 14850.0,
    "cost": 63060.05,
    "price": 4.25
  },
  {
    "date": "2024-09-24",
    "product": "D.Z. MALINA ROLEND, PAK. 200 G",
    "country": "DK",
    "quantity": 1512.0,
    "cost": 5601.96,
    "price": 3.71
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "ES",
    "quantity": 240.0,
    "cost": 984.0,
    "price": 4.1
  },
  {
    "date": "2024-09-24",
    "product": "D.Z. MALINA ROLEND, PAK. 200 I 400 G",
    "country": "FI",
    "quantity": 11059.2,
    "cost": 41461.63,
    "price": 3.75
  },
  {
    "date": "2024-09-24",
    "product": "DUBOKO ZAMRZNUTA MALINA 1/5 KG (10X500G)  DUBOKO ZAMZNUTA MALINA 1/2,4 KG",
    "country": "FI",
    "quantity": 6096.0,
    "cost": 20109.6,
    "price": 3.3
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 15X1KG",
    "country": "FR",
    "quantity": 20880.0,
    "cost": 69948.0,
    "price": 3.35
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 6X0,5KG",
    "country": "FR",
    "quantity": 3.0,
    "cost": 10.05,
    "price": 3.35
  },
  {
    "date": "2024-09-24",
    "product": "D.Z. MALINA, PAK. 500 G",
    "country": "FR",
    "quantity": 6750.0,
    "cost": 21330.0,
    "price": 3.16
  },
  {
    "date": "2024-09-24",
    "product": "D/Z MALINA ROLEND",
    "country": "FR",
    "quantity": 17820.0,
    "cost": 69498.0,
    "price": 3.9
  },
  {
    "date": "2024-09-24",
    "product": "DZ MALINA ROLEND",
    "country": "FR",
    "quantity": 14580.0,
    "cost": 40824.0,
    "price": 2.8
  },
  {
    "date": "2024-09-24",
    "product": "D\\Z MALINA - FERTODI \"ROLEND\",PAK. 9\\1- 1.848 KUTIJA",
    "country": "FR",
    "quantity": 16632.0,
    "cost": 72681.84,
    "price": 4.37
  },
  {
    "date": "2024-09-24",
    "product": "DUBOKO ZAMRZNUTA MALINA 4X2,5KG",
    "country": "FR",
    "quantity": 20790.0,
    "cost": 80041.5,
    "price": 3.85
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 15X1KG",
    "country": "FR",
    "quantity": 20880.0,
    "cost": 69948.0,
    "price": 3.35
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 6X0,5KG",
    "country": "FR",
    "quantity": 3.0,
    "cost": 10.05,
    "price": 3.35
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 15X1KG",
    "country": "FR",
    "quantity": 41760.0,
    "cost": 145116.0,
    "price": 3.48
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 6X0,5KG",
    "country": "FR",
    "quantity": 6.0,
    "cost": 20.85,
    "price": 3.48
  },
  {
    "date": "2024-09-24",
    "product": "D.Z. MALINA, PAK. 500 G",
    "country": "FR",
    "quantity": 6750.0,
    "cost": 21330.0,
    "price": 3.16
  },
  {
    "date": "2024-09-24",
    "product": "D\\Z MALINA ROLEND   20X450G - VILAMET, LOT :240523,240524 DF RASPBERRY IQF",
    "country": "FR",
    "quantity": 18319.5,
    "cost": 45798.75,
    "price": 2.5
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUT MALINA(IQF RASPBERRY WHOLE, 5X1KG)",
    "country": "FR",
    "quantity": 17820.0,
    "cost": 68197.14,
    "price": 3.83
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 4X2,5KG",
    "country": "FR",
    "quantity": 20000.0,
    "cost": 85000.0,
    "price": 4.25
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X0,5KG I 3X0,5KG",
    "country": "FR",
    "quantity": 3.5,
    "cost": 12.33,
    "price": 3.52
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 5X1KG",
    "country": "FR",
    "quantity": 9900.0,
    "cost": 36135.0,
    "price": 3.65
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA - DF RASPBERRIES  WHOLE (5/1)",
    "country": "FR",
    "quantity": 15840.0,
    "cost": 44352.0,
    "price": 2.8
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 12X0,5KG",
    "country": "FR",
    "quantity": 11088.0,
    "cost": 51004.8,
    "price": 4.6
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 15X1KG",
    "country": "FR",
    "quantity": 41760.0,
    "cost": 147204.0,
    "price": 3.53
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 6X0,5KG",
    "country": "FR",
    "quantity": 6.0,
    "cost": 21.15,
    "price": 3.53
  },
  {
    "date": "2024-09-24",
    "product": "D\\Z MALINA  ROLEND 5X1KG- VILAMET,LOT: RD233322B,RD233323 DF RASPBERRY IQF",
    "country": "FR",
    "quantity": 18000.0,
    "cost": 71163.0,
    "price": 3.95
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA (IQF WHOLE WILAMETTE RASPBERRIES 5X1KG) PO FAKTURI",
    "country": "FR",
    "quantity": 17820.0,
    "cost": 71814.6,
    "price": 4.03
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA -DF RASPBERRIES  WHOLE (4X2,5)",
    "country": "FR",
    "quantity": 18480.0,
    "cost": 66528.0,
    "price": 3.6
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 15X1KG",
    "country": "FR",
    "quantity": 20880.0,
    "cost": 75168.0,
    "price": 3.6
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 6X0,5KG",
    "country": "FR",
    "quantity": 3.0,
    "cost": 10.8,
    "price": 3.6
  },
  {
    "date": "2024-09-24",
    "product": "D\\Z MALINA   \" ROLEND\" 500G",
    "country": "FR",
    "quantity": 16335.0,
    "cost": 62865.0,
    "price": 3.85
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA,PAKOVANJE:12X0,5 KG",
    "country": "FR",
    "quantity": 11088.0,
    "cost": 51004.8,
    "price": 4.6
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "GB",
    "quantity": 20790.0,
    "cost": 82536.3,
    "price": 3.97
  },
  {
    "date": "2024-09-24",
    "product": "DUBOKO ZAMRZNUTA MALINA  PAKOVANJE 300G AD",
    "country": "GB",
    "quantity": 15876.0,
    "cost": 74350.95,
    "price": 4.68
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG I 1X12KG",
    "country": "GB",
    "quantity": 20808.0,
    "cost": 71146.8,
    "price": 3.42
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X1KG",
    "country": "GB",
    "quantity": 17820.0,
    "cost": 46153.8,
    "price": 2.59
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "GB",
    "quantity": 20790.0,
    "cost": 82536.3,
    "price": 3.97
  },
  {
    "date": "2024-09-24",
    "product": "DZ MALINA ROLEND",
    "country": "GB",
    "quantity": 3500.0,
    "cost": 14700.0,
    "price": 4.2
  },
  {
    "date": "2024-09-24",
    "product": "DUBOKO ZAMRZNUTA MALINA 300G (1/4,2 KG)",
    "country": "GB",
    "quantity": 17472.0,
    "cost": 82844.97,
    "price": 4.74
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "GB",
    "quantity": 20790.0,
    "cost": 82536.3,
    "price": 3.97
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "GB",
    "quantity": 20790.0,
    "cost": 82536.3,
    "price": 3.97
  },
  {
    "date": "2024-09-24",
    "product": "DUBOKO ZAMRZNUTA MALINA 300G (1/4,2 KG)",
    "country": "GB",
    "quantity": 17472.0,
    "cost": 82884.25,
    "price": 4.74
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "GB",
    "quantity": 20790.0,
    "cost": 82536.3,
    "price": 3.97
  },
  {
    "date": "2024-09-24",
    "product": "DZ MALINA (OCADO), PAK. 300G",
    "country": "GB",
    "quantity": 13824.0,
    "cost": 50692.61,
    "price": 3.67
  },
  {
    "date": "2024-09-24",
    "product": "DUBOKO ZAMRZNUTA MALINA 300G (1/4,2 KG)",
    "country": "GB",
    "quantity": 17472.0,
    "cost": 83199.99,
    "price": 4.76
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE 24X350GR",
    "country": "GB",
    "quantity": 19958.4,
    "cost": 69455.23,
    "price": 3.48
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "GB",
    "quantity": 20790.0,
    "cost": 82536.3,
    "price": 3.97
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "GB",
    "quantity": 20790.0,
    "cost": 82536.3,
    "price": 3.97
  },
  {
    "date": "2024-09-24",
    "product": "DZ MALINA (DEL MONTE), PAK.  300G",
    "country": "GB",
    "quantity": 6750.0,
    "cost": 30442.5,
    "price": 4.51
  },
  {
    "date": "2024-09-24",
    "product": "DZ MALINA - RASPBERRIES 400GR",
    "country": "GR",
    "quantity": 5600.0,
    "cost": 16520.0,
    "price": 2.95
  },
  {
    "date": "2024-09-24",
    "product": "DZ MALINA, PAKOV. 4X2,5 KG, PROIZVOĐAČ ARETOL DOO, NOVI SAD",
    "country": "HR",
    "quantity": 720.0,
    "cost": 2340.0,
    "price": 3.25
  },
  {
    "date": "2024-09-24",
    "product": "DUBOKO ZAMRZNUTA MALINA 300G",
    "country": "HR",
    "quantity": 10483.2,
    "cost": 44029.44,
    "price": 4.2
  },
  {
    "date": "2024-09-24",
    "product": "BSM MALINA 450G PO FAKTURI",
    "country": "HR",
    "quantity": 504.0,
    "cost": 2385.6,
    "price": 4.73
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 10X250GR I 10X500GR",
    "country": "HU",
    "quantity": 5520.0,
    "cost": 14448.0,
    "price": 2.62
  },
  {
    "date": "2024-09-24",
    "product": "D/Z MALINA  / DF RASPBERRY ROLLEND 1X11KG",
    "country": "HU",
    "quantity": 9856.0,
    "cost": 37945.6,
    "price": 3.85
  },
  {
    "date": "2024-09-24",
    "product": "DUBOKO ZAMRZNUTA MALINA 300G I 400G",
    "country": "IQ",
    "quantity": 1224.0,
    "cost": 6453.0,
    "price": 5.27
  },
  {
    "date": "2024-09-24",
    "product": "DUBOKO ZAMRZNUTA MALINA 500G",
    "country": "IS",
    "quantity": 8640.0,
    "cost": 26784.0,
    "price": 3.1
  },
  {
    "date": "2024-09-24",
    "product": "DUBOKO ZAMRZNUTA MALINA 500G",
    "country": "IS",
    "quantity": 7200.0,
    "cost": 22320.0,
    "price": 3.1
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:20X500GR",
    "country": "JP",
    "quantity": 9130.0,
    "cost": 39715.5,
    "price": 4.35
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:20X500GR",
    "country": "JP",
    "quantity": 9130.0,
    "cost": 39715.5,
    "price": 4.35
  },
  {
    "date": "2024-09-24",
    "product": "DUBOKO ZAMRZNUTA MALINA IQF CELA 4X2,5 KG",
    "country": "JP",
    "quantity": 18270.0,
    "cost": 62118.0,
    "price": 3.4
  },
  {
    "date": "2024-09-24",
    "product": "D.Z. MALINA ROLEND, PAK. 16X400 G",
    "country": "KW",
    "quantity": 960.0,
    "cost": 3816.0,
    "price": 3.98
  },
  {
    "date": "2024-09-24",
    "product": "D.Z. MALINA ROLEND, PAK. 5X1 KG",
    "country": "KW",
    "quantity": 2500.0,
    "cost": 9325.0,
    "price": 3.73
  },
  {
    "date": "2024-09-24",
    "product": "DUBOKO ZAMRZNUTA MALINA 400G",
    "country": "LB",
    "quantity": 4320.0,
    "cost": 19656.0,
    "price": 4.55
  },
  {
    "date": "2024-09-24",
    "product": "MALINA 300GR",
    "country": "ME",
    "quantity": 499.2,
    "cost": 1547.52,
    "price": 3.1
  },
  {
    "date": "2024-09-24",
    "product": "BSM MALINA 450G PO FAKTURI",
    "country": "ME",
    "quantity": 1512.0,
    "cost": 7694.4,
    "price": 5.09
  },
  {
    "date": "2024-09-24",
    "product": "MALINA 300 GR FAKTURA: 91736648 STAVKA: 14",
    "country": "MK",
    "quantity": 998.4,
    "cost": 3095.04,
    "price": 3.1
  },
  {
    "date": "2024-09-24",
    "product": "D/Z MALINA 300G",
    "country": "MK",
    "quantity": 1728.0,
    "cost": 8277.12,
    "price": 4.79
  },
  {
    "date": "2024-09-24",
    "product": "D.Z. MALINA ROLEND",
    "country": "NL",
    "quantity": 20480.0,
    "cost": 55296.0,
    "price": 2.7
  },
  {
    "date": "2024-09-24",
    "product": "DZ MALINA (CROPS), PAK.300G",
    "country": "NL",
    "quantity": 11880.0,
    "cost": 57214.08,
    "price": 4.82
  },
  {
    "date": "2024-09-24",
    "product": "D.Z. MALINA ROLEND 90/10, PAK. 500 G",
    "country": "NL",
    "quantity": 20480.0,
    "cost": 72704.0,
    "price": 3.55
  },
  {
    "date": "2024-09-24",
    "product": "D.Z. MALINA, PAK. 750 G",
    "country": "NL",
    "quantity": 7776.0,
    "cost": 37532.16,
    "price": 4.83
  },
  {
    "date": "2024-09-24",
    "product": "DUBOKO ZAMRZNUTA MALINA 1 KG",
    "country": "NL",
    "quantity": 3200.0,
    "cost": 10240.0,
    "price": 3.2
  },
  {
    "date": "2024-09-24",
    "product": "- D-Z MALINAI.Q.F. ROLEND KARTONSKA KUTIJA 1X10KG, LOT NO:24190.SJ",
    "country": "NL",
    "quantity": 2000.0,
    "cost": 5100.0,
    "price": 2.55
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X1KG",
    "country": "NL",
    "quantity": 3780.0,
    "cost": 15025.5,
    "price": 3.98
  },
  {
    "date": "2024-09-24",
    "product": "D/Z MALINA 750G / D/F RASPBERRY 750G",
    "country": "NL",
    "quantity": 6552.0,
    "cost": 21902.03,
    "price": 3.34
  },
  {
    "date": "2024-09-24",
    "product": "DUBOKO ZAMRZNUTA MALINA 250G, DUBOKO ZAMRZNUTA MALINA 750G",
    "country": "NL",
    "quantity": 5680.0,
    "cost": 19902.73,
    "price": 3.5
  },
  {
    "date": "2024-09-24",
    "product": "D/Z MALINA 750G / D/F RASPBERRY 750G",
    "country": "NL",
    "quantity": 10080.0,
    "cost": 33695.42,
    "price": 3.34
  },
  {
    "date": "2024-09-24",
    "product": "D.Z. MALINA ROLEND 90/10, PAK. 500 G",
    "country": "NL",
    "quantity": 20480.0,
    "cost": 72704.0,
    "price": 3.55
  },
  {
    "date": "2024-09-24",
    "product": "DUBOKO ZAMRZNUTA MALINA 250G, DUBOKO ZAMRZNUTA MALINA 750G",
    "country": "NL",
    "quantity": 4260.0,
    "cost": 14927.05,
    "price": 3.5
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X300GR",
    "country": "NL",
    "quantity": 11520.0,
    "cost": 38592.0,
    "price": 3.35
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 4X2,5KG",
    "country": "NL",
    "quantity": 20000.0,
    "cost": 86000.0,
    "price": 4.3
  },
  {
    "date": "2024-09-24",
    "product": "D/Z MALINA 750G",
    "country": "NL",
    "quantity": 10080.0,
    "cost": 33695.42,
    "price": 3.34
  },
  {
    "date": "2024-09-24",
    "product": "DUBOKO ZAMRZNUTA MALINA 250G, DUBOKO ZAMRZNUTA MALINA 750G",
    "country": "NL",
    "quantity": 5194.0,
    "cost": 18223.44,
    "price": 3.51
  },
  {
    "date": "2024-09-24",
    "product": "DUBOKO ZAMRZNUTA MALINA 250G, DUBOKO ZAMRZNUTA MALINA 750G",
    "country": "NL",
    "quantity": 3736.0,
    "cost": 13185.57,
    "price": 3.53
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR; 10X300GR",
    "country": "NL",
    "quantity": 10816.0,
    "cost": 34441.6,
    "price": 3.18
  },
  {
    "date": "2024-09-24",
    "product": "DUBOKO ZAMRZNUTA MALINA 250G, DUBOKO ZAMRZNUTA MALINA 750G",
    "country": "NL",
    "quantity": 9568.0,
    "cost": 33337.07,
    "price": 3.48
  },
  {
    "date": "2024-09-24",
    "product": "DUBOKO ZAMRZNUTA MALINA 250G, DUBOKO ZAMRZNUTA MALINA 750G",
    "country": "NL",
    "quantity": 2354.0,
    "cost": 8272.08,
    "price": 3.51
  },
  {
    "date": "2024-09-24",
    "product": "DZ MALINA CROPS, PAK 5X1KG",
    "country": "NL",
    "quantity": 7020.0,
    "cost": 32060.34,
    "price": 4.57
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:  10X300GR",
    "country": "NL",
    "quantity": 9216.0,
    "cost": 36345.6,
    "price": 3.94
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 11/1KG",
    "country": "NO",
    "quantity": 20328.0,
    "cost": 87816.96,
    "price": 4.32
  },
  {
    "date": "2024-09-24",
    "product": "D.Z. MALINA, PAK. 400G I 2KG",
    "country": "NO",
    "quantity": 15398.4,
    "cost": 72662.4,
    "price": 4.72
  },
  {
    "date": "2024-09-24",
    "product": "D.Z. MALINA ROLEND, PAK. 300G",
    "country": "NO",
    "quantity": 14288.4,
    "cost": 51581.12,
    "price": 3.61
  },
  {
    "date": "2024-09-24",
    "product": "DZ MALINA ROLEND",
    "country": "NO",
    "quantity": 20328.0,
    "cost": 87816.96,
    "price": 4.32
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 12X750GR",
    "country": "NZ",
    "quantity": 18270.0,
    "cost": 52983.0,
    "price": 2.9
  },
  {
    "date": "2024-09-24",
    "product": "DUBOKO ZAMRZNUTA MALINA 300G",
    "country": "OM",
    "quantity": 2052.0,
    "cost": 8707.32,
    "price": 4.24
  },
  {
    "date": "2024-09-24",
    "product": "UZORAK DUBOKO ZAMRZNUTE MALINE 300G",
    "country": "OM",
    "quantity": 0.9,
    "cost": 1.0,
    "price": 1.11
  },
  {
    "date": "2024-09-24",
    "product": "DZ MALINA 90/10",
    "country": "PL",
    "quantity": 20328.0,
    "cost": 80092.32,
    "price": 3.94
  },
  {
    "date": "2024-09-24",
    "product": "D/Z MALINA   DF RASPBERRY ROLLEND 1X11KG",
    "country": "PL",
    "quantity": 20328.0,
    "cost": 80092.32,
    "price": 3.94
  },
  {
    "date": "2024-09-24",
    "product": "DUBOKO ZAMRZNUTA MALINA  90/10   PAKOVANJE: 1X11KG",
    "country": "PL",
    "quantity": 40656.0,
    "cost": 160184.64,
    "price": 3.94
  },
  {
    "date": "2024-09-24",
    "product": "DZ MALINA 90/10",
    "country": "PL",
    "quantity": 20328.0,
    "cost": 80092.32,
    "price": 3.94
  },
  {
    "date": "2024-09-24",
    "product": "D/Z MALINA 90/10 PO NO:4500718417",
    "country": "PL",
    "quantity": 20328.0,
    "cost": 79737.72,
    "price": 3.92
  },
  {
    "date": "2024-09-24",
    "product": "D\\Z MALINA \"ROLEND\"-SORTE FERTODI  11\\1 -1.848 KUTIJA",
    "country": "PL",
    "quantity": 20328.0,
    "cost": 80092.32,
    "price": 3.94
  },
  {
    "date": "2024-09-24",
    "product": "DZ MALINA 90/10",
    "country": "PL",
    "quantity": 20295.0,
    "cost": 79962.3,
    "price": 3.94
  },
  {
    "date": "2024-09-24",
    "product": "DUBOKO ZAMRZNUTA MALINA  90/10   PAKOVANJE: 1X11KG",
    "country": "PL",
    "quantity": 20328.0,
    "cost": 80092.32,
    "price": 3.94
  },
  {
    "date": "2024-09-24",
    "product": "DUBOKO ZAMRZNUTA MALINA GUSTONA 400G",
    "country": "RO",
    "quantity": 1120.0,
    "cost": 3304.0,
    "price": 2.95
  },
  {
    "date": "2024-09-24",
    "product": "DUBOKO ZAMRZNUTA MALINA GUSTONA 400G",
    "country": "RO",
    "quantity": 1120.0,
    "cost": 3304.0,
    "price": 2.95
  },
  {
    "date": "2024-09-24",
    "product": "DUBOKO ZAMRZNUTA MALINA 2,5KG",
    "country": "RU",
    "quantity": 8400.0,
    "cost": 20496.0,
    "price": 2.44
  },
  {
    "date": "2024-09-24",
    "product": "D/Z MALINA \"WHOLE\"",
    "country": "RU",
    "quantity": 19530.0,
    "cost": 78120.0,
    "price": 4.0
  },
  {
    "date": "2024-09-24",
    "product": "D.Z. MALINA, PAK. 16X350 KG",
    "country": "SA",
    "quantity": 2520.0,
    "cost": 11880.0,
    "price": 4.71
  },
  {
    "date": "2024-09-24",
    "product": "D.Z. MALINA ROLEND, PAK. 10X400 G",
    "country": "SA",
    "quantity": 3640.0,
    "cost": 16361.8,
    "price": 4.5
  },
  {
    "date": "2024-09-24",
    "product": "D.Z. MALINA ROLEND, PAK. 10X400 G",
    "country": "SA",
    "quantity": 2080.0,
    "cost": 9765.6,
    "price": 4.7
  },
  {
    "date": "2024-09-24",
    "product": "D.Z. MALINA, PAK. 16X350 KG",
    "country": "SA",
    "quantity": 2520.0,
    "cost": 11880.0,
    "price": 4.71
  },
  {
    "date": "2024-09-24",
    "product": "D.Z. MALINA, PAK. 16X350 KG",
    "country": "SA",
    "quantity": 4536.0,
    "cost": 21384.0,
    "price": 4.71
  },
  {
    "date": "2024-09-24",
    "product": "D.Z. MALINA, PAK. 16X350 KG",
    "country": "SA",
    "quantity": 4032.0,
    "cost": 19008.0,
    "price": 4.71
  },
  {
    "date": "2024-09-24",
    "product": "D.Z. MALINA, PAK. 10X500 G",
    "country": "SE",
    "quantity": 17820.0,
    "cost": 80546.4,
    "price": 4.52
  },
  {
    "date": "2024-09-24",
    "product": "DUBOKO ZAMRZNUTA MALINA   500G (10 X 1000G=1/5KG)DUBOKO ZAMRZNUTA MALINA",
    "country": "SE",
    "quantity": 11535.0,
    "cost": 36577.5,
    "price": 3.17
  },
  {
    "date": "2024-09-24",
    "product": "DUBOKO ZAMRZNUTA MALINA   500G (10 X 500G=1/5KG)DUBOKO ZAMRZNUTA MALINA",
    "country": "SE",
    "quantity": 10410.0,
    "cost": 32913.0,
    "price": 3.16
  },
  {
    "date": "2024-09-24",
    "product": "DUBOKO ZAMRZNUTA MALINA   500G (10 X 500G=1/5KG)DUBOKO ZAMRZNUTA MALINA",
    "country": "SE",
    "quantity": 16500.0,
    "cost": 52110.0,
    "price": 3.16
  },
  {
    "date": "2024-09-24",
    "product": "D.Z. MALINA, PAK. 10X500G; 10X225G; 4X2,5KG",
    "country": "SE",
    "quantity": 17541.0,
    "cost": 80487.36,
    "price": 4.59
  },
  {
    "date": "2024-09-24",
    "product": "D.Z. MALINA, PAK. 10X225 G",
    "country": "SE",
    "quantity": 9180.0,
    "cost": 44472.0,
    "price": 4.84
  },
  {
    "date": "2024-09-24",
    "product": "DUBOKO ZAMRZNUTA MALINA 1000G (10 X 1KG=1/10KG)DUBOKO ZAMRZNUTA MALINA",
    "country": "SE",
    "quantity": 9510.0,
    "cost": 29853.0,
    "price": 3.14
  },
  {
    "date": "2024-09-24",
    "product": "D.Z. MALINA ROLEND, PAK. 2 X 2,5 KG",
    "country": "SE",
    "quantity": 10800.0,
    "cost": 36374.4,
    "price": 3.37
  },
  {
    "date": "2024-09-24",
    "product": "DUBOKO ZAMRZNUTA MALINA 1000G (10 X 1KG=1/10KG)DUBOKO ZAMRZNUTA MALINA",
    "country": "SE",
    "quantity": 15795.0,
    "cost": 48613.5,
    "price": 3.08
  },
  {
    "date": "2024-09-24",
    "product": "D.Z. MALINA, PAK. 10X500G; 10X225G; 4X2,5KG",
    "country": "SE",
    "quantity": 7457.5,
    "cost": 34049.48,
    "price": 4.57
  },
  {
    "date": "2024-09-24",
    "product": "DUBOKO ZAMRZNUTA MALINA 1000G DUBOKO ZAMRZNUTA MALINA   500G",
    "country": "SE",
    "quantity": 11880.0,
    "cost": 35928.0,
    "price": 3.02
  },
  {
    "date": "2024-09-24",
    "product": "DUBOKO ZAMRZNUTA MALINA 250 G",
    "country": "SE",
    "quantity": 17325.0,
    "cost": 57172.5,
    "price": 3.3
  },
  {
    "date": "2024-09-24",
    "product": "DUBOKO ZAMRZNUTA MALINA 1 KG (10 X 1 KG=1/10KG)",
    "country": "SE",
    "quantity": 12900.0,
    "cost": 38700.0,
    "price": 3.0
  },
  {
    "date": "2024-09-24",
    "product": "D.Z. MALINA ROLEND, PAK. 2 X 2,5 KG",
    "country": "SE",
    "quantity": 8100.0,
    "cost": 27280.8,
    "price": 3.37
  },
  {
    "date": "2024-09-24",
    "product": "DUBOKO ZAMRZNUTA MALINA 250 G",
    "country": "SE",
    "quantity": 17325.0,
    "cost": 57172.5,
    "price": 3.3
  },
  {
    "date": "2024-09-24",
    "product": "D.Z. MALINA ROLEND, PAK. 200G I 400 G",
    "country": "SE",
    "quantity": 14558.4,
    "cost": 52257.74,
    "price": 3.59
  },
  {
    "date": "2024-09-24",
    "product": "DUBOKO ZAMRZNUTA MALINA 1000G",
    "country": "SE",
    "quantity": 3300.0,
    "cost": 9900.0,
    "price": 3.0
  },
  {
    "date": "2024-09-24",
    "product": "DUBOKO ZAMRZNUTA MALINA 1 KG (10 X 1 KG=1/10KG),",
    "country": "SE",
    "quantity": 16800.0,
    "cost": 50400.0,
    "price": 3.0
  },
  {
    "date": "2024-09-24",
    "product": "DUBOKO ZAMRZNUTA MALINA 250 G",
    "country": "SE",
    "quantity": 17325.0,
    "cost": 57172.5,
    "price": 3.3
  },
  {
    "date": "2024-09-24",
    "product": "DUBOKO ZAMRZNUTA MALINA 1000G",
    "country": "SE",
    "quantity": 13950.0,
    "cost": 42795.0,
    "price": 3.07
  },
  {
    "date": "2024-09-24",
    "product": "DUBOKO ZAMRZNUTA MALINA  20X500G",
    "country": "SI",
    "quantity": 3200.0,
    "cost": 14400.0,
    "price": 4.5
  },
  {
    "date": "2024-09-24",
    "product": "DUBOKO ZAMRZNUTA MALINA 10X1 KG",
    "country": "TR",
    "quantity": 20480.0,
    "cost": 70860.8,
    "price": 3.46
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA ROLEND 95/5 (IQF RASPBERRY WHOLE 95/5)  PO FAKTURI 8986/2024",
    "country": "US",
    "quantity": 18000.0,
    "cost": 68400.0,
    "price": 3.8
  },
  {
    "date": "2024-09-24",
    "product": "D/Z MALINA ROLEND FDA",
    "country": "US",
    "quantity": 18000.0,
    "cost": 48600.0,
    "price": 2.7
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA ROLEND 95/5 (IQF RASPBERRY WHOLE 95/5)  U KONTEJNERU BR.",
    "country": "US",
    "quantity": 18000.0,
    "cost": 70200.0,
    "price": 3.9
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA ROLEND 90/10 (IQF RASPBERRY WHOLE 90/10)  U KONTEJNERU BR.",
    "country": "US",
    "quantity": 18000.0,
    "cost": 70200.0,
    "price": 3.9
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA ROLEND 95/5 (IQF RASPBERRY WHOLE 95/5)  U KONTEJNERU BR.",
    "country": "US",
    "quantity": 18000.0,
    "cost": 70200.0,
    "price": 3.9
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA ROLEND 95/5 (IQF RASPBERRY WHOLE 95/5)  U KONTEJNERU BR.",
    "country": "US",
    "quantity": 18000.0,
    "cost": 70200.0,
    "price": 3.9
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA ROLEND 95/5 (IQF RASPBERRY WHOLE 95/5)  U KONTEJNERU BR.",
    "country": "US",
    "quantity": 18000.0,
    "cost": 70200.0,
    "price": 3.9
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA ROLEND 90/10 (IQF RASPBERRY WHOLE 90/10)  U KONTEJNERU BR.",
    "country": "US",
    "quantity": 18000.0,
    "cost": 70200.0,
    "price": 3.9
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA ROLEND 95/5 (IQF RASPBERRY WHOLE 95/5)  U KONTEJNERU BR.",
    "country": "US",
    "quantity": 18000.0,
    "cost": 69300.0,
    "price": 3.85
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA ROLEND 95/5 (IQF RASPBERRY WHOLE 95/5)  U KONTEJNERU BR.",
    "country": "US",
    "quantity": 18000.0,
    "cost": 69300.0,
    "price": 3.85
  },
  {
    "date": "2024-09-24",
    "product": "ZAMRZNUTA MALINA ROLEND 95/5 (IQF RASPBERRY WHOLE 95/5)  U KONTEJNERU BR.",
    "country": "US",
    "quantity": 18000.0,
    "cost": 69300.0,
    "price": 3.85
  },
  {
    "date": "10/2/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 300G",
    "country": "AE",
    "quantity": 1368.9,
    "cost": 5805.88,
    "price": 4.24
  },
  {
    "date": "10/7/2024",
    "product": "ZAMRZNUTA MALINA ROLEND,PAKOVANJE: 10X1KG",
    "country": "AE",
    "quantity": 3000.0,
    "cost": 15905.12,
    "price": 5.3
  },
  {
    "date": "10/1/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 250G SPAR",
    "country": "AT",
    "quantity": 5760.0,
    "cost": 28800.0,
    "price": 5.0
  },
  {
    "date": "10/1/2024",
    "product": "DZ MALINA (S-BUDGET), PAK. 500G",
    "country": "AT",
    "quantity": 16038.0,
    "cost": 65146.36,
    "price": 4.06
  },
  {
    "date": "10/12/2024",
    "product": "DZ MALINA (S-BUDGET), PAK. 500G",
    "country": "AT",
    "quantity": 8748.0,
    "cost": 35534.38,
    "price": 4.06
  },
  {
    "date": "10/14/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 6X500GR",
    "country": "AT",
    "quantity": 11880.0,
    "cost": 35127.2,
    "price": 2.96
  },
  {
    "date": "10/15/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 250G",
    "country": "AT",
    "quantity": 5280.0,
    "cost": 26400.0,
    "price": 5.0
  },
  {
    "date": "10/16/2024",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 20X500GR",
    "country": "AT",
    "quantity": 17820.0,
    "cost": 72349.2,
    "price": 4.06
  },
  {
    "date": "10/19/2024",
    "product": "DZ MALINA (S-BUDGET), PAK. 500G",
    "country": "AT",
    "quantity": 16038.0,
    "cost": 65146.36,
    "price": 4.06
  },
  {
    "date": "10/23/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 250G",
    "country": "AT",
    "quantity": 1440.0,
    "cost": 7200.0,
    "price": 5.0
  },
  {
    "date": "10/29/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 250G",
    "country": "AT",
    "quantity": 4800.0,
    "cost": 24000.0,
    "price": 5.0
  },
  {
    "date": "10/1/2024",
    "product": "D.Z. MALINA, PAK. 20X500 G",
    "country": "AU",
    "quantity": 17460.0,
    "cost": 68443.2,
    "price": 3.92
  },
  {
    "date": "10/1/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE 6X1KG",
    "country": "AU",
    "quantity": 720.0,
    "cost": 3888.0,
    "price": 5.4
  },
  {
    "date": "10/10/2024",
    "product": "D.Z. MALINA, PAK. 8X300 G",
    "country": "AU",
    "quantity": 14774.4,
    "cost": 68454.72,
    "price": 4.63
  },
  {
    "date": "10/21/2024",
    "product": "DZ MALINA ROLEND",
    "country": "AU",
    "quantity": 20000.0,
    "cost": 79000.0,
    "price": 3.95
  },
  {
    "date": "10/25/2024",
    "product": "D.Z. MALINA, PAK. 8X300 G",
    "country": "AU",
    "quantity": 14774.4,
    "cost": 68454.72,
    "price": 4.63
  },
  {
    "date": "10/23/2024",
    "product": "DZ MALINA 300G",
    "country": "BA",
    "quantity": 429.0,
    "cost": 2645.5,
    "price": 6.17
  },
  {
    "date": "10/23/2024",
    "product": "DZ MALINA ROLEND",
    "country": "BA",
    "quantity": 5376.0,
    "cost": 20428.8,
    "price": 3.8
  },
  {
    "date": "10/1/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "BE",
    "quantity": 20790.0,
    "cost": 83783.7,
    "price": 4.03
  },
  {
    "date": "10/3/2024",
    "product": "D\\Z MALINA \"ROLEND 500G\"",
    "country": "BE",
    "quantity": 16335.0,
    "cost": 69603.44,
    "price": 4.26
  },
  {
    "date": "10/3/2024",
    "product": "DZ MALINA (W&B THIRIET), PAK. 450G",
    "country": "BE",
    "quantity": 6075.0,
    "cost": 24998.63,
    "price": 4.12
  },
  {
    "date": "10/4/2024",
    "product": "ZAMRZNUTA MALINA ROLEND,PAKOVANJE:8X500 GR",
    "country": "BE",
    "quantity": 11616.0,
    "cost": 53433.6,
    "price": 4.6
  },
  {
    "date": "10/4/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 1X10KG",
    "country": "BE",
    "quantity": 7560.0,
    "cost": 31147.2,
    "price": 4.12
  },
  {
    "date": "10/5/2024",
    "product": "D/Z MALINA PO NO.4500717745",
    "country": "BE",
    "quantity": 16335.0,
    "cost": 67300.2,
    "price": 4.12
  },
  {
    "date": "10/5/2024",
    "product": "DZ MALINA (COLES), PAK. 500G",
    "country": "BE",
    "quantity": 18018.0,
    "cost": 88504.42,
    "price": 4.91
  },
  {
    "date": "10/5/2024",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 6X750GR; 10X250GR",
    "country": "BE",
    "quantity": 15288.0,
    "cost": 49636.32,
    "price": 3.25
  },
  {
    "date": "10/5/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X500GR",
    "country": "BE",
    "quantity": 2970.0,
    "cost": 12177.0,
    "price": 4.1
  },
  {
    "date": "10/7/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 300G",
    "country": "BE",
    "quantity": 11428.2,
    "cost": 51579.28,
    "price": 4.51
  },
  {
    "date": "10/7/2024",
    "product": "DZ MALINA (SYSTEME U), PAK.1KG",
    "country": "BE",
    "quantity": 19800.0,
    "cost": 53460.0,
    "price": 2.7
  },
  {
    "date": "10/7/2024",
    "product": "DZ MALINA ROLEND 90/10",
    "country": "BE",
    "quantity": 16335.0,
    "cost": 66973.5,
    "price": 4.1
  },
  {
    "date": "10/7/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG; 12X300GR",
    "country": "BE",
    "quantity": 13500.0,
    "cost": 55225.8,
    "price": 4.09
  },
  {
    "date": "10/8/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 300G",
    "country": "BE",
    "quantity": 6724.2,
    "cost": 30348.56,
    "price": 4.51
  },
  {
    "date": "10/10/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 6X750GR",
    "country": "BE",
    "quantity": 14701.5,
    "cost": 60276.15,
    "price": 4.1
  },
  {
    "date": "10/11/2024",
    "product": "-D/Z MALINA GREENS,PAK.6X1KG1.296 KUT.L4275A80D / BBE 02/04/2027 D/Z",
    "country": "BE",
    "quantity": 14688.0,
    "cost": 58017.6,
    "price": 3.95
  },
  {
    "date": "10/11/2024",
    "product": "D\\Z MALINA \"ROLEND 500G\"",
    "country": "BE",
    "quantity": 16335.0,
    "cost": 69603.44,
    "price": 4.26
  },
  {
    "date": "10/12/2024",
    "product": "D/Z MALINA ROLEND PAK.4X2,5 KG",
    "country": "BE",
    "quantity": 7680.0,
    "cost": 31104.0,
    "price": 4.05
  },
  {
    "date": "10/12/2024",
    "product": "DZ MALINA (COLES), PAK. 500G",
    "country": "BE",
    "quantity": 18018.0,
    "cost": 88504.42,
    "price": 4.91
  },
  {
    "date": "10/12/2024",
    "product": "DZ MALINA (THIRIET), PAK. 450G",
    "country": "BE",
    "quantity": 7290.0,
    "cost": 28474.74,
    "price": 3.91
  },
  {
    "date": "10/12/2024",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 10X250GR",
    "country": "BE",
    "quantity": 12000.0,
    "cost": 40080.0,
    "price": 3.34
  },
  {
    "date": "10/12/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "BE",
    "quantity": 4480.0,
    "cost": 18592.0,
    "price": 4.15
  },
  {
    "date": "10/14/2024",
    "product": "DZ MALINA (SYSTEME U, AUCHAN), PAK. 750G, 600G",
    "country": "BE",
    "quantity": 13834.8,
    "cost": 36960.95,
    "price": 2.67
  },
  {
    "date": "10/14/2024",
    "product": "DZ MALINA ROLEND 90/10",
    "country": "BE",
    "quantity": 16335.0,
    "cost": 66973.5,
    "price": 4.1
  },
  {
    "date": "10/14/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "BE",
    "quantity": 20790.0,
    "cost": 82536.3,
    "price": 3.97
  },
  {
    "date": "10/14/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 5X1KG",
    "country": "BE",
    "quantity": 16500.0,
    "cost": 56595.0,
    "price": 3.43
  },
  {
    "date": "10/16/2024",
    "product": "-D/Z MALINA BIDFOOD, PAKOVANJE 5 X 1 KG,PAKOVANA U 2600",
    "country": "BE",
    "quantity": 13000.0,
    "cost": 48750.0,
    "price": 3.75
  },
  {
    "date": "10/18/2024",
    "product": "DZ MALINA (COLES), PAK. 500G",
    "country": "BE",
    "quantity": 18018.0,
    "cost": 88504.42,
    "price": 4.91
  },
  {
    "date": "10/18/2024",
    "product": "DZ MALINA (SYSTEME U), PAK.1KG",
    "country": "BE",
    "quantity": 19800.0,
    "cost": 53460.0,
    "price": 2.7
  },
  {
    "date": "10/21/2024",
    "product": "DZ MALINA (CROP'S,THIRIET), PAK. 1KG, 450G",
    "country": "BE",
    "quantity": 8415.0,
    "cost": 35732.34,
    "price": 4.25
  },
  {
    "date": "10/21/2024",
    "product": "DZ MALINA (WHOLE), PAK.2,5KG",
    "country": "BE",
    "quantity": 20480.0,
    "cost": 92078.08,
    "price": 4.5
  },
  {
    "date": "10/24/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 12X300GR; 4X2,5KG; 1X10KG",
    "country": "BE",
    "quantity": 8460.0,
    "cost": 35254.8,
    "price": 4.17
  },
  {
    "date": "10/24/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 5X1KG",
    "country": "BE",
    "quantity": 16500.0,
    "cost": 56595.0,
    "price": 3.43
  },
  {
    "date": "10/25/2024",
    "product": "DZ MALINA (WHOLE), PAK.2,5KG",
    "country": "BE",
    "quantity": 20480.0,
    "cost": 92078.08,
    "price": 4.5
  },
  {
    "date": "10/25/2024",
    "product": "ZAMRZNUTA MALINA 95/5, 4X2,5KG (IQF RASPBERRY 95/5, 4X2,5KG) PO FAKTURI",
    "country": "BE",
    "quantity": 20480.0,
    "cost": 79872.0,
    "price": 3.9
  },
  {
    "date": "10/25/2024",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 6X750GR",
    "country": "BE",
    "quantity": 9801.0,
    "cost": 30775.14,
    "price": 3.14
  },
  {
    "date": "10/25/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 6X750GR",
    "country": "BE",
    "quantity": 14701.5,
    "cost": 60276.15,
    "price": 4.1
  },
  {
    "date": "10/26/2024",
    "product": "DZ MALINA (COLES), PAK. 500G",
    "country": "BE",
    "quantity": 18018.0,
    "cost": 88504.42,
    "price": 4.91
  },
  {
    "date": "10/26/2024",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 4X2,5KG",
    "country": "BE",
    "quantity": 20480.0,
    "cost": 91136.0,
    "price": 4.45
  },
  {
    "date": "10/26/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 6X1KG",
    "country": "BE",
    "quantity": 8748.0,
    "cost": 36479.16,
    "price": 4.17
  },
  {
    "date": "10/26/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:20X500GR",
    "country": "BE",
    "quantity": 17820.0,
    "cost": 72705.6,
    "price": 4.08
  },
  {
    "date": "10/28/2024",
    "product": "ZAMRZNUTA MALINA ROLEND 90/10, 6X750G (IQF RASPBERRY WHOLE 90/10,",
    "country": "BE",
    "quantity": 14701.5,
    "cost": 59100.03,
    "price": 4.02
  },
  {
    "date": "10/29/2024",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 5X1KG",
    "country": "BE",
    "quantity": 5200.0,
    "cost": 16988.4,
    "price": 3.27
  },
  {
    "date": "10/31/2024",
    "product": "D/Z MALINA PO NO.4500717748",
    "country": "BE",
    "quantity": 16335.0,
    "cost": 67300.2,
    "price": 4.12
  },
  {
    "date": "10/10/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA- UZORAK",
    "country": "CA",
    "quantity": 1.8,
    "cost": 8.1,
    "price": 4.5
  },
  {
    "date": "10/19/2024",
    "product": "DZ MALINA ROLEND",
    "country": "CA",
    "quantity": 20400.0,
    "cost": 55080.0,
    "price": 2.7
  },
  {
    "date": "10/18/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 300G",
    "country": "CH",
    "quantity": 3360.0,
    "cost": 14784.0,
    "price": 4.4
  },
  {
    "date": "10/21/2024",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 14X500GR",
    "country": "CH",
    "quantity": 12936.0,
    "cost": 52270.5,
    "price": 4.04
  },
  {
    "date": "10/24/2024",
    "product": "DZ MALINA ROLEND/IQF RASPBERRIES 4X2.5KG",
    "country": "CH",
    "quantity": 20790.0,
    "cost": 87318.0,
    "price": 4.2
  },
  {
    "date": "10/24/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 2X2,5; 4X2,5 KG",
    "country": "CH",
    "quantity": 19350.0,
    "cost": 79767.0,
    "price": 4.12
  },
  {
    "date": "10/25/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 300G",
    "country": "CH",
    "quantity": 13860.0,
    "cost": 61215.0,
    "price": 4.42
  },
  {
    "date": "10/25/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 300G DUO PACK",
    "country": "CH",
    "quantity": 3780.0,
    "cost": 16695.0,
    "price": 4.42
  },
  {
    "date": "10/28/2024",
    "product": "ZAMRZNUTA ORGANSKA MALINA, PAKOVANJE: 10X0,3KG",
    "country": "CH",
    "quantity": 10599.0,
    "cost": 71764.46,
    "price": 6.77
  },
  {
    "date": "10/1/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 16X500GR",
    "country": "DE",
    "quantity": 14784.0,
    "cost": 59519.32,
    "price": 4.03
  },
  {
    "date": "10/4/2024",
    "product": "D/Z MALINA ROLEND",
    "country": "DE",
    "quantity": 18480.0,
    "cost": 68006.4,
    "price": 3.68
  },
  {
    "date": "10/4/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA",
    "country": "DE",
    "quantity": 22441.0,
    "cost": 106530.6,
    "price": 4.75
  },
  {
    "date": "10/4/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 14X500GR",
    "country": "DE",
    "quantity": 14784.0,
    "cost": 60119.55,
    "price": 4.07
  },
  {
    "date": "10/5/2024",
    "product": "D/Z MALINA- DEEP FROZEN RASPBERRY ROLLEND 4X2,5KG,10X1KG",
    "country": "DE",
    "quantity": 12600.0,
    "cost": 50274.0,
    "price": 3.99
  },
  {
    "date": "10/5/2024",
    "product": "TK- HIMBEEREN BESTE ERNTE 20X500G",
    "country": "DE",
    "quantity": 40320.0,
    "cost": 162892.8,
    "price": 4.04
  },
  {
    "date": "10/5/2024",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 6X500GR I 10X500GR",
    "country": "DE",
    "quantity": 12375.0,
    "cost": 48881.25,
    "price": 3.95
  },
  {
    "date": "10/5/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X500GR",
    "country": "DE",
    "quantity": 16335.0,
    "cost": 49858.4,
    "price": 3.05
  },
  {
    "date": "10/5/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 12X750GR",
    "country": "DE",
    "quantity": 16632.0,
    "cost": 67559.6,
    "price": 4.06
  },
  {
    "date": "10/5/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 18X500GR",
    "country": "DE",
    "quantity": 18711.0,
    "cost": 69673.39,
    "price": 3.72
  },
  {
    "date": "10/5/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "DE",
    "quantity": 20250.0,
    "cost": 81810.0,
    "price": 4.04
  },
  {
    "date": "10/5/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 6X500GR",
    "country": "DE",
    "quantity": 13068.0,
    "cost": 38619.92,
    "price": 2.96
  },
  {
    "date": "10/5/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:20X500GR",
    "country": "DE",
    "quantity": 40320.0,
    "cost": 142932.8,
    "price": 3.54
  },
  {
    "date": "10/7/2024",
    "product": "TK- HIMBEEREN GUT&GUNSTIG 20X500G",
    "country": "DE",
    "quantity": 20160.0,
    "cost": 81446.4,
    "price": 4.04
  },
  {
    "date": "10/7/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 12X750GR",
    "country": "DE",
    "quantity": 16632.0,
    "cost": 49330.93,
    "price": 2.97
  },
  {
    "date": "10/7/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 6X500GR",
    "country": "DE",
    "quantity": 13068.0,
    "cost": 38619.92,
    "price": 2.96
  },
  {
    "date": "10/7/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:10X300GR",
    "country": "DE",
    "quantity": 14850.0,
    "cost": 47319.05,
    "price": 3.19
  },
  {
    "date": "10/8/2024",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 10X500GR",
    "country": "DE",
    "quantity": 12870.0,
    "cost": 50836.5,
    "price": 3.95
  },
  {
    "date": "10/8/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 12X750GR",
    "country": "DE",
    "quantity": 16632.0,
    "cost": 49330.93,
    "price": 2.97
  },
  {
    "date": "10/8/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 14X500GR",
    "country": "DE",
    "quantity": 14784.0,
    "cost": 59032.51,
    "price": 3.99
  },
  {
    "date": "10/8/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "DE",
    "quantity": 20250.0,
    "cost": 81810.0,
    "price": 4.04
  },
  {
    "date": "10/9/2024",
    "product": "TK-HIMBEEREN ALL SEASONS 14X500,TK- HIMBEEREN FRESHONA DE/AT",
    "country": "DE",
    "quantity": 20350.0,
    "cost": 81822.0,
    "price": 4.02
  },
  {
    "date": "10/10/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X500GR",
    "country": "DE",
    "quantity": 16335.0,
    "cost": 49858.4,
    "price": 3.05
  },
  {
    "date": "10/10/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "DE",
    "quantity": 20290.0,
    "cost": 61881.6,
    "price": 3.05
  },
  {
    "date": "10/12/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA",
    "country": "DE",
    "quantity": 13810.0,
    "cost": 66384.4,
    "price": 4.81
  },
  {
    "date": "10/12/2024",
    "product": "TK- HIMBEEREN BESTE ERNTE 20X500G",
    "country": "DE",
    "quantity": 20160.0,
    "cost": 81446.4,
    "price": 4.04
  },
  {
    "date": "10/12/2024",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 10X500GR",
    "country": "DE",
    "quantity": 25740.0,
    "cost": 101673.0,
    "price": 3.95
  },
  {
    "date": "10/12/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X500GR",
    "country": "DE",
    "quantity": 16335.0,
    "cost": 49858.4,
    "price": 3.05
  },
  {
    "date": "10/12/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 14X500GR",
    "country": "DE",
    "quantity": 14784.0,
    "cost": 59032.51,
    "price": 3.99
  },
  {
    "date": "10/12/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 16X500GR",
    "country": "DE",
    "quantity": 14784.0,
    "cost": 43848.28,
    "price": 2.97
  },
  {
    "date": "10/12/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:14X500GR",
    "country": "DE",
    "quantity": 18480.0,
    "cost": 72811.2,
    "price": 3.94
  },
  {
    "date": "10/12/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:20X500GR",
    "country": "DE",
    "quantity": 60480.0,
    "cost": 204419.2,
    "price": 3.38
  },
  {
    "date": "10/14/2024",
    "product": "TK- HIMBEEREN FRESHONA DE/AT 20X500G",
    "country": "DE",
    "quantity": 20250.0,
    "cost": 81810.0,
    "price": 4.04
  },
  {
    "date": "10/15/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X500GR; 24X350GR",
    "country": "DE",
    "quantity": 18531.0,
    "cost": 71829.18,
    "price": 3.88
  },
  {
    "date": "10/15/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 14X500GR; 20X500GR",
    "country": "DE",
    "quantity": 19760.0,
    "cost": 58294.4,
    "price": 2.95
  },
  {
    "date": "10/15/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "DE",
    "quantity": 4480.0,
    "cost": 18099.2,
    "price": 4.04
  },
  {
    "date": "10/15/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:14X500GR",
    "country": "DE",
    "quantity": 18480.0,
    "cost": 72811.2,
    "price": 3.94
  },
  {
    "date": "10/17/2024",
    "product": "D/Z MALINE \"IQF RASPBERRY \"",
    "country": "DE",
    "quantity": 20160.0,
    "cost": 81081.0,
    "price": 4.02
  },
  {
    "date": "10/18/2024",
    "product": "D/Z MALINA ROLEND",
    "country": "DE",
    "quantity": 18480.0,
    "cost": 68006.4,
    "price": 3.68
  },
  {
    "date": "10/19/2024",
    "product": "D/Z MALINA - DF RASPBERRY ROLLEND 12X750GR",
    "country": "DE",
    "quantity": 18711.0,
    "cost": 78211.98,
    "price": 4.18
  },
  {
    "date": "10/19/2024",
    "product": "TK- HIMBEEREN FRESHONA DE/AT 20X500G",
    "country": "DE",
    "quantity": 20250.0,
    "cost": 81810.0,
    "price": 4.04
  },
  {
    "date": "10/19/2024",
    "product": "TK- HIMBEEREN GUT&GUNSTIG 20X500G",
    "country": "DE",
    "quantity": 20160.0,
    "cost": 81446.4,
    "price": 4.04
  },
  {
    "date": "10/19/2024",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 6X500GR I 10X500GR",
    "country": "DE",
    "quantity": 13860.0,
    "cost": 54747.0,
    "price": 3.95
  },
  {
    "date": "10/19/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X500GR",
    "country": "DE",
    "quantity": 16335.0,
    "cost": 64359.9,
    "price": 3.94
  },
  {
    "date": "10/19/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 14X500GR",
    "country": "DE",
    "quantity": 14784.0,
    "cost": 59032.51,
    "price": 3.99
  },
  {
    "date": "10/19/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "DE",
    "quantity": 31490.0,
    "cost": 126067.6,
    "price": 4.0
  },
  {
    "date": "10/19/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 6X500GR",
    "country": "DE",
    "quantity": 13068.0,
    "cost": 51487.92,
    "price": 3.94
  },
  {
    "date": "10/19/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:20X500GR",
    "country": "DE",
    "quantity": 40320.0,
    "cost": 162892.8,
    "price": 4.04
  },
  {
    "date": "10/21/2024",
    "product": "TK- HIMBEEREN BESTE ERNTE 20X500G",
    "country": "DE",
    "quantity": 20160.0,
    "cost": 81446.4,
    "price": 4.04
  },
  {
    "date": "10/21/2024",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 6X500GR I 10X500GR",
    "country": "DE",
    "quantity": 13500.0,
    "cost": 53325.0,
    "price": 3.95
  },
  {
    "date": "10/21/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "DE",
    "quantity": 20250.0,
    "cost": 81810.0,
    "price": 4.04
  },
  {
    "date": "10/22/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR, 12X750GR",
    "country": "DE",
    "quantity": 19616.0,
    "cost": 78118.4,
    "price": 3.98
  },
  {
    "date": "10/22/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:14X500GR",
    "country": "DE",
    "quantity": 18480.0,
    "cost": 72811.2,
    "price": 3.94
  },
  {
    "date": "10/23/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 300GR , 500GR",
    "country": "DE",
    "quantity": 11606.0,
    "cost": 56462.0,
    "price": 4.86
  },
  {
    "date": "10/25/2024",
    "product": "DZ MALINA ROLEND",
    "country": "DE",
    "quantity": 18711.0,
    "cost": 64814.9,
    "price": 3.46
  },
  {
    "date": "10/26/2024",
    "product": "D/Z MALINE \" RASPBARRIS IQF \" 10X1KG I 4X2,50KG",
    "country": "DE",
    "quantity": 20790.0,
    "cost": 78639.75,
    "price": 3.78
  },
  {
    "date": "10/26/2024",
    "product": "TK- HIMBEEREN BESTE ERNTE 20X500G",
    "country": "DE",
    "quantity": 20160.0,
    "cost": 81446.4,
    "price": 4.04
  },
  {
    "date": "10/26/2024",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 6X500GR I 10X500GR",
    "country": "DE",
    "quantity": 25875.0,
    "cost": 102206.25,
    "price": 3.95
  },
  {
    "date": "10/26/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X500GR",
    "country": "DE",
    "quantity": 16335.0,
    "cost": 64359.9,
    "price": 3.94
  },
  {
    "date": "10/26/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "DE",
    "quantity": 20250.0,
    "cost": 81810.0,
    "price": 4.04
  },
  {
    "date": "10/26/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 6X500GR",
    "country": "DE",
    "quantity": 13068.0,
    "cost": 51487.92,
    "price": 3.94
  },
  {
    "date": "10/26/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:14X500GR",
    "country": "DE",
    "quantity": 18480.0,
    "cost": 72811.2,
    "price": 3.94
  },
  {
    "date": "10/26/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:20X500GR",
    "country": "DE",
    "quantity": 40600.0,
    "cost": 164024.0,
    "price": 4.04
  },
  {
    "date": "10/28/2024",
    "product": "TK- HIMBEEREN FRESHONA DE/AT 20X500G",
    "country": "DE",
    "quantity": 20250.0,
    "cost": 81810.0,
    "price": 4.04
  },
  {
    "date": "10/28/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 14X500GR; 20X500GR",
    "country": "DE",
    "quantity": 18880.0,
    "cost": 75379.2,
    "price": 3.99
  },
  {
    "date": "10/28/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:14X500GR",
    "country": "DE",
    "quantity": 18480.0,
    "cost": 72811.2,
    "price": 3.94
  },
  {
    "date": "10/28/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:20X500GR",
    "country": "DE",
    "quantity": 20160.0,
    "cost": 81446.4,
    "price": 4.04
  },
  {
    "date": "10/31/2024",
    "product": "DUBOKO SMRZNUTA MALINA 300,500GR",
    "country": "DE",
    "quantity": 17170.0,
    "cost": 82243.6,
    "price": 4.79
  },
  {
    "date": "10/7/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "DK",
    "quantity": 20790.0,
    "cost": 84407.4,
    "price": 4.06
  },
  {
    "date": "10/8/2024",
    "product": "D.Z. MALINA ROLEND, PAK. 200 GR",
    "country": "DK",
    "quantity": 7344.0,
    "cost": 27209.52,
    "price": 3.71
  },
  {
    "date": "10/3/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 1/5 KG (10X500G) DUBOKO ZAMZNUTA MALINA",
    "country": "FI",
    "quantity": 7968.0,
    "cost": 34411.2,
    "price": 4.32
  },
  {
    "date": "10/11/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 1/5 KG (10X500G) DUBOKO ZAMZNUTA MALINA",
    "country": "FI",
    "quantity": 5280.0,
    "cost": 22718.4,
    "price": 4.3
  },
  {
    "date": "10/21/2024",
    "product": "D.Z. MALINA ROLEND, PAK. 200 I 400 G",
    "country": "FI",
    "quantity": 10152.0,
    "cost": 37305.36,
    "price": 3.67
  },
  {
    "date": "10/1/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 15X1KG",
    "country": "FR",
    "quantity": 20880.0,
    "cost": 75168.0,
    "price": 3.6
  },
  {
    "date": "10/1/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 6X0,5KG",
    "country": "FR",
    "quantity": 3.0,
    "cost": 10.8,
    "price": 3.6
  },
  {
    "date": "10/3/2024",
    "product": "ZAMRZNUT MALINA(IQF RASPBERRY WHOLE, 5X1KG)",
    "country": "FR",
    "quantity": 17820.0,
    "cost": 68197.14,
    "price": 3.83
  },
  {
    "date": "10/4/2024",
    "product": "ZAMRZNUTA MALINA -DF RASPBERRIES WHOLE (5X1)",
    "country": "FR",
    "quantity": 17280.0,
    "cost": 63936.0,
    "price": 3.7
  },
  {
    "date": "10/7/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 15/1KG",
    "country": "FR",
    "quantity": 20880.0,
    "cost": 69948.0,
    "price": 3.35
  },
  {
    "date": "10/7/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 6X0,5KG",
    "country": "FR",
    "quantity": 3.0,
    "cost": 10.05,
    "price": 3.35
  },
  {
    "date": "10/8/2024",
    "product": "D.Z. MALINA, PAK. 500 G",
    "country": "FR",
    "quantity": 4950.0,
    "cost": 15642.0,
    "price": 3.16
  },
  {
    "date": "10/8/2024",
    "product": "ZAMRZNUTA MALINA - DF RASPBERRIES WHOLE (4X2,5)",
    "country": "FR",
    "quantity": 18480.0,
    "cost": 66528.0,
    "price": 3.6
  },
  {
    "date": "10/11/2024",
    "product": "D\\Z MALINA ROLEND 5X1KG- VILAMET,LOT: RD233323A,RD242211 DF",
    "country": "FR",
    "quantity": 18000.0,
    "cost": 72540.0,
    "price": 4.03
  },
  {
    "date": "10/11/2024",
    "product": "DZ MALINA ROLEND",
    "country": "FR",
    "quantity": 17820.0,
    "cost": 70389.0,
    "price": 3.95
  },
  {
    "date": "10/11/2024",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 4X2,5KG; 16X250GR",
    "country": "FR",
    "quantity": 15072.0,
    "cost": 69984.0,
    "price": 4.64
  },
  {
    "date": "10/11/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 6X0,5KG",
    "country": "FR",
    "quantity": 3.0,
    "cost": 10.8,
    "price": 3.6
  },
  {
    "date": "10/12/2024",
    "product": "DZ MALINA ROLEND",
    "country": "FR",
    "quantity": 15840.0,
    "cost": 50688.0,
    "price": 3.2
  },
  {
    "date": "10/12/2024",
    "product": "ZAMRZNUTA MALINA - DF RASPBERRIES WHOLE (5X1)",
    "country": "FR",
    "quantity": 15840.0,
    "cost": 44352.0,
    "price": 2.8
  },
  {
    "date": "10/15/2024",
    "product": "D.Z. MALINA, PAK. 500 G",
    "country": "FR",
    "quantity": 3150.0,
    "cost": 9954.0,
    "price": 3.16
  },
  {
    "date": "10/15/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 12X0,50KG",
    "country": "FR",
    "quantity": 11880.0,
    "cost": 82566.0,
    "price": 6.95
  },
  {
    "date": "10/15/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 6X0,5KG; 1X0,50KG",
    "country": "FR",
    "quantity": 3.5,
    "cost": 24.33,
    "price": 6.95
  },
  {
    "date": "10/17/2024",
    "product": "D\\Z MALINA ROLEND 5X1KG- VILAMET,LOT:RD242211A,RD242212 DF",
    "country": "FR",
    "quantity": 18000.0,
    "cost": 72540.0,
    "price": 4.03
  },
  {
    "date": "10/17/2024",
    "product": "SMRZNUTA MALINA U PAKOVANJIMA 5X1KG,2X2,5KG",
    "country": "FR",
    "quantity": 17235.0,
    "cost": 71709.75,
    "price": 4.16
  },
  {
    "date": "10/19/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 15/1KG",
    "country": "FR",
    "quantity": 20880.0,
    "cost": 69948.0,
    "price": 3.35
  },
  {
    "date": "10/19/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 6X0,5KG",
    "country": "FR",
    "quantity": 3.0,
    "cost": 10.05,
    "price": 3.35
  },
  {
    "date": "10/21/2024",
    "product": "D\\Z MALINA - FERTODI \"ROLEND\",PAK. 9\\1- 1.848 KUTIJA",
    "country": "FR",
    "quantity": 16632.0,
    "cost": 72681.84,
    "price": 4.37
  },
  {
    "date": "10/21/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 6X0,5KG",
    "country": "FR",
    "quantity": 3.0,
    "cost": 10.8,
    "price": 3.6
  },
  {
    "date": "10/22/2024",
    "product": "SMRZNUTA MALINA / DEEP FROZEN RASPBERRRY, - PAKOVANO U 3564",
    "country": "FR",
    "quantity": 17820.0,
    "cost": 73953.0,
    "price": 4.15
  },
  {
    "date": "10/22/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 6X0,5KG",
    "country": "FR",
    "quantity": 3.0,
    "cost": 10.05,
    "price": 3.35
  },
  {
    "date": "10/25/2024",
    "product": "D\\Z MALINA \"ROLEND 500G\"",
    "country": "FR",
    "quantity": 16335.0,
    "cost": 70240.5,
    "price": 4.3
  },
  {
    "date": "10/25/2024",
    "product": "DZ MALINA ROLEND",
    "country": "FR",
    "quantity": 17820.0,
    "cost": 71280.0,
    "price": 4.0
  },
  {
    "date": "10/25/2024",
    "product": "ZAMRZNUTA MALINA -DF RASPBERRIES WHOLE (5X1)",
    "country": "FR",
    "quantity": 15840.0,
    "cost": 44352.0,
    "price": 2.8
  },
  {
    "date": "10/25/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 6X0,5KG",
    "country": "FR",
    "quantity": 3.0,
    "cost": 10.8,
    "price": 3.6
  },
  {
    "date": "10/29/2024",
    "product": "D.Z. MALINA, PAK. 500 G",
    "country": "FR",
    "quantity": 8550.0,
    "cost": 39843.0,
    "price": 4.66
  },
  {
    "date": "10/31/2024",
    "product": "ZAMRZNUTA MALINA VILAMET 90/10, 5X1KG (IQF WHOLE WILAMETTE",
    "country": "FR",
    "quantity": 17820.0,
    "cost": 72246.6,
    "price": 4.05
  },
  {
    "date": "10/1/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 300G (1/4,2 KG)",
    "country": "GB",
    "quantity": 17472.0,
    "cost": 83778.46,
    "price": 4.8
  },
  {
    "date": "10/3/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "GB",
    "quantity": 20790.0,
    "cost": 82536.3,
    "price": 3.97
  },
  {
    "date": "10/4/2024",
    "product": "DZ MALINA IGF RASPBERRY GLOBAL GAP GGN 4063061364753 LOT 2-0329/25",
    "country": "GB",
    "quantity": 20790.0,
    "cost": 83160.0,
    "price": 4.0
  },
  {
    "date": "10/5/2024",
    "product": "DZ MALINA (OCADO), PAK. 300G",
    "country": "GB",
    "quantity": 13248.0,
    "cost": 48580.42,
    "price": 3.67
  },
  {
    "date": "10/5/2024",
    "product": "ZAMRZNUTA MALINA ROLEND 95/5 (IQF RASPBERRY WHOLE 95/5) PO FAKTURI",
    "country": "GB",
    "quantity": 15120.0,
    "cost": 62748.0,
    "price": 4.15
  },
  {
    "date": "10/10/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X1KG",
    "country": "GB",
    "quantity": 17820.0,
    "cost": 46153.8,
    "price": 2.59
  },
  {
    "date": "10/11/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 300G (1/4,2 KG)",
    "country": "GB",
    "quantity": 17472.0,
    "cost": 83209.92,
    "price": 4.76
  },
  {
    "date": "10/11/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "GB",
    "quantity": 20790.0,
    "cost": 82536.3,
    "price": 3.97
  },
  {
    "date": "10/14/2024",
    "product": "ZAMRZNUTA MALINA 95/5 (IQF RASPBERRY WHOLE 95/5)PO FAKTURI 9047/2024",
    "country": "GB",
    "quantity": 18480.0,
    "cost": 54885.6,
    "price": 2.97
  },
  {
    "date": "10/16/2024",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 24X350GR",
    "country": "GB",
    "quantity": 19958.4,
    "cost": 69455.23,
    "price": 3.48
  },
  {
    "date": "10/17/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA PAKOVANJE 300G AD",
    "country": "GB",
    "quantity": 15876.0,
    "cost": 84664.45,
    "price": 5.33
  },
  {
    "date": "10/17/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 300G (1/4,2 KG)",
    "country": "GB",
    "quantity": 17472.0,
    "cost": 83378.7,
    "price": 4.77
  },
  {
    "date": "10/17/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "GB",
    "quantity": 20790.0,
    "cost": 82536.3,
    "price": 3.97
  },
  {
    "date": "10/22/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA",
    "country": "GB",
    "quantity": 12960.0,
    "cost": 70988.09,
    "price": 5.48
  },
  {
    "date": "10/24/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "GB",
    "quantity": 20790.0,
    "cost": 82536.3,
    "price": 3.97
  },
  {
    "date": "10/26/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA PAKOVANJE 300G AD",
    "country": "GB",
    "quantity": 19116.0,
    "cost": 102640.83,
    "price": 5.37
  },
  {
    "date": "10/26/2024",
    "product": "DZ MALINA (DEL MONTE), PAK. 300G",
    "country": "GB",
    "quantity": 6750.0,
    "cost": 30442.5,
    "price": 4.51
  },
  {
    "date": "10/29/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 300G (1/4,2 KG)",
    "country": "GB",
    "quantity": 34944.0,
    "cost": 167436.47,
    "price": 4.79
  },
  {
    "date": "10/30/2024",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 24X350GR",
    "country": "GB",
    "quantity": 19958.4,
    "cost": 85621.54,
    "price": 4.29
  },
  {
    "date": "10/9/2024",
    "product": "D/Z MALINA KVALITET 95/5",
    "country": "GR",
    "quantity": 11200.0,
    "cost": 44800.0,
    "price": 4.0
  },
  {
    "date": "10/7/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 250G SPAR",
    "country": "HR",
    "quantity": 960.0,
    "cost": 4300.8,
    "price": 4.48
  },
  {
    "date": "10/15/2024",
    "product": "BSM MALINA 450G PO FAKTURI",
    "country": "HR",
    "quantity": 504.0,
    "cost": 2385.6,
    "price": 4.73
  },
  {
    "date": "10/16/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA FRIZO 400G (12X400G)",
    "country": "HR",
    "quantity": 2496.0,
    "cost": 10904.51,
    "price": 4.37
  },
  {
    "date": "10/3/2024",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 10X250GR I 10X500GR",
    "country": "HU",
    "quantity": 5280.0,
    "cost": 20712.0,
    "price": 3.92
  },
  {
    "date": "10/15/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "HU",
    "quantity": 14490.0,
    "cost": 59119.2,
    "price": 4.08
  },
  {
    "date": "10/26/2024",
    "product": "D/Z MALINA- DF RASPBERRY ROLLEND 1X11KG",
    "country": "HU",
    "quantity": 11088.0,
    "cost": 42688.8,
    "price": 3.85
  },
  {
    "date": "10/28/2024",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 10KG",
    "country": "HU",
    "quantity": 20160.0,
    "cost": 80640.0,
    "price": 4.0
  },
  {
    "date": "10/17/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA CELA 4X2,5 KG",
    "country": "JP",
    "quantity": 18270.0,
    "cost": 82215.0,
    "price": 4.5
  },
  {
    "date": "10/25/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA IQF CELA 4X2,5 KG",
    "country": "JP",
    "quantity": 6270.0,
    "cost": 29782.5,
    "price": 4.75
  },
  {
    "date": "10/28/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA CELA 4X2,5 KG",
    "country": "JP",
    "quantity": 18270.0,
    "cost": 82215.0,
    "price": 4.5
  },
  {
    "date": "10/3/2024",
    "product": "D.Z. MALINA, PAK. 20X350G",
    "country": "KW",
    "quantity": 3080.0,
    "cost": 15840.0,
    "price": 5.14
  },
  {
    "date": "10/11/2024",
    "product": "DZ MALINA RASBERRIES RIMI FROZEN",
    "country": "LV",
    "quantity": 480.0,
    "cost": 2100.0,
    "price": 4.38
  },
  {
    "date": "10/17/2024",
    "product": "DZ MALINA RASBERRIES RIMI FROZEN",
    "country": "LV",
    "quantity": 3360.0,
    "cost": 14700.0,
    "price": 4.38
  },
  {
    "date": "10/25/2024",
    "product": "DZ MALINA RASBERRIES RIMI FROZEN",
    "country": "LV",
    "quantity": 2880.0,
    "cost": 12600.0,
    "price": 4.38
  },
  {
    "date": "10/16/2024",
    "product": "MALINA 300 GR",
    "country": "ME",
    "quantity": 499.2,
    "cost": 1547.52,
    "price": 3.1
  },
  {
    "date": "10/21/2024",
    "product": "MALINA 300G MONTELLA - PREMA FAKTURI",
    "country": "ME",
    "quantity": 840.0,
    "cost": 6160.0,
    "price": 7.33
  },
  {
    "date": "10/4/2024",
    "product": "D.Z. MALINA ROLEND 90/10, PAK. 500 G",
    "country": "NL",
    "quantity": 20480.0,
    "cost": 79175.68,
    "price": 3.87
  },
  {
    "date": "10/4/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 250G, DUBOKO ZAMRZNUTA MALINA 750G",
    "country": "NL",
    "quantity": 1906.0,
    "cost": 6654.97,
    "price": 3.49
  },
  {
    "date": "10/4/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X300GR",
    "country": "NL",
    "quantity": 7488.0,
    "cost": 25084.8,
    "price": 3.35
  },
  {
    "date": "10/5/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 250G, DUBOKO ZAMRZNUTA MALINA 750G",
    "country": "NL",
    "quantity": 7396.0,
    "cost": 26246.76,
    "price": 3.55
  },
  {
    "date": "10/5/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "NL",
    "quantity": 20480.0,
    "cost": 60416.0,
    "price": 2.95
  },
  {
    "date": "10/7/2024",
    "product": "DZ MALINA ROLEND (PICARD), PAK 8X750G",
    "country": "NL",
    "quantity": 9720.0,
    "cost": 26710.56,
    "price": 2.75
  },
  {
    "date": "10/11/2024",
    "product": "D.Z. MALINA ROLEND 90/10, PAK. 500 G",
    "country": "NL",
    "quantity": 20480.0,
    "cost": 79175.68,
    "price": 3.87
  },
  {
    "date": "10/11/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 250G, DUBOKO ZAMRZNUTA MALINA 750G",
    "country": "NL",
    "quantity": 11884.0,
    "cost": 41546.95,
    "price": 3.5
  },
  {
    "date": "10/14/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X300GR",
    "country": "NL",
    "quantity": 9216.0,
    "cost": 30873.6,
    "price": 3.35
  },
  {
    "date": "10/15/2024",
    "product": "D.Z. MALINA, PAK. 750 G",
    "country": "NL",
    "quantity": 7776.0,
    "cost": 37532.16,
    "price": 4.83
  },
  {
    "date": "10/17/2024",
    "product": "D.Z. MALINA ROLEND, PAK. 20 X 500 G; 10 X 300 G",
    "country": "NL",
    "quantity": 9600.0,
    "cost": 35174.4,
    "price": 3.66
  },
  {
    "date": "10/17/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 250G, DUBOKO ZAMRZNUTA MALINA 750G",
    "country": "NL",
    "quantity": 1906.0,
    "cost": 6654.97,
    "price": 3.49
  },
  {
    "date": "10/17/2024",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 4X2,5KG",
    "country": "NL",
    "quantity": 20000.0,
    "cost": 88000.0,
    "price": 4.4
  },
  {
    "date": "10/18/2024",
    "product": "D.Z. MALINA ROLEND 90/10, PAK. 500 G",
    "country": "NL",
    "quantity": 20480.0,
    "cost": 78970.88,
    "price": 3.86
  },
  {
    "date": "10/18/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA",
    "country": "NL",
    "quantity": 3360.0,
    "cost": 15892.8,
    "price": 4.73
  },
  {
    "date": "10/21/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA",
    "country": "NL",
    "quantity": 17920.0,
    "cost": 80998.4,
    "price": 4.52
  },
  {
    "date": "10/22/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 250G, DUBOKO ZAMRZNUTA MALINA 750G",
    "country": "NL",
    "quantity": 2430.0,
    "cost": 8396.46,
    "price": 3.46
  },
  {
    "date": "10/25/2024",
    "product": "D.Z. MALINA ROLEND 90/10, PAK. 500 G",
    "country": "NL",
    "quantity": 20480.0,
    "cost": 78970.88,
    "price": 3.86
  },
  {
    "date": "10/28/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 250G, DUBOKO ZAMRZNUTA MALINA 750G",
    "country": "NL",
    "quantity": 3364.0,
    "cost": 11692.84,
    "price": 3.48
  },
  {
    "date": "10/30/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 1 KG",
    "country": "NL",
    "quantity": 2000.0,
    "cost": 6400.0,
    "price": 3.2
  },
  {
    "date": "10/5/2024",
    "product": "D.Z. MALINA, PAK. 400G I 2KG",
    "country": "NO",
    "quantity": 14947.2,
    "cost": 69919.2,
    "price": 4.68
  },
  {
    "date": "10/5/2024",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 11/1KG",
    "country": "NO",
    "quantity": 20328.0,
    "cost": 87816.96,
    "price": 4.32
  },
  {
    "date": "10/11/2024",
    "product": "D.Z. MALINA ROLEND, PAK. 400G",
    "country": "NO",
    "quantity": 17107.2,
    "cost": 81259.2,
    "price": 4.75
  },
  {
    "date": "10/15/2024",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 2X2.5KG",
    "country": "NO",
    "quantity": 19530.0,
    "cost": 85736.7,
    "price": 4.39
  },
  {
    "date": "10/16/2024",
    "product": "D.Z. MALINA ROLEND, PAK. 300 G",
    "country": "NO",
    "quantity": 17463.6,
    "cost": 63043.6,
    "price": 3.61
  },
  {
    "date": "10/19/2024",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 11KG/1",
    "country": "NO",
    "quantity": 20328.0,
    "cost": 87816.96,
    "price": 4.32
  },
  {
    "date": "10/21/2024",
    "product": "D.Z. MALINA ROLEND, PAK. 400G",
    "country": "NO",
    "quantity": 17107.2,
    "cost": 81259.2,
    "price": 4.75
  },
  {
    "date": "10/29/2024",
    "product": "D.Z. MALINA, PAK. 400G I 2KG",
    "country": "NO",
    "quantity": 15619.2,
    "cost": 73591.2,
    "price": 4.71
  },
  {
    "date": "10/5/2024",
    "product": "D/Z MALINA DF RASPBERRY ROLLEND 1X11KG",
    "country": "PL",
    "quantity": 20328.0,
    "cost": 80092.32,
    "price": 3.94
  },
  {
    "date": "10/8/2024",
    "product": "D\\Z MALINA \"ROLEND\"-SORTE FERTODI 11\\1 -1.848 KUTIJA",
    "country": "PL",
    "quantity": 20328.0,
    "cost": 80092.32,
    "price": 3.94
  },
  {
    "date": "10/8/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 90/10 PAKOVANJE: 1X11KG",
    "country": "PL",
    "quantity": 20328.0,
    "cost": 80092.32,
    "price": 3.94
  },
  {
    "date": "10/14/2024",
    "product": "D\\Z MALINA ROLEND FERTODI 1X11KG, 1.848 KUTIJA",
    "country": "PL",
    "quantity": 20328.0,
    "cost": 80092.32,
    "price": 3.94
  },
  {
    "date": "10/17/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA",
    "country": "PL",
    "quantity": 20328.0,
    "cost": 80092.32,
    "price": 3.94
  },
  {
    "date": "10/21/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 90/10 PAKOVANJE: 1X11KG",
    "country": "PL",
    "quantity": 20328.0,
    "cost": 80092.32,
    "price": 3.94
  },
  {
    "date": "10/25/2024",
    "product": "D/Z MALINA KONENCIONAL ROLEND",
    "country": "PL",
    "quantity": 20328.0,
    "cost": 56511.84,
    "price": 2.78
  },
  {
    "date": "10/25/2024",
    "product": "D\\Z MALINA \"ROLEND\"-SORTE FERTODI 11\\1 -1.848 KUTIJA",
    "country": "PL",
    "quantity": 20328.0,
    "cost": 80092.32,
    "price": 3.94
  },
  {
    "date": "10/25/2024",
    "product": "ZAMRZNUTA MALINA ROLEND (IQF RASPBERRY 95/5, 4X2,5KG) PO FAKTURI",
    "country": "PL",
    "quantity": 20480.0,
    "cost": 87756.8,
    "price": 4.29
  },
  {
    "date": "10/31/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA",
    "country": "PL",
    "quantity": 20328.0,
    "cost": 80092.32,
    "price": 3.94
  },
  {
    "date": "10/18/2024",
    "product": "D.Z. MALINA, PAK. 20X350 G",
    "country": "QA",
    "quantity": 2800.0,
    "cost": 15200.0,
    "price": 5.43
  },
  {
    "date": "10/18/2024",
    "product": "SMRZNUTO VO\u0106E:MALINA-350GR",
    "country": "QA",
    "quantity": 1050.0,
    "cost": 6615.0,
    "price": 6.3
  },
  {
    "date": "10/15/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA GUSTONA 400G",
    "country": "RO",
    "quantity": 989.0,
    "cost": 3296.5,
    "price": 3.33
  },
  {
    "date": "10/15/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA GUSTONA 400G, 300G",
    "country": "RO",
    "quantity": 989.0,
    "cost": 3296.5,
    "price": 3.33
  },
  {
    "date": "10/15/2024",
    "product": "D.Z. MALINA ROLEND, PAK. 8X300 GR; 4X2,5 KG",
    "country": "RU",
    "quantity": 4933.6,
    "cost": 21501.76,
    "price": 4.36
  },
  {
    "date": "10/21/2024",
    "product": "D/Z MALINA \"WHOLE\" 10\\1KG",
    "country": "RU",
    "quantity": 19530.0,
    "cost": 78120.0,
    "price": 4.0
  },
  {
    "date": "10/10/2024",
    "product": "D.Z. MALINA ROLEND, PAK. 10X400 G",
    "country": "SA",
    "quantity": 2080.0,
    "cost": 9765.6,
    "price": 4.7
  },
  {
    "date": "10/16/2024",
    "product": "RASPBERRY 300 GR - DUBOKO ZAMRZNUTA MALINA",
    "country": "SA",
    "quantity": 2400.0,
    "cost": 14208.0,
    "price": 5.92
  },
  {
    "date": "10/18/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 10X1 KG",
    "country": "SA",
    "quantity": 2160.0,
    "cost": 11280.0,
    "price": 5.22
  },
  {
    "date": "10/24/2024",
    "product": "D.Z. MALINA, PAK. 16X350 KG",
    "country": "SA",
    "quantity": 10080.0,
    "cost": 58752.0,
    "price": 5.83
  },
  {
    "date": "10/25/2024",
    "product": "RASPBERRY 300 GR - DUBOKO ZAMRZNUTA MALINA",
    "country": "SA",
    "quantity": 3600.0,
    "cost": 21312.0,
    "price": 5.92
  },
  {
    "date": "10/29/2024",
    "product": "DZ MALINA",
    "country": "SA",
    "quantity": 5020.0,
    "cost": 25838.6,
    "price": 5.15
  },
  {
    "date": "10/2/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 500G",
    "country": "SE",
    "quantity": 14400.0,
    "cost": 59040.0,
    "price": 4.1
  },
  {
    "date": "10/4/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 1000G,DUBOKO ZAMRZNUTA MALINA 250G",
    "country": "SE",
    "quantity": 12150.0,
    "cost": 49545.0,
    "price": 4.08
  },
  {
    "date": "10/5/2024",
    "product": "D.Z. MALINA ROLEND, PAK. 200G I 400 G",
    "country": "SE",
    "quantity": 10929.6,
    "cost": 40052.02,
    "price": 3.66
  },
  {
    "date": "10/7/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 1000G DUBOKO ZAMRZNUTA MALINA",
    "country": "SE",
    "quantity": 11250.0,
    "cost": 46185.0,
    "price": 4.11
  },
  {
    "date": "10/7/2024",
    "product": "DZ MALINA (ICA), PAK. 250G",
    "country": "SE",
    "quantity": 8190.0,
    "cost": 30040.36,
    "price": 3.67
  },
  {
    "date": "10/9/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 1000G DUBOKO ZAMRZNUTA MALINA 250G",
    "country": "SE",
    "quantity": 12750.0,
    "cost": 51945.0,
    "price": 4.07
  },
  {
    "date": "10/10/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE 2X2,5KG",
    "country": "SE",
    "quantity": 10710.0,
    "cost": 42518.7,
    "price": 3.97
  },
  {
    "date": "10/12/2024",
    "product": "D.Z. MALINA, PAK. 10X225G; 10X500G, 4X2,5KG",
    "country": "SE",
    "quantity": 12470.0,
    "cost": 57838.24,
    "price": 4.64
  },
  {
    "date": "10/14/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 1000G DUBOKO ZAMRZNUTA MALINA",
    "country": "SE",
    "quantity": 12690.0,
    "cost": 51969.0,
    "price": 4.1
  },
  {
    "date": "10/16/2024",
    "product": "D.Z. MALINA, PAK. 10X225G; 10X500G",
    "country": "SE",
    "quantity": 16713.0,
    "cost": 76585.2,
    "price": 4.58
  },
  {
    "date": "10/16/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 1000G DUBOKO ZAMRZNUTA MALINA 250G",
    "country": "SE",
    "quantity": 10395.0,
    "cost": 42808.5,
    "price": 4.12
  },
  {
    "date": "10/16/2024",
    "product": "ZAMRZNUTA KULTIVISANA MALINA - IQF RASPBERRY WHOLE",
    "country": "SE",
    "quantity": 3360.0,
    "cost": 11592.0,
    "price": 3.45
  },
  {
    "date": "10/19/2024",
    "product": "D.Z. MALINA ROLEND, PAK. 2 X 2,5 KG",
    "country": "SE",
    "quantity": 10800.0,
    "cost": 36374.4,
    "price": 3.37
  },
  {
    "date": "10/21/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 1000G",
    "country": "SE",
    "quantity": 8400.0,
    "cost": 33600.0,
    "price": 4.0
  },
  {
    "date": "10/25/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 1000GDUBOKO ZAMRZNUTA MALINA 500G",
    "country": "SE",
    "quantity": 11700.0,
    "cost": 48930.0,
    "price": 4.18
  },
  {
    "date": "10/26/2024",
    "product": "D.Z. MALINA, PAK. 10X225G; 10X500G; 4X2,5KG",
    "country": "SE",
    "quantity": 16674.0,
    "cost": 76213.92,
    "price": 4.57
  },
  {
    "date": "10/28/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 1000G",
    "country": "SE",
    "quantity": 11700.0,
    "cost": 46800.0,
    "price": 4.0
  },
  {
    "date": "10/28/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE 12X750GR",
    "country": "SE",
    "quantity": 5184.0,
    "cost": 21202.56,
    "price": 4.09
  },
  {
    "date": "10/30/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 1000G",
    "country": "SE",
    "quantity": 13500.0,
    "cost": 54000.0,
    "price": 4.0
  },
  {
    "date": "10/31/2024",
    "product": "D.Z. MALINA ROLEND, PAK. 200G I 400 G",
    "country": "SE",
    "quantity": 13089.6,
    "cost": 59110.56,
    "price": 4.52
  },
  {
    "date": "10/31/2024",
    "product": "D.Z. MALINA, PAK. 10X225 G; 10X500 G; 4X2,5 KG",
    "country": "SE",
    "quantity": 15053.0,
    "cost": 68928.4,
    "price": 4.58
  },
  {
    "date": "10/1/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA ROLEND,PAKOVANA U KUTIJE,LOT BR. 25072024-",
    "country": "SI",
    "quantity": 9450.0,
    "cost": 37705.5,
    "price": 3.99
  },
  {
    "date": "10/7/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 250G",
    "country": "SI",
    "quantity": 2880.0,
    "cost": 12902.4,
    "price": 4.48
  },
  {
    "date": "10/21/2024",
    "product": "ZAMRZNUTA MALINA, PAK. 11/1, PO FAK. 288/2024, STAVKA 1.",
    "country": "SI",
    "quantity": 3080.0,
    "cost": 12289.2,
    "price": 3.99
  },
  {
    "date": "10/3/2024",
    "product": "ZAMRZNUTA MALINA ROLEND 95/5 (IQF RASPBERRY WHOLE 95/5) U",
    "country": "US",
    "quantity": 18000.0,
    "cost": 94500.0,
    "price": 5.25
  },
  {
    "date": "10/4/2024",
    "product": "ZAMRZNUTA MALINA ( IQF RASPBERRY 24X340GR ) U KONTEJNERU BROJ:",
    "country": "US",
    "quantity": 14688.0,
    "cost": 63158.4,
    "price": 4.3
  },
  {
    "date": "10/7/2024",
    "product": "D.Z. MALINA, PAK. 1X11 KG",
    "country": "US",
    "quantity": 19800.0,
    "cost": 89053.31,
    "price": 4.5
  },
  {
    "date": "10/10/2024",
    "product": "ZAMRZNUTA MALINA ( IQF RASPBERRY 24X340GR ) U KONTEJNERU BROJ:",
    "country": "US",
    "quantity": 14688.0,
    "cost": 63158.4,
    "price": 4.3
  },
  {
    "date": "10/10/2024",
    "product": "ZAMRZNUTA MALINA ROLEND 2X5LB (IQF RASPBERRY WHOLE 2X5LB) U",
    "country": "US",
    "quantity": 17706.0,
    "cost": 72594.6,
    "price": 4.1
  },
  {
    "date": "10/17/2024",
    "product": "D.Z. MALINA, PAK. 1X11 KG",
    "country": "US",
    "quantity": 19800.0,
    "cost": 89786.08,
    "price": 4.53
  },
  {
    "date": "10/18/2024",
    "product": "ZAMRZNUTA MALINA ROLEND 2X5LB (IQF RASPBERRY WHOLE 2X5LB) U",
    "country": "US",
    "quantity": 17706.0,
    "cost": 72594.6,
    "price": 4.1
  },
  {
    "date": "10/18/2024",
    "product": "ZAMRZNUTA MALINA ROLEND 90/10 (IQF RASPBERRY WHOLE 90/10) U",
    "country": "US",
    "quantity": 18000.0,
    "cost": 70200.0,
    "price": 3.9
  },
  {
    "date": "10/25/2024",
    "product": "ZAMRZNUTA MALINA ( IQF RASPBERRY 24X340GR ) U KONTEJNERU BROJ:",
    "country": "US",
    "quantity": 14688.0,
    "cost": 63158.4,
    "price": 4.3
  },
  {
    "date": "10/28/2024",
    "product": "ZAMRZNUTA MALINA ROLEND 95/5 (IQF RASPBERRY WHOLE 95/5) U",
    "country": "US",
    "quantity": 18000.0,
    "cost": 71100.0,
    "price": 3.95
  },
  {
    "date": "10/28/2024",
    "product": "ZAMRZNUTA MALINA , PAKOVANJE: 2X2,5KG; 10X300GR",
    "country": "UY",
    "quantity": 3036.0,
    "cost": 17766.89,
    "price": 5.85
  },
  {
    "date": "11/4/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 300G",
    "country": "AE",
    "quantity": 8208.0,
    "cost": 34829.28,
    "price": 4.24
  },
  {
    "date": "11/18/2024",
    "product": "D.Z. MALINA, PAK. 14X300 G",
    "country": "AE",
    "quantity": 588.0,
    "cost": 3186.99,
    "price": 5.42
  },
  {
    "date": "11/22/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 300G",
    "country": "AE",
    "quantity": 1368.0,
    "cost": 5804.88,
    "price": 4.24
  },
  {
    "date": "11/29/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 350G",
    "country": "AE",
    "quantity": 1764.0,
    "cost": 8971.2,
    "price": 5.09
  },
  {
    "date": "11/4/2024",
    "product": "DZ MALINA ROLEND",
    "country": "AR",
    "quantity": 20480.0,
    "cost": 65536.0,
    "price": 3.2
  },
  {
    "date": "11/1/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 250G",
    "country": "AT",
    "quantity": 5280.0,
    "cost": 26400.0,
    "price": 5.0
  },
  {
    "date": "11/4/2024",
    "product": "DZ MALINA (S-BUDGET), PAK. 500G",
    "country": "AT",
    "quantity": 3888.0,
    "cost": 15793.06,
    "price": 4.06
  },
  {
    "date": "11/8/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 6X500GR",
    "country": "AT",
    "quantity": 11880.0,
    "cost": 46807.2,
    "price": 3.94
  },
  {
    "date": "11/11/2024",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 20X500GR",
    "country": "AT",
    "quantity": 17820.0,
    "cost": 72349.2,
    "price": 4.06
  },
  {
    "date": "11/12/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X300GR",
    "country": "AT",
    "quantity": 14850.0,
    "cost": 63115.47,
    "price": 4.25
  },
  {
    "date": "11/18/2024",
    "product": "DZ MALINA (S-BUDGET), PAK. 500G",
    "country": "AT",
    "quantity": 6804.0,
    "cost": 27637.85,
    "price": 4.06
  },
  {
    "date": "11/25/2024",
    "product": "DZ MALINA (S-BUDGET), PAK. 500G",
    "country": "AT",
    "quantity": 4860.0,
    "cost": 19741.32,
    "price": 4.06
  },
  {
    "date": "11/5/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 6X1KG",
    "country": "AU",
    "quantity": 2160.0,
    "cost": 11664.0,
    "price": 5.4
  },
  {
    "date": "11/13/2024",
    "product": "DZ MALINA ROLEND",
    "country": "BA",
    "quantity": 2016.0,
    "cost": 7660.8,
    "price": 3.8
  },
  {
    "date": "11/30/2024",
    "product": "DZ MALINA 400G",
    "country": "BA",
    "quantity": 6160.0,
    "cost": 25718.0,
    "price": 4.18
  },
  {
    "date": "11/1/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 300G",
    "country": "BE",
    "quantity": 5380.2,
    "cost": 24282.64,
    "price": 4.51
  },
  {
    "date": "11/1/2024",
    "product": "DZ MALINA (SYSTEME U), PAK.1KG",
    "country": "BE",
    "quantity": 19800.0,
    "cost": 53460.0,
    "price": 2.7
  },
  {
    "date": "11/1/2024",
    "product": "DZ MALINA (THIRIET, CROPS), PAK.1KG",
    "country": "BE",
    "quantity": 19700.0,
    "cost": 83036.9,
    "price": 4.22
  },
  {
    "date": "11/1/2024",
    "product": "ZAMRZNUTA MALINA,U PAKOVANJIMA OD 1KG,LOT 25.07.2024",
    "country": "BE",
    "quantity": 19320.0,
    "cost": 79218.0,
    "price": 4.1
  },
  {
    "date": "11/2/2024",
    "product": "DZ MALINA (COLES), PAK. 500G",
    "country": "BE",
    "quantity": 18018.0,
    "cost": 88504.42,
    "price": 4.91
  },
  {
    "date": "11/2/2024",
    "product": "ZAMRZNUTA MALINA ROLEND 90/10,",
    "country": "BE",
    "quantity": 14701.5,
    "cost": 59100.03,
    "price": 4.02
  },
  {
    "date": "11/2/2024",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 10X250GR",
    "country": "BE",
    "quantity": 5280.0,
    "cost": 17635.2,
    "price": 3.34
  },
  {
    "date": "11/4/2024",
    "product": "D\\Z MALINA \"ROLEND 500G\"",
    "country": "BE",
    "quantity": 16335.0,
    "cost": 69603.44,
    "price": 4.26
  },
  {
    "date": "11/4/2024",
    "product": "DZ MALINA (SYSTEME U), PAK. 750G",
    "country": "BE",
    "quantity": 5940.0,
    "cost": 19471.32,
    "price": 3.28
  },
  {
    "date": "11/7/2024",
    "product": "DZ MALINA (AUCHAN), PAK. 600G",
    "country": "BE",
    "quantity": 6739.2,
    "cost": 21632.83,
    "price": 3.21
  },
  {
    "date": "11/8/2024",
    "product": "DZ MALINA (COLES), PAK. 500G",
    "country": "BE",
    "quantity": 18018.0,
    "cost": 88504.42,
    "price": 4.91
  },
  {
    "date": "11/8/2024",
    "product": "DZ MALINA (SYSTEME U), PAK.1KG",
    "country": "BE",
    "quantity": 19800.0,
    "cost": 53460.0,
    "price": 2.7
  },
  {
    "date": "11/8/2024",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 4X2,5KG",
    "country": "BE",
    "quantity": 20480.0,
    "cost": 91136.0,
    "price": 4.45
  },
  {
    "date": "11/8/2024",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 5X1KG",
    "country": "BE",
    "quantity": 13200.0,
    "cost": 43124.4,
    "price": 3.27
  },
  {
    "date": "11/8/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:20X500GR",
    "country": "BE",
    "quantity": 17820.0,
    "cost": 72705.6,
    "price": 4.08
  },
  {
    "date": "11/9/2024",
    "product": "DZ MALINA ROLEND 90/10",
    "country": "BE",
    "quantity": 16335.0,
    "cost": 66973.5,
    "price": 4.1
  },
  {
    "date": "11/9/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "BE",
    "quantity": 18480.0,
    "cost": 74289.6,
    "price": 4.02
  },
  {
    "date": "11/12/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 300G",
    "country": "BE",
    "quantity": 6724.2,
    "cost": 30348.56,
    "price": 4.51
  },
  {
    "date": "11/12/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "BE",
    "quantity": 20790.0,
    "cost": 83783.7,
    "price": 4.03
  },
  {
    "date": "11/15/2024",
    "product": "ZAMRZNUTA MALINA ROLEND 90/10,",
    "country": "BE",
    "quantity": 14701.5,
    "cost": 59100.03,
    "price": 4.02
  },
  {
    "date": "11/15/2024",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 5X1KG;10X250GR",
    "country": "BE",
    "quantity": 10720.0,
    "cost": 35512.8,
    "price": 3.31
  },
  {
    "date": "11/15/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 5X1KG",
    "country": "BE",
    "quantity": 16500.0,
    "cost": 56595.0,
    "price": 3.43
  },
  {
    "date": "11/16/2024",
    "product": "DZ MALINA (CROPS, WHOLE), PAK. 1KG, 2,5KG",
    "country": "BE",
    "quantity": 11800.0,
    "cost": 53538.8,
    "price": 4.54
  },
  {
    "date": "11/16/2024",
    "product": "DZ MALINA ROLEND 90/10",
    "country": "BE",
    "quantity": 16335.0,
    "cost": 66973.5,
    "price": 4.1
  },
  {
    "date": "11/16/2024",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 5X1KG,6X750GR,10X250GR",
    "country": "BE",
    "quantity": 14877.0,
    "cost": 48266.58,
    "price": 3.24
  },
  {
    "date": "11/18/2024",
    "product": "DZ MALINA (SYSTEME U), PAK.1KG",
    "country": "BE",
    "quantity": 19800.0,
    "cost": 53460.0,
    "price": 2.7
  },
  {
    "date": "11/20/2024",
    "product": "D\\Z MALINA-WILLAMETTE \"ROLEND\" 5\\1 (10X500G) - 3.267 KUTIJA",
    "country": "BE",
    "quantity": 16335.0,
    "cost": 66156.75,
    "price": 4.05
  },
  {
    "date": "11/21/2024",
    "product": "DZ MALINA (THIRIET), PAK. 450G",
    "country": "BE",
    "quantity": 6075.0,
    "cost": 28066.5,
    "price": 4.62
  },
  {
    "date": "11/22/2024",
    "product": "D/Z MALINA PO NO.4500717749",
    "country": "BE",
    "quantity": 16335.0,
    "cost": 67300.2,
    "price": 4.12
  },
  {
    "date": "11/22/2024",
    "product": "DZ MALINA (AUCHAN, SYSTEME U, CROPS), PAK. 600G, 750G, 1KG",
    "country": "BE",
    "quantity": 18079.2,
    "cost": 65868.55,
    "price": 3.64
  },
  {
    "date": "11/22/2024",
    "product": "DZ MALINA (COLES), PAK. 500G",
    "country": "BE",
    "quantity": 18018.0,
    "cost": 88504.42,
    "price": 4.91
  },
  {
    "date": "11/23/2024",
    "product": "ZAMRZNUTA MALINA ROLEND 90/10, 6X750G",
    "country": "BE",
    "quantity": 14701.5,
    "cost": 59100.03,
    "price": 4.02
  },
  {
    "date": "11/23/2024",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 5X1KG,6X750GR",
    "country": "BE",
    "quantity": 14337.5,
    "cost": 45426.15,
    "price": 3.17
  },
  {
    "date": "11/23/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 6X1KG",
    "country": "BE",
    "quantity": 16380.0,
    "cost": 70925.4,
    "price": 4.33
  },
  {
    "date": "11/23/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:20X500GR",
    "country": "BE",
    "quantity": 17820.0,
    "cost": 72705.6,
    "price": 4.08
  },
  {
    "date": "11/25/2024",
    "product": "DZ MALINA (SYSTEME U), PAK.1KG",
    "country": "BE",
    "quantity": 19800.0,
    "cost": 53460.0,
    "price": 2.7
  },
  {
    "date": "11/25/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 6X750GR",
    "country": "BE",
    "quantity": 14701.5,
    "cost": 60276.15,
    "price": 4.1
  },
  {
    "date": "11/26/2024",
    "product": "D.Z. MALINA ROLEND",
    "country": "BE",
    "quantity": 20480.0,
    "cost": 55296.0,
    "price": 2.7
  },
  {
    "date": "11/26/2024",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 6X750GR, 10X250GR",
    "country": "BE",
    "quantity": 15046.5,
    "cost": 48206.01,
    "price": 3.2
  },
  {
    "date": "11/27/2024",
    "product": "D/Z MALINA BIDFOOD,PAKOVANJE 5 X 1 KG,PAK. U 2400 KUTIJA",
    "country": "BE",
    "quantity": 13120.0,
    "cost": 49139.2,
    "price": 3.75
  },
  {
    "date": "11/27/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 5X1KG",
    "country": "BE",
    "quantity": 16500.0,
    "cost": 56595.0,
    "price": 3.43
  },
  {
    "date": "11/28/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 1X10KG I 12X300GR",
    "country": "BE",
    "quantity": 3330.0,
    "cost": 14137.2,
    "price": 4.25
  },
  {
    "date": "11/28/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG I 1X10KG",
    "country": "BE",
    "quantity": 20790.0,
    "cost": 84520.8,
    "price": 4.07
  },
  {
    "date": "11/29/2024",
    "product": "ZAMRZNUTA MALINA 90/10, PO: 4500730734",
    "country": "BE",
    "quantity": 14701.5,
    "cost": 60570.18,
    "price": 4.12
  },
  {
    "date": "11/29/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:4X2,5KG I 12X300GR",
    "country": "BE",
    "quantity": 14580.0,
    "cost": 61903.8,
    "price": 4.25
  },
  {
    "date": "11/30/2024",
    "product": "D/Z MALINA DF RASPBERRY ROLLEND 10X250KG",
    "country": "BE",
    "quantity": 9600.0,
    "cost": 41088.0,
    "price": 4.28
  },
  {
    "date": "11/30/2024",
    "product": "DZ MALINA THIRIET W&B, PAK 5X1KG",
    "country": "BE",
    "quantity": 11700.0,
    "cost": 47677.5,
    "price": 4.08
  },
  {
    "date": "11/30/2024",
    "product": "DZ MALINA (COLES), PAK. 500G",
    "country": "BE",
    "quantity": 18018.0,
    "cost": 88504.42,
    "price": 4.91
  },
  {
    "date": "11/30/2024",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE:5X1KG",
    "country": "BE",
    "quantity": 13200.0,
    "cost": 43124.4,
    "price": 3.27
  },
  {
    "date": "11/15/2024",
    "product": "DZ MALINA ROLEND",
    "country": "CA",
    "quantity": 20400.0,
    "cost": 55080.0,
    "price": 2.7
  },
  {
    "date": "11/1/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 300G",
    "country": "CH",
    "quantity": 9240.0,
    "cost": 40656.0,
    "price": 4.4
  },
  {
    "date": "11/2/2024",
    "product": "DZ MALINA ROLEND 4X2,5KG",
    "country": "CH",
    "quantity": 20480.0,
    "cost": 83148.8,
    "price": 4.06
  },
  {
    "date": "11/4/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 300G",
    "country": "CH",
    "quantity": 2940.0,
    "cost": 12936.0,
    "price": 4.4
  },
  {
    "date": "11/22/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 300G",
    "country": "CH",
    "quantity": 1260.0,
    "cost": 5544.0,
    "price": 4.4
  },
  {
    "date": "11/22/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 500G",
    "country": "CH",
    "quantity": 22032.0,
    "cost": 94296.96,
    "price": 4.28
  },
  {
    "date": "11/25/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:6X0,200KG",
    "country": "CH",
    "quantity": 8294.4,
    "cost": 49351.68,
    "price": 5.95
  },
  {
    "date": "11/29/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 300G ,500G",
    "country": "CH",
    "quantity": 2124.0,
    "cost": 9241.92,
    "price": 4.35
  },
  {
    "date": "11/9/2024",
    "product": "IQF RASPBERRY ROLEND 4X25KG, IQF RASPBERRY BRUH 12KG (DZ MALINA)",
    "country": "CZ",
    "quantity": 20416.0,
    "cost": 79719.68,
    "price": 3.9
  },
  {
    "date": "11/20/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA,PAKOVANA U KUTIJE,LOT BR. 15112024-1",
    "country": "CZ",
    "quantity": 80.0,
    "cost": 332.0,
    "price": 4.15
  },
  {
    "date": "11/1/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "DE",
    "quantity": 9520.0,
    "cost": 34272.0,
    "price": 3.6
  },
  {
    "date": "11/2/2024",
    "product": "TK- HIMBEEREN BESTE ERNTE 20X500G",
    "country": "DE",
    "quantity": 20160.0,
    "cost": 81446.4,
    "price": 4.04
  },
  {
    "date": "11/2/2024",
    "product": "TK- HIMBEEREN GUT&GUNSTIG 20X500G",
    "country": "DE",
    "quantity": 20160.0,
    "cost": 81446.4,
    "price": 4.04
  },
  {
    "date": "11/2/2024",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 6X500GR I 10X500GR",
    "country": "DE",
    "quantity": 10440.0,
    "cost": 41238.0,
    "price": 3.95
  },
  {
    "date": "11/2/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 18X500GR",
    "country": "DE",
    "quantity": 37422.0,
    "cost": 153205.66,
    "price": 4.09
  },
  {
    "date": "11/2/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "DE",
    "quantity": 20250.0,
    "cost": 81810.0,
    "price": 4.04
  },
  {
    "date": "11/2/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 24X350GR",
    "country": "DE",
    "quantity": 19958.4,
    "cost": 80931.31,
    "price": 4.05
  },
  {
    "date": "11/2/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 6X500GR",
    "country": "DE",
    "quantity": 13068.0,
    "cost": 51487.92,
    "price": 3.94
  },
  {
    "date": "11/2/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:14X500GR",
    "country": "DE",
    "quantity": 18480.0,
    "cost": 72811.2,
    "price": 3.94
  },
  {
    "date": "11/4/2024",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 10X500GR",
    "country": "DE",
    "quantity": 12870.0,
    "cost": 50836.5,
    "price": 3.95
  },
  {
    "date": "11/4/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X500GR",
    "country": "DE",
    "quantity": 16335.0,
    "cost": 64359.9,
    "price": 3.94
  },
  {
    "date": "11/4/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X750GR",
    "country": "DE",
    "quantity": 1152.0,
    "cost": 4550.4,
    "price": 3.95
  },
  {
    "date": "11/5/2024",
    "product": "D/Z MALINA \" IQF RASPBERRIES \" 750GR. - KOLETA",
    "country": "DE",
    "quantity": 5670.0,
    "cost": 21631.05,
    "price": 3.82
  },
  {
    "date": "11/5/2024",
    "product": "DUBOKO SMRZNUTA MALINA 500GR",
    "country": "DE",
    "quantity": 18480.0,
    "cost": 87225.6,
    "price": 4.72
  },
  {
    "date": "11/5/2024",
    "product": "TK- HIMBEEREN FRESHONA DE/AT 20X500G",
    "country": "DE",
    "quantity": 20250.0,
    "cost": 81810.0,
    "price": 4.04
  },
  {
    "date": "11/5/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "DE",
    "quantity": 20250.0,
    "cost": 81810.0,
    "price": 4.04
  },
  {
    "date": "11/5/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR, 6X500GR",
    "country": "DE",
    "quantity": 17404.0,
    "cost": 68733.76,
    "price": 3.95
  },
  {
    "date": "11/5/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:20X500GR",
    "country": "DE",
    "quantity": 20160.0,
    "cost": 81446.4,
    "price": 4.04
  },
  {
    "date": "11/7/2024",
    "product": "DUBOKO SMRZNUTA MALINA 500GR , 300GR",
    "country": "DE",
    "quantity": 18218.0,
    "cost": 86229.2,
    "price": 4.73
  },
  {
    "date": "11/8/2024",
    "product": "DUBOKO SMRZNUTA MALINA 500GR , 300GR",
    "country": "DE",
    "quantity": 18349.0,
    "cost": 86727.4,
    "price": 4.73
  },
  {
    "date": "11/8/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:20X500GR",
    "country": "DE",
    "quantity": 20160.0,
    "cost": 79027.2,
    "price": 3.92
  },
  {
    "date": "11/9/2024",
    "product": "TK- HIMBEEREN BESTE ERNTE 20X500G,TK- HIMBEEREN FRESHONA DE/AT",
    "country": "DE",
    "quantity": 20010.0,
    "cost": 80840.4,
    "price": 4.04
  },
  {
    "date": "11/9/2024",
    "product": "TK- HIMBEEREN GUT&GUNSTIG 20X500G",
    "country": "DE",
    "quantity": 20160.0,
    "cost": 81446.4,
    "price": 4.04
  },
  {
    "date": "11/9/2024",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 10X500GR",
    "country": "DE",
    "quantity": 16335.0,
    "cost": 64523.25,
    "price": 3.95
  },
  {
    "date": "11/9/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X300GR; 20X500GR",
    "country": "DE",
    "quantity": 19790.0,
    "cost": 80370.55,
    "price": 4.06
  },
  {
    "date": "11/9/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "DE",
    "quantity": 20250.0,
    "cost": 81810.0,
    "price": 4.04
  },
  {
    "date": "11/11/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "DE",
    "quantity": 5600.0,
    "cost": 20720.0,
    "price": 3.7
  },
  {
    "date": "11/12/2024",
    "product": "TK- HIMBEEREN FRESHONA DE/IT 20X500G",
    "country": "DE",
    "quantity": 20250.0,
    "cost": 81810.0,
    "price": 4.04
  },
  {
    "date": "11/12/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X500GR",
    "country": "DE",
    "quantity": 16335.0,
    "cost": 64359.9,
    "price": 3.94
  },
  {
    "date": "11/12/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR, 10X1000GR",
    "country": "DE",
    "quantity": 19060.0,
    "cost": 76859.6,
    "price": 4.03
  },
  {
    "date": "11/12/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:14X500GR",
    "country": "DE",
    "quantity": 18480.0,
    "cost": 54884.2,
    "price": 2.97
  },
  {
    "date": "11/16/2024",
    "product": "D/Z MALINA \" IQF RASPBERRIES \" 10X1KG",
    "country": "DE",
    "quantity": 6300.0,
    "cost": 23940.0,
    "price": 3.8
  },
  {
    "date": "11/16/2024",
    "product": "DUBOKO SMRZNUTA MALINA 500GR",
    "country": "DE",
    "quantity": 18480.0,
    "cost": 87225.6,
    "price": 4.72
  },
  {
    "date": "11/16/2024",
    "product": "TK- HIMBEEREN FRESHONA DE/AT 20X500G",
    "country": "DE",
    "quantity": 20250.0,
    "cost": 81810.0,
    "price": 4.04
  },
  {
    "date": "11/16/2024",
    "product": "TK- HIMBEEREN FRESHONA ES/PT 20X500G",
    "country": "DE",
    "quantity": 20250.0,
    "cost": 81810.0,
    "price": 4.04
  },
  {
    "date": "11/16/2024",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 10X500GR",
    "country": "DE",
    "quantity": 14850.0,
    "cost": 58657.5,
    "price": 3.95
  },
  {
    "date": "11/16/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X500GR",
    "country": "DE",
    "quantity": 16335.0,
    "cost": 62873.42,
    "price": 3.85
  },
  {
    "date": "11/16/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "DE",
    "quantity": 20250.0,
    "cost": 81658.8,
    "price": 4.03
  },
  {
    "date": "11/16/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:14X500GR",
    "country": "DE",
    "quantity": 18480.0,
    "cost": 72811.2,
    "price": 3.94
  },
  {
    "date": "11/16/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:20X500GR",
    "country": "DE",
    "quantity": 20160.0,
    "cost": 81446.4,
    "price": 4.04
  },
  {
    "date": "11/18/2024",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE:6X500GR I 10X500GR",
    "country": "DE",
    "quantity": 12510.0,
    "cost": 49414.5,
    "price": 3.95
  },
  {
    "date": "11/18/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "DE",
    "quantity": 20250.0,
    "cost": 81810.0,
    "price": 4.04
  },
  {
    "date": "11/18/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:20X500GR",
    "country": "DE",
    "quantity": 20160.0,
    "cost": 81446.4,
    "price": 4.04
  },
  {
    "date": "11/19/2024",
    "product": "TK- HIMBEEREN FRESHONA ES/PT 20X500G,TK- HIMBEEREN FRESHONA DE/AT",
    "country": "DE",
    "quantity": 20250.0,
    "cost": 81810.0,
    "price": 4.04
  },
  {
    "date": "11/19/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 14X500GR",
    "country": "DE",
    "quantity": 14504.0,
    "cost": 57914.47,
    "price": 3.99
  },
  {
    "date": "11/19/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:20X500GR",
    "country": "DE",
    "quantity": 20160.0,
    "cost": 81597.38,
    "price": 4.05
  },
  {
    "date": "11/20/2024",
    "product": "DUBOKO SMRZNUTA MALINA 300GR ,500GR",
    "country": "DE",
    "quantity": 35257.0,
    "cost": 167974.6,
    "price": 4.76
  },
  {
    "date": "11/22/2024",
    "product": "DZ MALINA,IQF RASPBERRY 85 % WHOLE LOT: B6184789 -",
    "country": "DE",
    "quantity": 18480.0,
    "cost": 59136.0,
    "price": 3.2
  },
  {
    "date": "11/23/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA",
    "country": "DE",
    "quantity": 35781.0,
    "cost": 169967.4,
    "price": 4.75
  },
  {
    "date": "11/23/2024",
    "product": "TK- HIMBEEREN GUT&GUNSTIG 20X500G",
    "country": "DE",
    "quantity": 20160.0,
    "cost": 81446.4,
    "price": 4.04
  },
  {
    "date": "11/23/2024",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 6X500GR I 10X500GR",
    "country": "DE",
    "quantity": 12015.0,
    "cost": 47459.25,
    "price": 3.95
  },
  {
    "date": "11/23/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X300GR, 12X750GR, 20X500GR",
    "country": "DE",
    "quantity": 18828.0,
    "cost": 75810.15,
    "price": 4.03
  },
  {
    "date": "11/23/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X500GR",
    "country": "DE",
    "quantity": 16335.0,
    "cost": 64359.9,
    "price": 3.94
  },
  {
    "date": "11/23/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 18X500GR",
    "country": "DE",
    "quantity": 18711.0,
    "cost": 76602.83,
    "price": 4.09
  },
  {
    "date": "11/23/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:14X500GR",
    "country": "DE",
    "quantity": 18480.0,
    "cost": 72811.2,
    "price": 3.94
  },
  {
    "date": "11/25/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 14X500GR",
    "country": "DE",
    "quantity": 14784.0,
    "cost": 59032.51,
    "price": 3.99
  },
  {
    "date": "11/25/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:20X500GR",
    "country": "DE",
    "quantity": 20160.0,
    "cost": 81446.4,
    "price": 4.04
  },
  {
    "date": "11/26/2024",
    "product": "TK- HIMBEEREN BESTE ERNTE 20X500G",
    "country": "DE",
    "quantity": 20160.0,
    "cost": 81446.4,
    "price": 4.04
  },
  {
    "date": "11/26/2024",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 10X500GR",
    "country": "DE",
    "quantity": 10890.0,
    "cost": 43015.5,
    "price": 3.95
  },
  {
    "date": "11/26/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 6X500GR; 18X500GR; 24X350GR",
    "country": "DE",
    "quantity": 18558.0,
    "cost": 75736.55,
    "price": 4.08
  },
  {
    "date": "11/26/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:20X500GR",
    "country": "DE",
    "quantity": 20160.0,
    "cost": 81446.4,
    "price": 4.04
  },
  {
    "date": "11/27/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:14X500GR",
    "country": "DE",
    "quantity": 18480.0,
    "cost": 72811.2,
    "price": 3.94
  },
  {
    "date": "11/30/2024",
    "product": "D/Z MALINA - DEEP FROZEN RASPBERRY ROLLEND 12X750GR",
    "country": "DE",
    "quantity": 18711.0,
    "cost": 78211.98,
    "price": 4.18
  },
  {
    "date": "11/30/2024",
    "product": "D/Z MALINA - DF RASPBERRY ROLLEND 12X750GR",
    "country": "DE",
    "quantity": 18711.0,
    "cost": 78211.98,
    "price": 4.18
  },
  {
    "date": "11/30/2024",
    "product": "D/Z MALINA \" IQF RASPBERRIES \" 4X2.50KG I 70GR.",
    "country": "DE",
    "quantity": 13860.0,
    "cost": 52548.87,
    "price": 3.79
  },
  {
    "date": "11/30/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA",
    "country": "DE",
    "quantity": 54130.0,
    "cost": 256724.8,
    "price": 4.74
  },
  {
    "date": "11/30/2024",
    "product": "DZ MALINA (HERITAGE), PAK. 2,5KG",
    "country": "DE",
    "quantity": 12800.0,
    "cost": 63232.0,
    "price": 4.94
  },
  {
    "date": "11/30/2024",
    "product": "TK- HIMBEEREN REWE 10X500G",
    "country": "DE",
    "quantity": 16335.0,
    "cost": 64359.9,
    "price": 3.94
  },
  {
    "date": "11/30/2024",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 10X500GR",
    "country": "DE",
    "quantity": 14850.0,
    "cost": 58657.5,
    "price": 3.95
  },
  {
    "date": "11/30/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR; 18X500GR",
    "country": "DE",
    "quantity": 20223.0,
    "cost": 81976.48,
    "price": 4.05
  },
  {
    "date": "11/30/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 6X500GR; 12X750GR",
    "country": "DE",
    "quantity": 15408.0,
    "cost": 60782.4,
    "price": 3.94
  },
  {
    "date": "11/30/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:20X500GR; 10X1000GR",
    "country": "DE",
    "quantity": 19840.0,
    "cost": 80019.2,
    "price": 4.03
  },
  {
    "date": "11/4/2024",
    "product": "D.Z. MALINA ROLEND, PAK. 200 GR",
    "country": "DK",
    "quantity": 3240.0,
    "cost": 15066.0,
    "price": 4.65
  },
  {
    "date": "11/20/2024",
    "product": "D.Z. MALINA ROLEND, PAK. 200 GR",
    "country": "DK",
    "quantity": 6480.0,
    "cost": 30132.0,
    "price": 4.65
  },
  {
    "date": "11/9/2024",
    "product": "D.Z. MALINA ROLEND, PAK. 200 I 400 G",
    "country": "FI",
    "quantity": 14428.8,
    "cost": 67305.6,
    "price": 4.66
  },
  {
    "date": "11/21/2024",
    "product": "D/Z MALINA 1/5 KG (10X500G) D/Z MALINA 1/2,4 KG (12X200G)",
    "country": "FI",
    "quantity": 6960.0,
    "cost": 30026.4,
    "price": 4.31
  },
  {
    "date": "11/29/2024",
    "product": "D.Z. MALINA ROLEND, PAK. 200 I 400 G",
    "country": "FI",
    "quantity": 14083.2,
    "cost": 65210.4,
    "price": 4.63
  },
  {
    "date": "11/29/2024",
    "product": "D/Z MALINA 1/5 KG (10X500G) D/Z MALINA 1/2,4 KG (12X200G)",
    "country": "FI",
    "quantity": 6960.0,
    "cost": 30026.4,
    "price": 4.31
  },
  {
    "date": "11/1/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 0,5KG",
    "country": "FR",
    "quantity": 11880.0,
    "cost": 52628.4,
    "price": 4.43
  },
  {
    "date": "11/1/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA WILLAMETTE 4X2,5 KG",
    "country": "FR",
    "quantity": 20790.0,
    "cost": 83160.0,
    "price": 4.0
  },
  {
    "date": "11/1/2024",
    "product": "SMRZNUTA MALINA U PAKOVANJIMA OD 5X1KG,4X2,5KG,8X500G",
    "country": "FR",
    "quantity": 17816.0,
    "cost": 82046.77,
    "price": 4.61
  },
  {
    "date": "11/1/2024",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 5X1KG",
    "country": "FR",
    "quantity": 7020.0,
    "cost": 32642.0,
    "price": 4.65
  },
  {
    "date": "11/4/2024",
    "product": "D\\Z MALINA \"ROLEND 500G\"",
    "country": "FR",
    "quantity": 16335.0,
    "cost": 67300.2,
    "price": 4.12
  },
  {
    "date": "11/4/2024",
    "product": "ZAMRZNUTA MALINA VILAMET 90/10, 5X1KG",
    "country": "FR",
    "quantity": 17820.0,
    "cost": 71458.2,
    "price": 4.01
  },
  {
    "date": "11/5/2024",
    "product": "D/Z MALINA ROLEND PAK.5X1 KG",
    "country": "FR",
    "quantity": 17820.0,
    "cost": 73240.2,
    "price": 4.11
  },
  {
    "date": "11/5/2024",
    "product": "D\\Z MALINA ROLEND 5X1KG- VILAMET DF RASPBERRY IQF 5X1KG",
    "country": "FR",
    "quantity": 18480.0,
    "cost": 90182.4,
    "price": 4.88
  },
  {
    "date": "11/5/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 6X0,5KG",
    "country": "FR",
    "quantity": 3.0,
    "cost": 10.8,
    "price": 3.6
  },
  {
    "date": "11/7/2024",
    "product": "ZAMRZNUT MALINA(IQF RASPBERRY WHOLE 0,500 KG)",
    "country": "FR",
    "quantity": 11100.0,
    "cost": 48840.0,
    "price": 4.4
  },
  {
    "date": "11/8/2024",
    "product": "DZ MALINA,VILAMET 90/10 LOT: NT2416324259 -",
    "country": "FR",
    "quantity": 17820.0,
    "cost": 71101.8,
    "price": 3.99
  },
  {
    "date": "11/8/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 3X0,5KG I 4X0,5KG",
    "country": "FR",
    "quantity": 3.5,
    "cost": 12.18,
    "price": 3.48
  },
  {
    "date": "11/8/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 5X1KG",
    "country": "FR",
    "quantity": 8250.0,
    "cost": 30112.5,
    "price": 3.65
  },
  {
    "date": "11/9/2024",
    "product": "DZ MALINA ROLEND",
    "country": "FR",
    "quantity": 15840.0,
    "cost": 43560.0,
    "price": 2.75
  },
  {
    "date": "11/12/2024",
    "product": "D.Z. MALINA, PAK. 500 G",
    "country": "FR",
    "quantity": 4950.0,
    "cost": 23067.0,
    "price": 4.66
  },
  {
    "date": "11/15/2024",
    "product": "30 PALETA IQF ZAMRZNUTE MALINE VILAMET I MIKER",
    "country": "FR",
    "quantity": 16063.0,
    "cost": 66211.74,
    "price": 4.12
  },
  {
    "date": "11/15/2024",
    "product": "D\\Z MALINA ROLEND 5X1KG - VILAMET,D/Z MALINA ROLEND 20X450G",
    "country": "FR",
    "quantity": 18704.0,
    "cost": 96308.8,
    "price": 5.15
  },
  {
    "date": "11/15/2024",
    "product": "ZAMRZNUTA MALINA -DF RASPBERRIES WHOLE (5X1)",
    "country": "FR",
    "quantity": 17820.0,
    "cost": 65934.0,
    "price": 3.7
  },
  {
    "date": "11/15/2024",
    "product": "ZAMRZNUTA MALINA VILAMET 90/10,",
    "country": "FR",
    "quantity": 17820.0,
    "cost": 71814.6,
    "price": 4.03
  },
  {
    "date": "11/18/2024",
    "product": "ZAMRZNUTA MALINA VILAMET 90/10, 5X1KG 90/10, 5X1KG)",
    "country": "FR",
    "quantity": 17820.0,
    "cost": 71458.2,
    "price": 4.01
  },
  {
    "date": "11/18/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 6X0,50KG",
    "country": "FR",
    "quantity": 6.0,
    "cost": 21.6,
    "price": 3.6
  },
  {
    "date": "11/19/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 6X0,50KG",
    "country": "FR",
    "quantity": 3.0,
    "cost": 10.05,
    "price": 3.35
  },
  {
    "date": "11/23/2024",
    "product": "ZAMRZNUT MALINA(IQF RASPBERRY WHOLE, 5X1KG)",
    "country": "FR",
    "quantity": 17820.0,
    "cost": 68197.14,
    "price": 3.83
  },
  {
    "date": "11/25/2024",
    "product": "D.Z. MALINA, PAK. 500 G",
    "country": "FR",
    "quantity": 7650.0,
    "cost": 35649.0,
    "price": 4.66
  },
  {
    "date": "11/25/2024",
    "product": "DZ MALINA ROLEND",
    "country": "FR",
    "quantity": 4860.0,
    "cost": 17982.0,
    "price": 3.7
  },
  {
    "date": "11/25/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 12X0,5KG; 1X10KG",
    "country": "FR",
    "quantity": 11440.0,
    "cost": 44752.0,
    "price": 3.91
  },
  {
    "date": "11/29/2024",
    "product": "D\\Z MALINA ROLEND 20X450G- VILAMET, IQF 20X450G- WILLAMETTE",
    "country": "FR",
    "quantity": 19008.0,
    "cost": 94089.6,
    "price": 4.95
  },
  {
    "date": "11/29/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 0,5KG",
    "country": "FR",
    "quantity": 10330.0,
    "cost": 45761.9,
    "price": 4.43
  },
  {
    "date": "11/29/2024",
    "product": "DZ MALINA -FRAMBOISE WILL ENTIERE 5X1",
    "country": "FR",
    "quantity": 17820.0,
    "cost": 73774.8,
    "price": 4.14
  },
  {
    "date": "11/29/2024",
    "product": "DZ MALINA,VILAMET 90/10 LOT: NT2416324289",
    "country": "FR",
    "quantity": 17820.0,
    "cost": 71101.8,
    "price": 3.99
  },
  {
    "date": "11/1/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 300G (1/4,2 KG)",
    "country": "GB",
    "quantity": 17472.0,
    "cost": 83718.24,
    "price": 4.79
  },
  {
    "date": "11/5/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 300G (1/4,2 KG)",
    "country": "GB",
    "quantity": 17472.0,
    "cost": 82854.76,
    "price": 4.74
  },
  {
    "date": "11/6/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "GB",
    "quantity": 20790.0,
    "cost": 82536.3,
    "price": 3.97
  },
  {
    "date": "11/7/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "GB",
    "quantity": 20790.0,
    "cost": 82536.3,
    "price": 3.97
  },
  {
    "date": "11/14/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 300G (1/4,2 KG)",
    "country": "GB",
    "quantity": 17472.0,
    "cost": 84050.53,
    "price": 4.81
  },
  {
    "date": "11/14/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "GB",
    "quantity": 20790.0,
    "cost": 82536.3,
    "price": 3.97
  },
  {
    "date": "11/15/2024",
    "product": "DZ MALINA (DEL MONTE), PAK. 300G",
    "country": "GB",
    "quantity": 7425.0,
    "cost": 33486.75,
    "price": 4.51
  },
  {
    "date": "11/15/2024",
    "product": "DZ MALINA ROLEND G.GAP",
    "country": "GB",
    "quantity": 20790.0,
    "cost": 83160.0,
    "price": 4.0
  },
  {
    "date": "11/15/2024",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 24X350GR",
    "country": "GB",
    "quantity": 18748.8,
    "cost": 55871.42,
    "price": 2.98
  },
  {
    "date": "11/15/2024",
    "product": "ZAMRZNUTA MALINA,PAKOVANJE:4X2,5KG",
    "country": "GB",
    "quantity": 20790.0,
    "cost": 83575.8,
    "price": 4.02
  },
  {
    "date": "11/18/2024",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 24X350GR",
    "country": "GB",
    "quantity": 19958.4,
    "cost": 85621.54,
    "price": 4.29
  },
  {
    "date": "11/18/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "GB",
    "quantity": 20790.0,
    "cost": 82536.3,
    "price": 3.97
  },
  {
    "date": "11/19/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 300G (1/4,2 KG)",
    "country": "GB",
    "quantity": 17472.0,
    "cost": 84030.29,
    "price": 4.81
  },
  {
    "date": "11/21/2024",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 24X350GR",
    "country": "GB",
    "quantity": 19958.4,
    "cost": 69455.23,
    "price": 3.48
  },
  {
    "date": "11/22/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "GB",
    "quantity": 41580.0,
    "cost": 165072.6,
    "price": 3.97
  },
  {
    "date": "11/26/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 300G (1/4,2 KG)",
    "country": "GB",
    "quantity": 17472.0,
    "cost": 83899.15,
    "price": 4.8
  },
  {
    "date": "11/27/2024",
    "product": "ZAMRZNUTA MALINA 95/5 (IQF RASPBERRY WHOLE 95/5) PO FAKTURI",
    "country": "GB",
    "quantity": 18480.0,
    "cost": 72996.0,
    "price": 3.95
  },
  {
    "date": "11/27/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "GB",
    "quantity": 20790.0,
    "cost": 82536.3,
    "price": 3.97
  },
  {
    "date": "11/28/2024",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 24X350GR",
    "country": "GB",
    "quantity": 19958.4,
    "cost": 69455.23,
    "price": 3.48
  },
  {
    "date": "11/29/2024",
    "product": "ZAMRZNUTA MALINA ROLEND 95/5 (IQF RASPBERRY WHOLE 95/5)",
    "country": "GB",
    "quantity": 18480.0,
    "cost": 76692.0,
    "price": 4.15
  },
  {
    "date": "11/8/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 250G",
    "country": "HR",
    "quantity": 1440.0,
    "cost": 6451.2,
    "price": 4.48
  },
  {
    "date": "11/19/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 300G I 2,5 KG",
    "country": "HR",
    "quantity": 10348.8,
    "cost": 42792.96,
    "price": 4.14
  },
  {
    "date": "11/1/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "HU",
    "quantity": 12600.0,
    "cost": 51408.0,
    "price": 4.08
  },
  {
    "date": "11/16/2024",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 10KG",
    "country": "HU",
    "quantity": 10080.0,
    "cost": 40320.0,
    "price": 4.0
  },
  {
    "date": "11/19/2024",
    "product": "D/Z MALINA- DF RASPBERRY ROLLEND 1X11KG",
    "country": "HU",
    "quantity": 20328.0,
    "cost": 79279.2,
    "price": 3.9
  },
  {
    "date": "11/4/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA, PAK 4X2,5KG",
    "country": "JP",
    "quantity": 20480.0,
    "cost": 90603.52,
    "price": 4.42
  },
  {
    "date": "11/12/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA CELA 4X2,5 KG",
    "country": "JP",
    "quantity": 18270.0,
    "cost": 82215.0,
    "price": 4.5
  },
  {
    "date": "11/14/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:20X500GR",
    "country": "JP",
    "quantity": 18260.0,
    "cost": 79431.0,
    "price": 4.35
  },
  {
    "date": "11/8/2024",
    "product": "D.Z. MALINA, PAK. 20X350G",
    "country": "KW",
    "quantity": 2310.0,
    "cost": 11880.0,
    "price": 5.14
  },
  {
    "date": "11/30/2024",
    "product": "D.Z. MALINA, PAK. 20X350G",
    "country": "KW",
    "quantity": 2310.0,
    "cost": 11880.0,
    "price": 5.14
  },
  {
    "date": "11/15/2024",
    "product": "DZ MALINA RASBERRIES RIMI FROZEN",
    "country": "LV",
    "quantity": 4320.0,
    "cost": 18900.0,
    "price": 4.38
  },
  {
    "date": "11/4/2024",
    "product": "BSM MALINA 450G PO FAKTURI",
    "country": "ME",
    "quantity": 504.0,
    "cost": 2564.8,
    "price": 5.09
  },
  {
    "date": "11/22/2024",
    "product": "BSM MALINA 450G PO FAKTURI",
    "country": "ME",
    "quantity": 504.0,
    "cost": 2564.8,
    "price": 5.09
  },
  {
    "date": "11/26/2024",
    "product": "MALINA 300 GR - PREMA FAKTURI I SPECIFIKACIJI U PRILOGU",
    "country": "ME",
    "quantity": 1497.6,
    "cost": 4642.56,
    "price": 3.1
  },
  {
    "date": "11/25/2024",
    "product": "MALINA 300 GR FAKTURA: 91822043 STAVKA: 15",
    "country": "MK",
    "quantity": 499.2,
    "cost": 1547.52,
    "price": 3.1
  },
  {
    "date": "11/1/2024",
    "product": "D.Z. MALINA ROLEND 90/10, PAK. 500 G",
    "country": "NL",
    "quantity": 20480.0,
    "cost": 78970.88,
    "price": 3.86
  },
  {
    "date": "11/1/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA",
    "country": "NL",
    "quantity": 15680.0,
    "cost": 70873.6,
    "price": 4.52
  },
  {
    "date": "11/1/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X300GR",
    "country": "NL",
    "quantity": 9792.0,
    "cost": 42105.6,
    "price": 4.3
  },
  {
    "date": "11/8/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 250G, DUBOKO ZAMRZNUTA MALINA 750G",
    "country": "NL",
    "quantity": 1420.0,
    "cost": 4975.68,
    "price": 3.5
  },
  {
    "date": "11/8/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 750G",
    "country": "NL",
    "quantity": 1906.0,
    "cost": 6654.97,
    "price": 3.49
  },
  {
    "date": "11/8/2024",
    "product": "DZ MALINA (CROPS), PAK.1KG",
    "country": "NL",
    "quantity": 17820.0,
    "cost": 81383.94,
    "price": 4.57
  },
  {
    "date": "11/8/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X1KG; 4X2,5KG",
    "country": "NL",
    "quantity": 10880.0,
    "cost": 43392.0,
    "price": 3.99
  },
  {
    "date": "11/12/2024",
    "product": "D.Z. MALINA, PAK. 750 G",
    "country": "NL",
    "quantity": 6318.0,
    "cost": 30494.88,
    "price": 4.83
  },
  {
    "date": "11/12/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA",
    "country": "NL",
    "quantity": 3360.0,
    "cost": 15845.54,
    "price": 4.72
  },
  {
    "date": "11/13/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA",
    "country": "NL",
    "quantity": 10080.0,
    "cost": 47208.0,
    "price": 4.68
  },
  {
    "date": "11/14/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 750G",
    "country": "NL",
    "quantity": 1394.0,
    "cost": 4927.93,
    "price": 3.54
  },
  {
    "date": "11/15/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 250G, DUBOKO ZAMRZNUTA MALINA 750G",
    "country": "NL",
    "quantity": 4184.0,
    "cost": 14802.66,
    "price": 3.54
  },
  {
    "date": "11/15/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "NL",
    "quantity": 20480.0,
    "cost": 60416.0,
    "price": 2.95
  },
  {
    "date": "11/21/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 750G, 250 G",
    "country": "NL",
    "quantity": 5194.0,
    "cost": 18223.44,
    "price": 3.51
  },
  {
    "date": "11/22/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X300GR",
    "country": "NL",
    "quantity": 8640.0,
    "cost": 37152.0,
    "price": 4.3
  },
  {
    "date": "11/22/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "NL",
    "quantity": 20480.0,
    "cost": 78848.0,
    "price": 3.85
  },
  {
    "date": "11/25/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 750G",
    "country": "NL",
    "quantity": 1792.0,
    "cost": 6468.4,
    "price": 3.61
  },
  {
    "date": "11/25/2024",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 4X2,5KG",
    "country": "NL",
    "quantity": 20000.0,
    "cost": 88000.0,
    "price": 4.4
  },
  {
    "date": "11/27/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA",
    "country": "NL",
    "quantity": 5880.0,
    "cost": 26890.08,
    "price": 4.57
  },
  {
    "date": "11/28/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 250 G",
    "country": "NL",
    "quantity": 2764.0,
    "cost": 9826.98,
    "price": 3.56
  },
  {
    "date": "11/29/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 250G, 750G",
    "country": "NL",
    "quantity": 3364.0,
    "cost": 11692.85,
    "price": 3.48
  },
  {
    "date": "11/29/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 750G",
    "country": "NL",
    "quantity": 3402.0,
    "cost": 11755.04,
    "price": 3.46
  },
  {
    "date": "11/29/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "NL",
    "quantity": 20480.0,
    "cost": 78848.0,
    "price": 3.85
  },
  {
    "date": "11/7/2024",
    "product": "D.Z. MALINA, PAK. 400G I 2KG",
    "country": "NO",
    "quantity": 15158.4,
    "cost": 71582.4,
    "price": 4.72
  },
  {
    "date": "11/14/2024",
    "product": "D.Z. MALINA, PAK. 400G I 2KG",
    "country": "NO",
    "quantity": 15638.4,
    "cost": 73742.4,
    "price": 4.72
  },
  {
    "date": "11/18/2024",
    "product": "D.Z. MALINA ROLEND, PAK. 300 G",
    "country": "NO",
    "quantity": 17463.6,
    "cost": 83825.28,
    "price": 4.8
  },
  {
    "date": "11/22/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA",
    "country": "NZ",
    "quantity": 20590.0,
    "cost": 99861.5,
    "price": 4.85
  },
  {
    "date": "11/1/2024",
    "product": "D\\Z MALINA ROLEND 1X11 KG, 1.848 KUTIJA (\"VILAMET\" 12.725,00 KG.;",
    "country": "PL",
    "quantity": 20328.0,
    "cost": 81108.72,
    "price": 3.99
  },
  {
    "date": "11/1/2024",
    "product": "ZAMRZNUTA MALINA ROLEND 95/5, 4X2.5KG",
    "country": "PL",
    "quantity": 19840.0,
    "cost": 85014.4,
    "price": 4.29
  },
  {
    "date": "11/2/2024",
    "product": "D/Z MALINA DF RASPBERRY ROLLEND 1X11KG",
    "country": "PL",
    "quantity": 20328.0,
    "cost": 81108.72,
    "price": 3.99
  },
  {
    "date": "11/8/2024",
    "product": "D\\Z MALINA \"ROLEND\"-SORTE VILAMET 11\\1 -1.848 KUTIJA",
    "country": "PL",
    "quantity": 20328.0,
    "cost": 83141.52,
    "price": 4.09
  },
  {
    "date": "11/15/2024",
    "product": "D\\Z MALINA \"ROLEND\"-SORTE VILAMET 11\\1 -1.848 KUTIJA",
    "country": "PL",
    "quantity": 20328.0,
    "cost": 82125.12,
    "price": 4.04
  },
  {
    "date": "11/15/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 90/10 PAKOVANJE: 1X11KG",
    "country": "PL",
    "quantity": 20328.0,
    "cost": 81108.72,
    "price": 3.99
  },
  {
    "date": "11/19/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 90/10 PAKOVANJE: 1X11KG",
    "country": "PL",
    "quantity": 20328.0,
    "cost": 81108.72,
    "price": 3.99
  },
  {
    "date": "11/22/2024",
    "product": "D\\Z MALINA \"ROLEND\"-SORTE VILAMET -4.066KG,SORTE MIKER -16.262KG",
    "country": "PL",
    "quantity": 20328.0,
    "cost": 82125.12,
    "price": 4.04
  },
  {
    "date": "11/12/2024",
    "product": "DZ MALINA, PAK. 450 G,PROIZVOĐAČ:ARETOL DOO,NOVI SAD",
    "country": "RO",
    "quantity": 576.0,
    "cost": 1702.4,
    "price": 2.96
  },
  {
    "date": "11/5/2024",
    "product": "IQF RASPBERRY ROLEND WILLAMETTE 10/1",
    "country": "RU",
    "quantity": 19530.0,
    "cost": 78120.33,
    "price": 4.0
  },
  {
    "date": "11/7/2024",
    "product": "SMRZNUTA MALINA ,90/10,4X2,5KG(IQF RASPBERRY,90/10,4X2,5KG)",
    "country": "RU",
    "quantity": 2000.0,
    "cost": 8000.0,
    "price": 4.0
  },
  {
    "date": "11/9/2024",
    "product": "SMRZNUTE MALINE",
    "country": "RU",
    "quantity": 3200.0,
    "cost": 15356.4,
    "price": 4.8
  },
  {
    "date": "11/25/2024",
    "product": "D.Z. MALINA, PAK. 16X350 KG",
    "country": "SA",
    "quantity": 10080.0,
    "cost": 58752.0,
    "price": 5.83
  },
  {
    "date": "11/28/2024",
    "product": "D.Z. MALINA, PAK. 16X350GKONTEJNER: CRSU 6097086",
    "country": "SA",
    "quantity": 10080.0,
    "cost": 46479.6,
    "price": 4.61
  },
  {
    "date": "11/29/2024",
    "product": "D.Z. MALINA, PAK. 16X350 KG",
    "country": "SA",
    "quantity": 10080.0,
    "cost": 58752.0,
    "price": 5.83
  },
  {
    "date": "11/1/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 1000G DUBOKO ZAMRZNUTA MALINA 500G",
    "country": "SE",
    "quantity": 11400.0,
    "cost": 45840.0,
    "price": 4.02
  },
  {
    "date": "11/2/2024",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 1X10KG",
    "country": "SE",
    "quantity": 20480.0,
    "cost": 91340.8,
    "price": 4.46
  },
  {
    "date": "11/4/2024",
    "product": "D/Z MALINA 1000G D/Z MALINA 500GDUBOKO ZAMRZNUTA MALINA 250G",
    "country": "SE",
    "quantity": 17100.0,
    "cost": 70770.0,
    "price": 4.14
  },
  {
    "date": "11/5/2024",
    "product": "D.Z. MALINA ROLEND, PAK. 2 X 2,5 KG",
    "country": "SE",
    "quantity": 8100.0,
    "cost": 36223.2,
    "price": 4.47
  },
  {
    "date": "11/5/2024",
    "product": "D.Z. MALINA, PAK. 10X225 G; 10X500 G",
    "country": "SE",
    "quantity": 14472.0,
    "cost": 66604.8,
    "price": 4.6
  },
  {
    "date": "11/6/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 1000GDUBOKO ZAMRZNUTA MALINA 500G",
    "country": "SE",
    "quantity": 8100.0,
    "cost": 33000.0,
    "price": 4.07
  },
  {
    "date": "11/6/2024",
    "product": "ZAMRZNUTA KULTIVISANA MALINA - IQF RASPBERRY WHOLE",
    "country": "SE",
    "quantity": 3920.0,
    "cost": 13680.8,
    "price": 3.49
  },
  {
    "date": "11/8/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 1000GDUBOKO ZAMRZNUTA MALINA 500G",
    "country": "SE",
    "quantity": 6300.0,
    "cost": 25440.0,
    "price": 4.04
  },
  {
    "date": "11/9/2024",
    "product": "D.Z. MALINA, PAK. 10X225 G; 10X500 G",
    "country": "SE",
    "quantity": 15876.0,
    "cost": 72355.2,
    "price": 4.56
  },
  {
    "date": "11/13/2024",
    "product": "D/Z MALINA 1000G D/Z MALINA 500G DUBOKO ZAMRZNUTA MALINA 250G",
    "country": "SE",
    "quantity": 16350.0,
    "cost": 66945.0,
    "price": 4.09
  },
  {
    "date": "11/15/2024",
    "product": "D.Z. MALINA ROLEND, PAK. 200G I 400 G",
    "country": "SE",
    "quantity": 13608.0,
    "cost": 61786.8,
    "price": 4.54
  },
  {
    "date": "11/15/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 1000GDUBOKO ZAMRZNUTA MALINA 250G",
    "country": "SE",
    "quantity": 8850.0,
    "cost": 36345.0,
    "price": 4.11
  },
  {
    "date": "11/15/2024",
    "product": "D/Z MALINA 1000G D/Z MALINA 500G DUBOKO ZAMRZNUTA MALINA 250G",
    "country": "SE",
    "quantity": 12930.0,
    "cost": 53193.0,
    "price": 4.11
  },
  {
    "date": "11/18/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 1000GDUBOKO ZAMRZNUTA MALINA 250G",
    "country": "SE",
    "quantity": 8550.0,
    "cost": 35145.0,
    "price": 4.11
  },
  {
    "date": "11/20/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 1000GDUBOKO ZAMRZNUTA MALINA 250G",
    "country": "SE",
    "quantity": 11850.0,
    "cost": 48345.0,
    "price": 4.08
  },
  {
    "date": "11/21/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA",
    "country": "SE",
    "quantity": 14400.0,
    "cost": 60192.0,
    "price": 4.18
  },
  {
    "date": "11/25/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 1000G",
    "country": "SE",
    "quantity": 13200.0,
    "cost": 52800.0,
    "price": 4.0
  },
  {
    "date": "11/25/2024",
    "product": "DZ MALINA (ICA), PAK. 250G",
    "country": "SE",
    "quantity": 9450.0,
    "cost": 44830.8,
    "price": 4.74
  },
  {
    "date": "11/25/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 12X750GR",
    "country": "SE",
    "quantity": 1152.0,
    "cost": 4711.68,
    "price": 4.09
  },
  {
    "date": "11/27/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 1000G, 500 G, 250G",
    "country": "SE",
    "quantity": 9510.0,
    "cost": 39321.0,
    "price": 4.13
  },
  {
    "date": "11/28/2024",
    "product": "D.Z. MALINA ROLEND, PAK. 2 X 2,5 KG",
    "country": "SE",
    "quantity": 10800.0,
    "cost": 48297.6,
    "price": 4.47
  },
  {
    "date": "11/28/2024",
    "product": "D.Z. MALINA, PAK. 10X225 G; 10X500 G",
    "country": "SE",
    "quantity": 14485.5,
    "cost": 66144.6,
    "price": 4.57
  },
  {
    "date": "11/30/2024",
    "product": "D.Z. MALINA ROLEND, PAK. 200G I 400 G",
    "country": "SE",
    "quantity": 12484.8,
    "cost": 56879.28,
    "price": 4.56
  },
  {
    "date": "11/9/2024",
    "product": "DZ MALINA (2,5KG)",
    "country": "SI",
    "quantity": 640.0,
    "cost": 2336.0,
    "price": 3.65
  },
  {
    "date": "11/4/2024",
    "product": "ZAMRZNUTA MALINA ( IQF RASPBERRY 24X340GR",
    "country": "US",
    "quantity": 14688.0,
    "cost": 63158.4,
    "price": 4.3
  },
  {
    "date": "11/5/2024",
    "product": "ZAMRZNUTA MALINA ROLEND 95/5 (IQF RASPBERRY WHOLE 95/5)",
    "country": "US",
    "quantity": 18000.0,
    "cost": 69300.0,
    "price": 3.85
  },
  {
    "date": "11/14/2024",
    "product": "ZAMRZNUTA MALINA ROLEND 95/5 (IQF RASPBERRY WHOLE 95/5",
    "country": "US",
    "quantity": 18000.0,
    "cost": 69300.0,
    "price": 3.85
  },
  {
    "date": "11/22/2024",
    "product": "ZAMRZNUTA MALINA ROLEND 95/5 (IQF RASPBERRY WHOLE 95/5",
    "country": "US",
    "quantity": 18000.0,
    "cost": 69300.0,
    "price": 3.85
  },
  {
    "date": "11/22/2024",
    "product": "ZAMRZNUTA MALINA ROLEND 95/5 (IQF RASPBERRY WHOLE 95/5",
    "country": "US",
    "quantity": 18000.0,
    "cost": 69300.0,
    "price": 3.85
  },
  {
    "date": "11/22/2024",
    "product": "ZAMRZNUTA MALINA ROLEND 95/5 (IQF RASPBERRY WHOLE 95/5",
    "country": "US",
    "quantity": 18000.0,
    "cost": 71100.0,
    "price": 3.95
  },
  {
    "date": "11/29/2024",
    "product": "ZAMRZNUTA MALINA ROLEND 95/5 (IQF RASPBERRY WHOLE 95/5",
    "country": "US",
    "quantity": 18000.0,
    "cost": 69300.0,
    "price": 3.85
  },
  {
    "date": "12/3/2024",
    "product": "D.Z. MALINA, PAK. 12X350 G",
    "country": "United Arab Emirates",
    "quantity": 4.2,
    "cost": 12.6,
    "price": 3.0
  },
  {
    "date": "12/13/2024",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 30X300GR",
    "country": "United Arab Emirates",
    "quantity": 2430.0,
    "cost": 11323.8,
    "price": 4.66
  },
  {
    "date": "12/19/2024",
    "product": "RASPBERRY 400 GR - DUBOKO ZAMRZNUTA MALINA",
    "country": "United Arab Emirates",
    "quantity": 936.0,
    "cost": 7768.8,
    "price": 8.3
  },
  {
    "date": "12/23/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 300G",
    "country": "United Arab Emirates",
    "quantity": 4104.0,
    "cost": 17414.64,
    "price": 4.24
  },
  {
    "date": "12/23/2024",
    "product": "UZORAK DUBOKO ZAMRZNUTE MALINE 300G",
    "country": "United Arab Emirates",
    "quantity": 0.9,
    "cost": 1.0,
    "price": 1.11
  },
  {
    "date": "12/3/2024",
    "product": "DZ MALINA (S-BUDGET), PAK. 500G",
    "country": "Austria",
    "quantity": 10692.0,
    "cost": 43430.9,
    "price": 4.06
  },
  {
    "date": "12/3/2024",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 20X500GR",
    "country": "Austria",
    "quantity": 17820.0,
    "cost": 77695.2,
    "price": 4.36
  },
  {
    "date": "12/4/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 250G",
    "country": "Austria",
    "quantity": 5280.0,
    "cost": 26400.0,
    "price": 5.0
  },
  {
    "date": "12/6/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "Austria",
    "quantity": 20000.0,
    "cost": 77000.0,
    "price": 3.85
  },
  {
    "date": "12/9/2024",
    "product": "DZ MALINA (S-BUDGET), PAK. 500G",
    "country": "Austria",
    "quantity": 8262.0,
    "cost": 33560.24,
    "price": 4.06
  },
  {
    "date": "12/16/2024",
    "product": "DZ MALINA (S-BUDGET), PAK. 500G",
    "country": "Austria",
    "quantity": 5346.0,
    "cost": 21715.45,
    "price": 4.06
  },
  {
    "date": "12/20/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 250G SPAR",
    "country": "Austria",
    "quantity": 1920.0,
    "cost": 9600.0,
    "price": 5.0
  },
  {
    "date": "12/21/2024",
    "product": "DZ MALINA (S-BUDGET), PAK. 500G",
    "country": "Austria",
    "quantity": 9720.0,
    "cost": 39482.64,
    "price": 4.06
  },
  {
    "date": "12/30/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 6X500GR",
    "country": "Austria",
    "quantity": 11880.0,
    "cost": 46807.2,
    "price": 3.94
  },
  {
    "date": "12/5/2024",
    "product": "D.Z. MALINA, PAK. 20X500 G",
    "country": "Australia",
    "quantity": 17460.0,
    "cost": 68443.2,
    "price": 3.92
  },
  {
    "date": "12/5/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA CELA 10X1KG, DUBOKO ZAMRZNUTA MALINA CELA",
    "country": "Australia",
    "quantity": 7000.0,
    "cost": 30301.15,
    "price": 4.33
  },
  {
    "date": "12/11/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE 6X1KG",
    "country": "Australia",
    "quantity": 1440.0,
    "cost": 7776.0,
    "price": 5.4
  },
  {
    "date": "12/19/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA CELA 10X1KG, DUBOKO ZAMRZNUTA MALINA CELA",
    "country": "Australia",
    "quantity": 5720.0,
    "cost": 25272.28,
    "price": 4.42
  },
  {
    "date": "12/25/2024",
    "product": "D.Z. MALINA, PAK. 8X300 G",
    "country": "Australia",
    "quantity": 14774.4,
    "cost": 68454.72,
    "price": 4.63
  },
  {
    "date": "12/26/2024",
    "product": "D.Z. MALINA, PAK. 8X300 G",
    "country": "Australia",
    "quantity": 14774.4,
    "cost": 68454.72,
    "price": 4.63
  },
  {
    "date": "12/19/2024",
    "product": "DZ MALINA ROLEND 12/1",
    "country": "Bosnia and Herzegovina",
    "quantity": 2016.0,
    "cost": 7660.8,
    "price": 3.8
  },
  {
    "date": "12/3/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 300G",
    "country": "Belgium",
    "quantity": 4036.2,
    "cost": 18216.72,
    "price": 4.51
  },
  {
    "date": "12/3/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "Belgium",
    "quantity": 9600.0,
    "cost": 39360.0,
    "price": 4.1
  },
  {
    "date": "12/6/2024",
    "product": "D\\Z MALINA-FERTODI \"ROLEND\" 5\\1 (10X500G) - 3.267 KUTIJA",
    "country": "Belgium",
    "quantity": 16335.0,
    "cost": 66156.75,
    "price": 4.05
  },
  {
    "date": "12/6/2024",
    "product": "DZ MALINA (COLES), PAK. 500G",
    "country": "Belgium",
    "quantity": 18018.0,
    "cost": 88504.42,
    "price": 4.91
  },
  {
    "date": "12/6/2024",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 6X750GR",
    "country": "Belgium",
    "quantity": 10246.5,
    "cost": 32174.01,
    "price": 3.14
  },
  {
    "date": "12/6/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 5X1KG",
    "country": "Belgium",
    "quantity": 16500.0,
    "cost": 56595.0,
    "price": 3.43
  },
  {
    "date": "12/7/2024",
    "product": "DZ MALINA (COLES), PAK. 500G",
    "country": "Belgium",
    "quantity": 18018.0,
    "cost": 88504.42,
    "price": 4.91
  },
  {
    "date": "12/7/2024",
    "product": "DZ MALINA (PICARD), PAK. 750G",
    "country": "Belgium",
    "quantity": 4860.0,
    "cost": 16664.94,
    "price": 3.43
  },
  {
    "date": "12/7/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 15X450GR; 6X1KG",
    "country": "Belgium",
    "quantity": 15444.0,
    "cost": 65006.28,
    "price": 4.21
  },
  {
    "date": "12/10/2024",
    "product": "D/Z MALINA DF RASPBERRY ROLLEND 10X250KG",
    "country": "Belgium",
    "quantity": 8160.0,
    "cost": 34924.8,
    "price": 4.28
  },
  {
    "date": "12/12/2024",
    "product": "D/Z MALINA ROLEND PAK.5X1 KG",
    "country": "Belgium",
    "quantity": 16860.0,
    "cost": 69294.6,
    "price": 4.11
  },
  {
    "date": "12/12/2024",
    "product": "ZAMRZNUTA MALINA ROLEND 90/10, 6X750G (IQF RASPBERRY WHOLE 90/10,",
    "country": "Belgium",
    "quantity": 14701.5,
    "cost": 59100.03,
    "price": 4.02
  },
  {
    "date": "12/13/2024",
    "product": "DZ MALINA (THIRIET), PAK.450G,1KG",
    "country": "Belgium",
    "quantity": 20375.0,
    "cost": 83271.13,
    "price": 4.09
  },
  {
    "date": "12/13/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X500GR",
    "country": "Belgium",
    "quantity": 16335.0,
    "cost": 66973.5,
    "price": 4.1
  },
  {
    "date": "12/16/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA PAKOVANJE 6X250G DH",
    "country": "Belgium",
    "quantity": 15048.0,
    "cost": 71778.96,
    "price": 4.77
  },
  {
    "date": "12/16/2024",
    "product": "DZ MALINA",
    "country": "Belgium",
    "quantity": 16335.0,
    "cost": 66973.5,
    "price": 4.1
  },
  {
    "date": "12/16/2024",
    "product": "ZAMRZNUTA MALINA 90/10,PO: 4500730735",
    "country": "Belgium",
    "quantity": 14701.5,
    "cost": 60568.12,
    "price": 4.12
  },
  {
    "date": "12/16/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 5X1KG",
    "country": "Belgium",
    "quantity": 16500.0,
    "cost": 56595.0,
    "price": 3.43
  },
  {
    "date": "12/19/2024",
    "product": "ZAMRZNUTA MALINA 95/5, 4X2,5KG (IQF RASPBERRY 95/5, 4X2,5KG) PO FAKTURI",
    "country": "Belgium",
    "quantity": 20480.0,
    "cost": 79872.0,
    "price": 3.9
  },
  {
    "date": "12/20/2024",
    "product": "DZ MALINA (AUCHAN), PAK. 600G",
    "country": "Belgium",
    "quantity": 12355.2,
    "cost": 39660.19,
    "price": 3.21
  },
  {
    "date": "12/20/2024",
    "product": "DZ MALINA (COLES), PAK. 500G",
    "country": "Belgium",
    "quantity": 18018.0,
    "cost": 88504.42,
    "price": 4.91
  },
  {
    "date": "12/20/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "Belgium",
    "quantity": 20790.0,
    "cost": 82536.3,
    "price": 3.97
  },
  {
    "date": "12/26/2024",
    "product": "D/Z MALINA PO NO.4500724685",
    "country": "Belgium",
    "quantity": 16335.0,
    "cost": 67300.2,
    "price": 4.12
  },
  {
    "date": "12/26/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 300G",
    "country": "Belgium",
    "quantity": 20168.4,
    "cost": 91026.72,
    "price": 4.51
  },
  {
    "date": "12/26/2024",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 1X10KG, 8X500GR",
    "country": "Belgium",
    "quantity": 16224.0,
    "cost": 72040.4,
    "price": 4.44
  },
  {
    "date": "12/27/2024",
    "product": "DZ MALINA (CROPS, AUCHAN), PAK. 300G, 600G",
    "country": "Belgium",
    "quantity": 9100.8,
    "cost": 31972.97,
    "price": 3.51
  },
  {
    "date": "12/27/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 12X500GR",
    "country": "Belgium",
    "quantity": 2688.0,
    "cost": 12096.0,
    "price": 4.5
  },
  {
    "date": "12/28/2024",
    "product": "DZ MALINA (AUCHAN), PAK. 600G",
    "country": "Belgium",
    "quantity": 8280.0,
    "cost": 25238.3,
    "price": 3.05
  },
  {
    "date": "12/30/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:20X500GR",
    "country": "Belgium",
    "quantity": 17820.0,
    "cost": 72705.6,
    "price": 4.08
  },
  {
    "date": "12/14/2024",
    "product": "D/Z ORGANSKA MALINA ROLEND",
    "country": "Canada",
    "quantity": 40800.0,
    "cost": 171360.0,
    "price": 4.2
  },
  {
    "date": "12/20/2024",
    "product": "DZ MALINA ROLEND",
    "country": "Canada",
    "quantity": 40800.0,
    "cost": 110160.0,
    "price": 2.7
  },
  {
    "date": "12/5/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 500G",
    "country": "Switzerland",
    "quantity": 5184.0,
    "cost": 22187.52,
    "price": 4.28
  },
  {
    "date": "12/6/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 300G ,500G",
    "country": "Switzerland",
    "quantity": 3372.0,
    "cost": 14784.96,
    "price": 4.38
  },
  {
    "date": "12/13/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 300 G DUO PACK",
    "country": "Switzerland",
    "quantity": 13860.0,
    "cost": 61215.0,
    "price": 4.42
  },
  {
    "date": "12/13/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 300G ,500G, 300 G DUO PACK",
    "country": "Switzerland",
    "quantity": 6336.0,
    "cost": 27785.88,
    "price": 4.39
  },
  {
    "date": "12/13/2024",
    "product": "ZAMRZNUTA MALINA , PAKOVANJE: 10X0,300KG",
    "country": "Switzerland",
    "quantity": 8640.0,
    "cost": 44064.0,
    "price": 5.1
  },
  {
    "date": "12/17/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 500G",
    "country": "Switzerland",
    "quantity": 14256.0,
    "cost": 61015.68,
    "price": 4.28
  },
  {
    "date": "12/19/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 300G",
    "country": "Switzerland",
    "quantity": 7560.0,
    "cost": 33264.0,
    "price": 4.4
  },
  {
    "date": "12/26/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 300G",
    "country": "Switzerland",
    "quantity": 2520.0,
    "cost": 11088.0,
    "price": 4.4
  },
  {
    "date": "12/26/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 500G",
    "country": "Switzerland",
    "quantity": 7344.0,
    "cost": 31432.32,
    "price": 4.28
  },
  {
    "date": "12/27/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 300G",
    "country": "Switzerland",
    "quantity": 1680.0,
    "cost": 7392.0,
    "price": 4.4
  },
  {
    "date": "12/30/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 500G",
    "country": "Switzerland",
    "quantity": 9072.0,
    "cost": 38828.16,
    "price": 4.28
  },
  {
    "date": "12/16/2024",
    "product": "ALPHAMEGA RASPBERRIES FROZEN 300G- MALINE",
    "country": "CY",
    "quantity": 3300.0,
    "cost": 14080.0,
    "price": 4.27
  },
  {
    "date": "12/2/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X500GR",
    "country": "Germany",
    "quantity": 16335.0,
    "cost": 64359.9,
    "price": 3.94
  },
  {
    "date": "12/2/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 12X750GR",
    "country": "Germany",
    "quantity": 19008.0,
    "cost": 75081.6,
    "price": 3.95
  },
  {
    "date": "12/2/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 14X500GR",
    "country": "Germany",
    "quantity": 14784.0,
    "cost": 59032.51,
    "price": 3.99
  },
  {
    "date": "12/3/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA",
    "country": "Germany",
    "quantity": 17956.0,
    "cost": 85232.8,
    "price": 4.75
  },
  {
    "date": "12/3/2024",
    "product": "DZ MALINA-TK-HIMBEEREN FRESHONA DE/IT 20X500,TK-HIMBEEREN FRESHONA",
    "country": "Germany",
    "quantity": 19620.0,
    "cost": 79264.8,
    "price": 4.04
  },
  {
    "date": "12/3/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 24X350GR",
    "country": "Germany",
    "quantity": 19958.4,
    "cost": 80931.31,
    "price": 4.05
  },
  {
    "date": "12/4/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA",
    "country": "Germany",
    "quantity": 17956.0,
    "cost": 85232.8,
    "price": 4.75
  },
  {
    "date": "12/6/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA",
    "country": "Germany",
    "quantity": 18480.0,
    "cost": 87255.6,
    "price": 4.72
  },
  {
    "date": "12/6/2024",
    "product": "DZ MALINA ROLEND",
    "country": "Germany",
    "quantity": 15792.0,
    "cost": 58305.4,
    "price": 3.69
  },
  {
    "date": "12/6/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 14X500GR",
    "country": "Germany",
    "quantity": 14784.0,
    "cost": 59032.51,
    "price": 3.99
  },
  {
    "date": "12/7/2024",
    "product": "D/Z MALINE \"IQF RASPBERRY \" 4X2.5KG",
    "country": "Germany",
    "quantity": 20790.0,
    "cost": 75883.5,
    "price": 3.65
  },
  {
    "date": "12/7/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA",
    "country": "Germany",
    "quantity": 35912.0,
    "cost": 170465.6,
    "price": 4.75
  },
  {
    "date": "12/7/2024",
    "product": "DZ MALINA ROLEND (4X2,5KG).-",
    "country": "Germany",
    "quantity": 10240.0,
    "cost": 43520.0,
    "price": 4.25
  },
  {
    "date": "12/7/2024",
    "product": "TK- HIMBEEREN FRESHONA ES/PT 20X500G",
    "country": "Germany",
    "quantity": 20250.0,
    "cost": 81810.0,
    "price": 4.04
  },
  {
    "date": "12/7/2024",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 10X500GR",
    "country": "Germany",
    "quantity": 14355.0,
    "cost": 61008.75,
    "price": 4.25
  },
  {
    "date": "12/7/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 6X500GR",
    "country": "Germany",
    "quantity": 26136.0,
    "cost": 102975.84,
    "price": 3.94
  },
  {
    "date": "12/7/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:10X300GR",
    "country": "Germany",
    "quantity": 14850.0,
    "cost": 63454.05,
    "price": 4.27
  },
  {
    "date": "12/9/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA",
    "country": "Germany",
    "quantity": 18480.0,
    "cost": 87225.6,
    "price": 4.72
  },
  {
    "date": "12/9/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:14X500GR",
    "country": "Germany",
    "quantity": 18480.0,
    "cost": 72811.2,
    "price": 3.94
  },
  {
    "date": "12/9/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:20X500GR",
    "country": "Germany",
    "quantity": 20160.0,
    "cost": 81446.4,
    "price": 4.04
  },
  {
    "date": "12/10/2024",
    "product": "D/Z ORGANSKA MALINA ROLEND",
    "country": "Germany",
    "quantity": 18480.0,
    "cost": 98683.2,
    "price": 5.34
  },
  {
    "date": "12/10/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA",
    "country": "Germany",
    "quantity": 18480.0,
    "cost": 87225.6,
    "price": 4.72
  },
  {
    "date": "12/10/2024",
    "product": "TK- HIMBEEREN BESTE ERNTE 20X500G",
    "country": "Germany",
    "quantity": 20160.0,
    "cost": 81446.4,
    "price": 4.04
  },
  {
    "date": "12/10/2024",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 6X500GR I 10X500GR",
    "country": "Germany",
    "quantity": 13635.0,
    "cost": 57948.75,
    "price": 4.25
  },
  {
    "date": "12/10/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X1000GR",
    "country": "Germany",
    "quantity": 40000.0,
    "cost": 161000.0,
    "price": 4.03
  },
  {
    "date": "12/11/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA",
    "country": "Germany",
    "quantity": 17825.0,
    "cost": 84734.6,
    "price": 4.75
  },
  {
    "date": "12/14/2024",
    "product": "D/Z MALINA - DEEP FROZEN RASPBERRY ROLLEND 12X750GR",
    "country": "Germany",
    "quantity": 18711.0,
    "cost": 78211.98,
    "price": 4.18
  },
  {
    "date": "12/14/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA",
    "country": "Germany",
    "quantity": 53665.0,
    "cost": 253899.4,
    "price": 4.73
  },
  {
    "date": "12/14/2024",
    "product": "TK- HIMBEEREN BESTE ERNTE 20X500G",
    "country": "Germany",
    "quantity": 20160.0,
    "cost": 81446.4,
    "price": 4.04
  },
  {
    "date": "12/14/2024",
    "product": "TK- HIMBEEREN GUT&GUNSTIG 20X500G",
    "country": "Germany",
    "quantity": 20160.0,
    "cost": 81446.4,
    "price": 4.04
  },
  {
    "date": "12/14/2024",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 10X500GR",
    "country": "Germany",
    "quantity": 12375.0,
    "cost": 52593.75,
    "price": 4.25
  },
  {
    "date": "12/14/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X500GR",
    "country": "Germany",
    "quantity": 16335.0,
    "cost": 64459.54,
    "price": 3.95
  },
  {
    "date": "12/14/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "Germany",
    "quantity": 20000.0,
    "cost": 79808.0,
    "price": 3.99
  },
  {
    "date": "12/14/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 6X500GR",
    "country": "Germany",
    "quantity": 6336.0,
    "cost": 24963.84,
    "price": 3.94
  },
  {
    "date": "12/14/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 6X500GR; 10X1000GR",
    "country": "Germany",
    "quantity": 15692.0,
    "cost": 62588.08,
    "price": 3.99
  },
  {
    "date": "12/16/2024",
    "product": "D/Z MALINA \" IQF RASPBERRIES \" 4X2.50KG I 70GR.",
    "country": "Germany",
    "quantity": 14616.0,
    "cost": 55598.76,
    "price": 3.8
  },
  {
    "date": "12/16/2024",
    "product": "D/Z MALINA (PAKOVANJE 450 GR)",
    "country": "Germany",
    "quantity": 14701.5,
    "cost": 72200.7,
    "price": 4.91
  },
  {
    "date": "12/16/2024",
    "product": "DZ MALINA (HERITAGE), PAK. 2,5KG",
    "country": "Germany",
    "quantity": 10240.0,
    "cost": 49766.4,
    "price": 4.86
  },
  {
    "date": "12/16/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 14X500GR",
    "country": "Germany",
    "quantity": 14784.0,
    "cost": 59032.51,
    "price": 3.99
  },
  {
    "date": "12/17/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA",
    "country": "Germany",
    "quantity": 18349.0,
    "cost": 86727.4,
    "price": 4.73
  },
  {
    "date": "12/17/2024",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE:6X500GR I 10X500GR",
    "country": "Germany",
    "quantity": 12105.0,
    "cost": 51446.25,
    "price": 4.25
  },
  {
    "date": "12/17/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X500GR",
    "country": "Germany",
    "quantity": 16335.0,
    "cost": 64359.9,
    "price": 3.94
  },
  {
    "date": "12/17/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:10X300GR",
    "country": "Germany",
    "quantity": 14850.0,
    "cost": 63454.05,
    "price": 4.27
  },
  {
    "date": "12/17/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:20X500GR",
    "country": "Germany",
    "quantity": 20160.0,
    "cost": 81446.4,
    "price": 4.04
  },
  {
    "date": "12/18/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA",
    "country": "Germany",
    "quantity": 18480.0,
    "cost": 87225.6,
    "price": 4.72
  },
  {
    "date": "12/20/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 24X350GR",
    "country": "Germany",
    "quantity": 19958.4,
    "cost": 80931.31,
    "price": 4.05
  },
  {
    "date": "12/21/2024",
    "product": "TK- HIMBEEREN FRESHONA DE/IT 20X500G,TK- HIMBEEREN FRESHONA DE/AT",
    "country": "Germany",
    "quantity": 20250.0,
    "cost": 81810.0,
    "price": 4.04
  },
  {
    "date": "12/21/2024",
    "product": "TK- HIMBEEREN GUT&GUNSTIG 20X500G",
    "country": "Germany",
    "quantity": 20160.0,
    "cost": 81446.4,
    "price": 4.04
  },
  {
    "date": "12/21/2024",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 10X500GR",
    "country": "Germany",
    "quantity": 15345.0,
    "cost": 65216.25,
    "price": 4.25
  },
  {
    "date": "12/21/2024",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE:6X500GR I 10X500GR",
    "country": "Germany",
    "quantity": 13455.0,
    "cost": 57183.75,
    "price": 4.25
  },
  {
    "date": "12/21/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X300GR",
    "country": "Germany",
    "quantity": 5400.0,
    "cost": 22534.2,
    "price": 4.17
  },
  {
    "date": "12/21/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X500GR",
    "country": "Germany",
    "quantity": 16335.0,
    "cost": 64359.9,
    "price": 3.94
  },
  {
    "date": "12/21/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 6X500GR",
    "country": "Germany",
    "quantity": 13068.0,
    "cost": 51487.92,
    "price": 3.94
  },
  {
    "date": "12/21/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:10X300GR",
    "country": "Germany",
    "quantity": 14850.0,
    "cost": 63454.05,
    "price": 4.27
  },
  {
    "date": "12/21/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:20X500GR",
    "country": "Germany",
    "quantity": 20160.0,
    "cost": 81446.4,
    "price": 4.04
  },
  {
    "date": "12/25/2024",
    "product": "DUBOKO SMRZNUTA MALINA 300GR ,500GR",
    "country": "Germany",
    "quantity": 16777.0,
    "cost": 80749.0,
    "price": 4.81
  },
  {
    "date": "12/25/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 14X500GR",
    "country": "Germany",
    "quantity": 14784.0,
    "cost": 59032.51,
    "price": 3.99
  },
  {
    "date": "12/27/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 500GR",
    "country": "Germany",
    "quantity": 2800.0,
    "cost": 13216.0,
    "price": 4.72
  },
  {
    "date": "12/30/2024",
    "product": "DUBOKO SMRZNUTA MALINA 500G",
    "country": "Germany",
    "quantity": 18480.0,
    "cost": 87225.6,
    "price": 4.72
  },
  {
    "date": "12/30/2024",
    "product": "TK- HIMBEEREN FRESHONA DE/AT 20X500G,TK- HIMBEEREN FRESHONA DE/IT",
    "country": "Germany",
    "quantity": 20250.0,
    "cost": 81810.0,
    "price": 4.04
  },
  {
    "date": "12/30/2024",
    "product": "TK- HIMBEEREN REWE 10X500G",
    "country": "Germany",
    "quantity": 8415.0,
    "cost": 33155.1,
    "price": 3.94
  },
  {
    "date": "12/30/2024",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 4X2,5KG",
    "country": "Germany",
    "quantity": 18480.0,
    "cost": 66528.0,
    "price": 3.6
  },
  {
    "date": "12/30/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "Germany",
    "quantity": 40500.0,
    "cost": 163620.0,
    "price": 4.04
  },
  {
    "date": "12/30/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR, 24X350GR",
    "country": "Germany",
    "quantity": 20336.4,
    "cost": 82322.35,
    "price": 4.05
  },
  {
    "date": "12/31/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 6X500GR; 10X300GR; 20X500GR",
    "country": "Germany",
    "quantity": 15030.0,
    "cost": 61462.35,
    "price": 4.09
  },
  {
    "date": "12/31/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:10X300GR",
    "country": "Germany",
    "quantity": 14850.0,
    "cost": 63454.05,
    "price": 4.27
  },
  {
    "date": "12/9/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "Denmark",
    "quantity": 20790.0,
    "cost": 84407.4,
    "price": 4.06
  },
  {
    "date": "12/17/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "Denmark",
    "quantity": 20790.0,
    "cost": 84407.4,
    "price": 4.06
  },
  {
    "date": "12/23/2024",
    "product": "D.Z. MALINA ROLEND, PAK. 200 GR",
    "country": "Denmark",
    "quantity": 9936.0,
    "cost": 46202.4,
    "price": 4.65
  },
  {
    "date": "12/6/2024",
    "product": "ZAMRZNUTA MALINA MIKER, PAKOVANJE: 4X2,5KG",
    "country": "Spain",
    "quantity": 18480.0,
    "cost": 77431.2,
    "price": 4.19
  },
  {
    "date": "12/12/2024",
    "product": "D.Z. MALINA ROLEND, PAK. 200 I 400 G",
    "country": "Finland",
    "quantity": 14472.0,
    "cost": 66798.0,
    "price": 4.62
  },
  {
    "date": "12/31/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 1/5 KG (10X500G) DUBOKO ZAMZNUTA MALINA 1/2,4",
    "country": "Finland",
    "quantity": 6912.0,
    "cost": 29692.8,
    "price": 4.3
  },
  {
    "date": "12/2/2024",
    "product": "D\\Z MALINA - FERTODI \"ROLEND\",PAK. 9\\1- 1.840 KUTIJA",
    "country": "France",
    "quantity": 16560.0,
    "cost": 72367.2,
    "price": 4.37
  },
  {
    "date": "12/2/2024",
    "product": "ZAMRZNUTA MALINA -DF RASPBERRIES WHOLE (5X1)",
    "country": "France",
    "quantity": 17820.0,
    "cost": 65934.0,
    "price": 3.7
  },
  {
    "date": "12/2/2024",
    "product": "ZAMRZNUTA MALINA VILAMET 90/10, 5X1KG (IQF WHOLE WILAMETTE RASPBERRIES",
    "country": "France",
    "quantity": 17820.0,
    "cost": 71814.6,
    "price": 4.03
  },
  {
    "date": "12/2/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 6X0,5KG",
    "country": "France",
    "quantity": 3.0,
    "cost": 10.05,
    "price": 3.35
  },
  {
    "date": "12/3/2024",
    "product": "D.Z. MALINA, PAK. 500 G",
    "country": "France",
    "quantity": 9000.0,
    "cost": 41940.0,
    "price": 4.66
  },
  {
    "date": "12/3/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:4X2,5KG",
    "country": "France",
    "quantity": 19420.0,
    "cost": 85253.8,
    "price": 4.39
  },
  {
    "date": "12/5/2024",
    "product": "11 PALETA /IQF ZAMRZNUTA MALINA VILAMET 5X1 KG PO FAKTURI 00-52/2024",
    "country": "France",
    "quantity": 5445.0,
    "cost": 16879.5,
    "price": 3.1
  },
  {
    "date": "12/5/2024",
    "product": "7 PALETA /IQF ZAMRZNUTA MALINA VILAMET 5X1 KG PO FAKTURI 00-49/2024",
    "country": "France",
    "quantity": 3465.0,
    "cost": 10741.5,
    "price": 3.1
  },
  {
    "date": "12/6/2024",
    "product": "D\\Z MALINA ROLEND 5X1KG- VILAMET,LOT:242781 DF RASPBERRY IQF 5X1KG-",
    "country": "France",
    "quantity": 19320.0,
    "cost": 91770.0,
    "price": 4.75
  },
  {
    "date": "12/6/2024",
    "product": "D\\Z MALINA ROLEND 4X2,5KG - FERTODI LOT: 18304 DF RASPBERRY IQF 4X2,5KG",
    "country": "France",
    "quantity": 20000.0,
    "cost": 82000.0,
    "price": 4.1
  },
  {
    "date": "12/6/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 12X0,5KG",
    "country": "France",
    "quantity": 11088.0,
    "cost": 53222.4,
    "price": 4.8
  },
  {
    "date": "12/6/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 15/1KG",
    "country": "France",
    "quantity": 28800.0,
    "cost": 101700.0,
    "price": 3.53
  },
  {
    "date": "12/6/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 5X0,5KG I 2X0,5KG",
    "country": "France",
    "quantity": 3.5,
    "cost": 16.1,
    "price": 4.6
  },
  {
    "date": "12/6/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 5X1KG",
    "country": "France",
    "quantity": 12100.0,
    "cost": 61710.0,
    "price": 5.1
  },
  {
    "date": "12/6/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 6X0,5KG",
    "country": "France",
    "quantity": 3.0,
    "cost": 10.8,
    "price": 3.6
  },
  {
    "date": "12/9/2024",
    "product": "D.Z. MALINA, PAK. 500 G",
    "country": "France",
    "quantity": 7200.0,
    "cost": 33552.0,
    "price": 4.66
  },
  {
    "date": "12/9/2024",
    "product": "DZ MALINA ROLEND 5X1 KG",
    "country": "France",
    "quantity": 17820.0,
    "cost": 70389.0,
    "price": 3.95
  },
  {
    "date": "12/9/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 12X0,5KG",
    "country": "France",
    "quantity": 11880.0,
    "cost": 82566.0,
    "price": 6.95
  },
  {
    "date": "12/9/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 3X0,5KG I 4X0,5KG",
    "country": "France",
    "quantity": 3.5,
    "cost": 24.33,
    "price": 6.95
  },
  {
    "date": "12/13/2024",
    "product": "D\\Z MALINA ROLEND 5X1KG - VILAMET, LOT: RD242991 DF RASPBERRY IQF 5X1KG -",
    "country": "France",
    "quantity": 18000.0,
    "cost": 95400.0,
    "price": 5.3
  },
  {
    "date": "12/13/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 15/1KG",
    "country": "France",
    "quantity": 20880.0,
    "cost": 74484.0,
    "price": 3.57
  },
  {
    "date": "12/13/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X0,5KG I 2X0,5KG",
    "country": "France",
    "quantity": 3.0,
    "cost": 10.65,
    "price": 3.55
  },
  {
    "date": "12/14/2024",
    "product": "DZ MALINA ROLEND 20X450G ,VILAMET,LOT 233422,233242,DZ MALINA ROLEND",
    "country": "France",
    "quantity": 18184.0,
    "cost": 87986.8,
    "price": 4.84
  },
  {
    "date": "12/14/2024",
    "product": "DZ MALINA ROLEND,DZ MALINA ROLEND MIKER,DZ MALINA ROLEND VILAMET",
    "country": "France",
    "quantity": 1928.0,
    "cost": 8232.0,
    "price": 4.27
  },
  {
    "date": "12/17/2024",
    "product": "-D/Z MALINA ROLEND WILLAMETTE L24341/BBE 06.12.2026,PAKOVANA U 3564",
    "country": "France",
    "quantity": 17820.0,
    "cost": 73062.0,
    "price": 4.1
  },
  {
    "date": "12/17/2024",
    "product": "ZAMRZNUTA MALINA U PAKOVANJIMA OD 1KG",
    "country": "France",
    "quantity": 15840.0,
    "cost": 68428.8,
    "price": 4.32
  },
  {
    "date": "12/18/2024",
    "product": "DZ MALINA ROLEND 5X1 KG",
    "country": "France",
    "quantity": 17820.0,
    "cost": 71280.0,
    "price": 4.0
  },
  {
    "date": "12/19/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA PAKOVANJE 500GR",
    "country": "France",
    "quantity": 11880.0,
    "cost": 52628.4,
    "price": 4.43
  },
  {
    "date": "12/21/2024",
    "product": "D.Z. MALINA, PAK. 500 G",
    "country": "France",
    "quantity": 9000.0,
    "cost": 41940.0,
    "price": 4.66
  },
  {
    "date": "12/23/2024",
    "product": "SMRZNUTA MALINA U PAKOVANJIMA OD 5X1KG,4X2,5KG,8X500G",
    "country": "France",
    "quantity": 15864.0,
    "cost": 80286.74,
    "price": 5.06
  },
  {
    "date": "12/27/2024",
    "product": "D/Z MALINA ROLEND",
    "country": "France",
    "quantity": 11616.0,
    "cost": 52272.0,
    "price": 4.5
  },
  {
    "date": "12/27/2024",
    "product": "ZAMRZNUTA MALINA,PAKOVANA U KUTIJE,LOT BR.56677701,56677702, 56677703 I",
    "country": "France",
    "quantity": 20160.0,
    "cost": 84672.0,
    "price": 4.2
  },
  {
    "date": "12/2/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 300G (1/4,2 KG)",
    "country": "United Kingdom",
    "quantity": 9984.0,
    "cost": 56406.8,
    "price": 5.65
  },
  {
    "date": "12/2/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "United Kingdom",
    "quantity": 20790.0,
    "cost": 82536.3,
    "price": 3.97
  },
  {
    "date": "12/3/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 300G",
    "country": "United Kingdom",
    "quantity": 17472.0,
    "cost": 84010.13,
    "price": 4.81
  },
  {
    "date": "12/5/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "United Kingdom",
    "quantity": 20790.0,
    "cost": 82536.3,
    "price": 3.97
  },
  {
    "date": "12/6/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA PAKOVANJE 300G AD I MS",
    "country": "United Kingdom",
    "quantity": 19224.0,
    "cost": 103295.24,
    "price": 5.37
  },
  {
    "date": "12/6/2024",
    "product": "DZ MALINA (DEL MONTE), PAK. 300G",
    "country": "United Kingdom",
    "quantity": 6075.0,
    "cost": 27552.83,
    "price": 4.54
  },
  {
    "date": "12/6/2024",
    "product": "ZAMRZNUTA MALINA 95/5 (IQF RASPBERRY WHOLE 95/5)PO FAKTURI 9154/2024",
    "country": "United Kingdom",
    "quantity": 18480.0,
    "cost": 76692.0,
    "price": 4.15
  },
  {
    "date": "12/6/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "United Kingdom",
    "quantity": 20790.0,
    "cost": 82536.3,
    "price": 3.97
  },
  {
    "date": "12/9/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA",
    "country": "United Kingdom",
    "quantity": 12960.0,
    "cost": 71227.67,
    "price": 5.5
  },
  {
    "date": "12/10/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 300G",
    "country": "United Kingdom",
    "quantity": 17472.0,
    "cost": 84232.85,
    "price": 4.82
  },
  {
    "date": "12/11/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "United Kingdom",
    "quantity": 20790.0,
    "cost": 82536.3,
    "price": 3.97
  },
  {
    "date": "12/12/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 300G",
    "country": "United Kingdom",
    "quantity": 17472.0,
    "cost": 84232.85,
    "price": 4.82
  },
  {
    "date": "12/13/2024",
    "product": "DZ MALINA (DEL MONTE), PAK. 300G",
    "country": "United Kingdom",
    "quantity": 4725.0,
    "cost": 22391.78,
    "price": 4.74
  },
  {
    "date": "12/13/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "United Kingdom",
    "quantity": 41580.0,
    "cost": 166112.1,
    "price": 4.0
  },
  {
    "date": "12/17/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA PAKOVANJE 300G AD I MS",
    "country": "United Kingdom",
    "quantity": 19224.0,
    "cost": 103957.54,
    "price": 5.41
  },
  {
    "date": "12/18/2024",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 24X350GR",
    "country": "United Kingdom",
    "quantity": 19958.4,
    "cost": 69455.23,
    "price": 3.48
  },
  {
    "date": "12/20/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 300G (1/4,2 KG)",
    "country": "United Kingdom",
    "quantity": 17472.0,
    "cost": 84548.78,
    "price": 4.84
  },
  {
    "date": "12/23/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA PAKOVANJE 300G",
    "country": "United Kingdom",
    "quantity": 11232.0,
    "cost": 60947.8,
    "price": 5.43
  },
  {
    "date": "12/25/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 300G",
    "country": "United Kingdom",
    "quantity": 17472.0,
    "cost": 84273.51,
    "price": 4.82
  },
  {
    "date": "12/30/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG I 1X12KG",
    "country": "United Kingdom",
    "quantity": 20496.0,
    "cost": 78439.2,
    "price": 3.83
  },
  {
    "date": "12/10/2024",
    "product": "- DZ MALINA, 4X2,5, 10KG -",
    "country": "Greece",
    "quantity": 1920.0,
    "cost": 7680.0,
    "price": 4.0
  },
  {
    "date": "12/5/2024",
    "product": "D/Z MALINA ROLEND 11/1",
    "country": "Croatia",
    "quantity": 17996.0,
    "cost": 68384.8,
    "price": 3.8
  },
  {
    "date": "12/11/2024",
    "product": "D/Z MALINA 400 GR.GARDEN GOOD",
    "country": "Croatia",
    "quantity": 3072.0,
    "cost": 13209.6,
    "price": 4.3
  },
  {
    "date": "12/31/2024",
    "product": "D/Z MALINA 400G GARDEN GOOD",
    "country": "Croatia",
    "quantity": 2240.0,
    "cost": 9632.0,
    "price": 4.3
  },
  {
    "date": "12/10/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "Hungary",
    "quantity": 20160.0,
    "cost": 82252.8,
    "price": 4.08
  },
  {
    "date": "12/16/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "Hungary",
    "quantity": 18900.0,
    "cost": 77112.0,
    "price": 4.08
  },
  {
    "date": "12/12/2024",
    "product": "D/Z MALINA IQF RASPBERRY PROZEN 300G",
    "country": "Israel",
    "quantity": 3060.0,
    "cost": 15080.7,
    "price": 4.93
  },
  {
    "date": "12/5/2024",
    "product": "DZ MALINA KULTIVISANA IQF RASPBERRY 1X12KG",
    "country": "India",
    "quantity": 10008.0,
    "cost": 41533.2,
    "price": 4.15
  },
  {
    "date": "12/24/2024",
    "product": "DZ MALINA RASBERRIES RIMI FROZEN",
    "country": "LV",
    "quantity": 5280.0,
    "cost": 23100.0,
    "price": 4.38
  },
  {
    "date": "12/6/2024",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 30X300GR",
    "country": "LY",
    "quantity": 3240.0,
    "cost": 13381.2,
    "price": 4.13
  },
  {
    "date": "12/4/2024",
    "product": "BSM MALINA 450G PO FAKTURI",
    "country": "Montenegro",
    "quantity": 504.0,
    "cost": 2564.8,
    "price": 5.09
  },
  {
    "date": "12/5/2024",
    "product": "MALINA 300 GR",
    "country": "Montenegro",
    "quantity": 499.2,
    "cost": 1547.52,
    "price": 3.1
  },
  {
    "date": "12/12/2024",
    "product": "MALINA 300 GR",
    "country": "Montenegro",
    "quantity": 499.2,
    "cost": 1547.52,
    "price": 3.1
  },
  {
    "date": "12/18/2024",
    "product": "MALINA 300 GR FAKTURA: 91851338 STAVKA: 7",
    "country": "North Macedonia",
    "quantity": 499.2,
    "cost": 1547.52,
    "price": 3.1
  },
  {
    "date": "12/3/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 250G, 750G",
    "country": "Netherlands",
    "quantity": 3736.0,
    "cost": 13185.56,
    "price": 3.53
  },
  {
    "date": "12/4/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 750G",
    "country": "Netherlands",
    "quantity": 3402.0,
    "cost": 11755.04,
    "price": 3.46
  },
  {
    "date": "12/6/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 750G",
    "country": "Netherlands",
    "quantity": 2430.0,
    "cost": 8396.46,
    "price": 3.46
  },
  {
    "date": "12/6/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X300GR",
    "country": "Netherlands",
    "quantity": 9792.0,
    "cost": 42105.6,
    "price": 4.3
  },
  {
    "date": "12/9/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 750G",
    "country": "Netherlands",
    "quantity": 486.0,
    "cost": 1679.29,
    "price": 3.46
  },
  {
    "date": "12/9/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "Netherlands",
    "quantity": 11520.0,
    "cost": 44352.0,
    "price": 3.85
  },
  {
    "date": "12/12/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 750G",
    "country": "Netherlands",
    "quantity": 486.0,
    "cost": 1679.29,
    "price": 3.46
  },
  {
    "date": "12/13/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 1 KG",
    "country": "Netherlands",
    "quantity": 800.0,
    "cost": 2560.0,
    "price": 3.2
  },
  {
    "date": "12/14/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA",
    "country": "Netherlands",
    "quantity": 1624.0,
    "cost": 7496.72,
    "price": 4.62
  },
  {
    "date": "12/16/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X300GR",
    "country": "Netherlands",
    "quantity": 6912.0,
    "cost": 29721.6,
    "price": 4.3
  },
  {
    "date": "12/17/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 250G",
    "country": "Netherlands",
    "quantity": 9324.0,
    "cost": 37647.31,
    "price": 4.04
  },
  {
    "date": "12/17/2024",
    "product": "UZORAK DUBOKO ZAMRZNUTE MALINE 250G",
    "country": "Netherlands",
    "quantity": 2.5,
    "cost": 11.87,
    "price": 4.75
  },
  {
    "date": "12/20/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA",
    "country": "Netherlands",
    "quantity": 6496.0,
    "cost": 29281.28,
    "price": 4.51
  },
  {
    "date": "12/21/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA",
    "country": "Netherlands",
    "quantity": 12880.0,
    "cost": 58217.6,
    "price": 4.52
  },
  {
    "date": "12/26/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 750G",
    "country": "Netherlands",
    "quantity": 9264.0,
    "cost": 38235.61,
    "price": 4.13
  },
  {
    "date": "12/26/2024",
    "product": "UZORAK DUBOKO ZAMRZNUTE MALINE 750G",
    "country": "Netherlands",
    "quantity": 3.0,
    "cost": 13.84,
    "price": 4.61
  },
  {
    "date": "12/26/2024",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 4X2,5KG",
    "country": "Netherlands",
    "quantity": 20000.0,
    "cost": 72000.0,
    "price": 3.6
  },
  {
    "date": "12/26/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X300GR",
    "country": "Netherlands",
    "quantity": 7488.0,
    "cost": 32198.4,
    "price": 4.3
  },
  {
    "date": "12/26/2024",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:10X1KG; 14KG; 4X2,5KG; 12X500GR",
    "country": "Netherlands",
    "quantity": 10208.0,
    "cost": 41798.4,
    "price": 4.09
  },
  {
    "date": "12/31/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 750G",
    "country": "Netherlands",
    "quantity": 16038.0,
    "cost": 55416.64,
    "price": 3.46
  },
  {
    "date": "12/2/2024",
    "product": "D.Z. MALINA ROLEND, PAK. 300 G",
    "country": "Norway",
    "quantity": 12171.6,
    "cost": 58423.68,
    "price": 4.8
  },
  {
    "date": "12/9/2024",
    "product": "D.Z. MALINA, PAK. 400G I 2KG",
    "country": "Norway",
    "quantity": 14841.6,
    "cost": 69897.6,
    "price": 4.71
  },
  {
    "date": "12/12/2024",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 2X2,5KG",
    "country": "Norway",
    "quantity": 19530.0,
    "cost": 85736.7,
    "price": 4.39
  },
  {
    "date": "12/21/2024",
    "product": "D.Z. MALINA ROLEND, PAK. 300 G",
    "country": "Norway",
    "quantity": 17463.6,
    "cost": 83825.28,
    "price": 4.8
  },
  {
    "date": "12/21/2024",
    "product": "DZ MALINA ROLEND",
    "country": "Norway",
    "quantity": 20328.0,
    "cost": 88833.36,
    "price": 4.37
  },
  {
    "date": "12/19/2024",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 12X750GR",
    "country": "New Zealand",
    "quantity": 18270.0,
    "cost": 75820.5,
    "price": 4.15
  },
  {
    "date": "12/10/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 300G",
    "country": "Oman",
    "quantity": 1368.0,
    "cost": 5804.88,
    "price": 4.24
  },
  {
    "date": "12/10/2024",
    "product": "UZORAK DUBOKO ZAMRZNUTE MALINE 300G",
    "country": "Oman",
    "quantity": 0.9,
    "cost": 1.0,
    "price": 1.11
  },
  {
    "date": "12/3/2024",
    "product": "ZAMRZNUTA MALINA ROLEND 95/5, 4X2.5KG (IQF RASPBERRY 95/5, 4X2,5KG) PO",
    "country": "Poland",
    "quantity": 19840.0,
    "cost": 85014.4,
    "price": 4.29
  },
  {
    "date": "12/21/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA GUSTONA 300G",
    "country": "Romania",
    "quantity": 429.0,
    "cost": 1644.5,
    "price": 3.83
  },
  {
    "date": "12/21/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA GUSTONA 400G",
    "country": "Romania",
    "quantity": 2240.0,
    "cost": 6608.0,
    "price": 2.95
  },
  {
    "date": "12/17/2024",
    "product": "D\\Z MALINA",
    "country": "Russia",
    "quantity": 19530.0,
    "cost": 80073.0,
    "price": 4.1
  },
  {
    "date": "12/13/2024",
    "product": "D.Z. MALINA, PAK. 16X350 KG",
    "country": "Saudi Arabia",
    "quantity": 10080.0,
    "cost": 56448.0,
    "price": 5.6
  },
  {
    "date": "12/19/2024",
    "product": "RASPBERRY 300 GR - DUBOKO ZAMRZNUTA MALINA",
    "country": "Saudi Arabia",
    "quantity": 1800.0,
    "cost": 10656.0,
    "price": 5.92
  },
  {
    "date": "12/30/2024",
    "product": "D.Z. MALINA, PAK. 10X400 G; 5X1 KG",
    "country": "Saudi Arabia",
    "quantity": 2730.0,
    "cost": 12597.0,
    "price": 4.61
  },
  {
    "date": "12/30/2024",
    "product": "D.Z. MALINA, PAK. 16X350GKONTEJNER BR: TRIU 8021701",
    "country": "Saudi Arabia",
    "quantity": 10080.0,
    "cost": 46479.6,
    "price": 4.61
  },
  {
    "date": "12/4/2024",
    "product": "D.Z. MALINA, PAK. 10X225 G; 10X500 G",
    "country": "Sweden",
    "quantity": 14715.0,
    "cost": 67256.4,
    "price": 4.57
  },
  {
    "date": "12/4/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA",
    "country": "Sweden",
    "quantity": 14400.0,
    "cost": 60192.0,
    "price": 4.18
  },
  {
    "date": "12/4/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 1000G, 500G , 250G",
    "country": "Sweden",
    "quantity": 14460.0,
    "cost": 59382.0,
    "price": 4.11
  },
  {
    "date": "12/5/2024",
    "product": "D.Z. MALINA, PAK. 10X225 G; 10X500 G",
    "country": "Sweden",
    "quantity": 15498.0,
    "cost": 70348.8,
    "price": 4.54
  },
  {
    "date": "12/5/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 1000GDUBOKO ZAMRZNUTA MALINA 500G DUBOKO",
    "country": "Sweden",
    "quantity": 30420.0,
    "cost": 125286.0,
    "price": 4.12
  },
  {
    "date": "12/6/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 1000GDUBOKO ZAMRZNUTA MALINA 500GDUBOKO",
    "country": "Sweden",
    "quantity": 17100.0,
    "cost": 70770.0,
    "price": 4.14
  },
  {
    "date": "12/9/2024",
    "product": "D.Z. MALINA ROLEND, PAK. 2 X 2,5 KG",
    "country": "Sweden",
    "quantity": 10800.0,
    "cost": 48297.6,
    "price": 4.47
  },
  {
    "date": "12/9/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 1000GDUBOKO ZAMRZNUTA MALINA 500GDUBOKO",
    "country": "Sweden",
    "quantity": 17100.0,
    "cost": 70770.0,
    "price": 4.14
  },
  {
    "date": "12/11/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 500G",
    "country": "Sweden",
    "quantity": 14400.0,
    "cost": 59040.0,
    "price": 4.1
  },
  {
    "date": "12/12/2024",
    "product": "D.Z. MALINA ROLEND, PAK. 200G I 400 G",
    "country": "Sweden",
    "quantity": 14601.6,
    "cost": 68787.36,
    "price": 4.71
  },
  {
    "date": "12/12/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 500G",
    "country": "Sweden",
    "quantity": 2400.0,
    "cost": 9840.0,
    "price": 4.1
  },
  {
    "date": "12/12/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 500G , 1000 G",
    "country": "Sweden",
    "quantity": 13800.0,
    "cost": 55680.0,
    "price": 4.03
  },
  {
    "date": "12/13/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 500G ,1000G, 250G",
    "country": "Sweden",
    "quantity": 15525.0,
    "cost": 63997.5,
    "price": 4.12
  },
  {
    "date": "12/13/2024",
    "product": "DZ MALINA (ICA), PAK. 250G",
    "country": "Sweden",
    "quantity": 9450.0,
    "cost": 44830.8,
    "price": 4.74
  },
  {
    "date": "12/14/2024",
    "product": "D.Z. MALINA, PAK. 10X225 G; 10X500 G",
    "country": "Sweden",
    "quantity": 16497.0,
    "cost": 75013.2,
    "price": 4.55
  },
  {
    "date": "12/16/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 1000G, 500G , 250G",
    "country": "Sweden",
    "quantity": 11100.0,
    "cost": 44880.0,
    "price": 4.04
  },
  {
    "date": "12/18/2024",
    "product": "D.Z. MALINA ROLEND, PAK. 400 G",
    "country": "Sweden",
    "quantity": 12441.6,
    "cost": 55676.16,
    "price": 4.48
  },
  {
    "date": "12/18/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 500G, 1000G",
    "country": "Sweden",
    "quantity": 14220.0,
    "cost": 58032.0,
    "price": 4.08
  },
  {
    "date": "12/24/2024",
    "product": "D.Z. MALINA ROLEND, PAK. 200 I 400 G",
    "country": "Sweden",
    "quantity": 14299.2,
    "cost": 64998.72,
    "price": 4.55
  },
  {
    "date": "12/27/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 500G, 1000G",
    "country": "Sweden",
    "quantity": 14280.0,
    "cost": 58128.0,
    "price": 4.07
  },
  {
    "date": "12/30/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 250G, 1000G",
    "country": "Sweden",
    "quantity": 14730.0,
    "cost": 59109.0,
    "price": 4.01
  },
  {
    "date": "12/3/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA 250G",
    "country": "Slovenia",
    "quantity": 4800.0,
    "cost": 21504.0,
    "price": 4.48
  },
  {
    "date": "12/3/2024",
    "product": "DUBOKO ZAMRZNUTA MALINA PAKOVANJE 20X500G",
    "country": "Slovenia",
    "quantity": 2430.0,
    "cost": 10935.0,
    "price": 4.5
  },
  {
    "date": "12/13/2024",
    "product": "MALINA ROLEND D/Z 10/1 LOT 101224",
    "country": "Turkey",
    "quantity": 20000.0,
    "cost": 80000.0,
    "price": 4.0
  },
  {
    "date": "12/26/2024",
    "product": "MALINA ROLEND D/Z 11/1 LOT 231224",
    "country": "Turkey",
    "quantity": 20328.0,
    "cost": 81312.0,
    "price": 4.0
  },
  {
    "date": "12/6/2024",
    "product": "ZAMRZNUTA MALINA ROLEND 95/5 (IQF RASPBERRY WHOLE 95/5) U KONTEJNERU",
    "country": "United States",
    "quantity": 18000.0,
    "cost": 69300.0,
    "price": 3.85
  },
  {
    "date": "12/7/2024",
    "product": "ZAMRZNUTA MALINA ROLEND 95/5 (IQF RASPBERRY WHOLE 95/5) U KONTEJNERU",
    "country": "United States",
    "quantity": 18000.0,
    "cost": 69300.0,
    "price": 3.85
  },
  {
    "date": "12/9/2024",
    "product": "D/Z MALINA ROLEND FDA",
    "country": "United States",
    "quantity": 20400.0,
    "cost": 55080.0,
    "price": 2.7
  },
  {
    "date": "12/13/2024",
    "product": "ZAMRZNUTA MALINA ROLEND 95/5 (IQF RASPBERRY WHOLE 95/5) U KONTEJNERU",
    "country": "United States",
    "quantity": 18000.0,
    "cost": 70200.0,
    "price": 3.9
  },
  {
    "date": "12/13/2024",
    "product": "ZAMRZNUTA MALINA ROLEND 95/5 (IQF RASPBERRY WHOLE 95/5) U KONTEJNERU",
    "country": "United States",
    "quantity": 18000.0,
    "cost": 70200.0,
    "price": 3.9
  },
  {
    "date": "12/13/2024",
    "product": "ZAMRZNUTA MALINA ROLEND 95/5 (IQF RASPBERRY WHOLE 95/5) U KONTEJNERU",
    "country": "United States",
    "quantity": 18000.0,
    "cost": 69300.0,
    "price": 3.85
  },
  {
    "date": "12/14/2024",
    "product": "ZAMRZNUTA MALINA ROLEND 95/5 (IQF RASPBERRY WHOLE 95/5) U KONTEJNERU",
    "country": "United States",
    "quantity": 18000.0,
    "cost": 71100.0,
    "price": 3.95
  },
  {
    "date": "12/20/2024",
    "product": "ZAMRZNUTA MALINA ROLEND 95/5 (IQF RASPBERRY WHOLE 95/5) U KONTEJNERU",
    "country": "United States",
    "quantity": 18000.0,
    "cost": 71100.0,
    "price": 3.95
  },
  {
    "date": "12/20/2024",
    "product": "ZAMRZNUTA MALINA ROLEND 95/5 (IQF RASPBERRY WHOLE 95/5) U KONTEJNERU",
    "country": "United States",
    "quantity": 18000.0,
    "cost": 71100.0,
    "price": 3.95
  },
  {
    "date": "12/21/2024",
    "product": "ZAMRZNUTA MALINA ROLEND (IQF RASPBERRY WHOLE) U KONTEJNERU",
    "country": "United States",
    "quantity": 7344.0,
    "cost": 31579.2,
    "price": 4.3
  },
  {
    "date": "12/27/2024",
    "product": "ZAMRZNUTA MALINA ( IQF RASPBERRY 24X340GR ) U KONTEJNERU BROJ:",
    "country": "United States",
    "quantity": 14688.0,
    "cost": 63158.4,
    "price": 4.3
  },
  {
    "date": "12/27/2024",
    "product": "ZAMRZNUTA MALINA ROLEND 95/5 (IQF RASPBERRY WHOLE 95/5) U KONTEJNERU",
    "country": "United States",
    "quantity": 18000.0,
    "cost": 70200.0,
    "price": 3.9
  },
  {
    "date": "12/27/2024",
    "product": "ZAMRZNUTA MALINA ROLEND 95/5 (IQF RASPBERRY WHOLE 95/5) U KONTEJNERU",
    "country": "United States",
    "quantity": 18000.0,
    "cost": 70200.0,
    "price": 3.9
  },
  {
    "date": "12/30/2024",
    "product": "ZAMRZNUTA MALINA ROLEND 95/5 (IQF RASPBERRY WHOLE 95/5) U KONTEJNERU",
    "country": "United States",
    "quantity": 18000.0,
    "cost": 71100.0,
    "price": 3.95
  },
  {
    "date": "2024-01-19",
    "product": "DUBOKO ZAMRZNUTA MALINA 300G",
    "country": "United Arab Emirates",
    "quantity": 2052,
    "cost": 8071.2,
    "price": 3.93
  },
  {
    "date": "2024-01-19",
    "product": "UZORAK DUBOKO ZAMRZNUTE MALINE 300G",
    "country": "United Arab Emirates",
    "quantity": 0,
    "cost": 1.0,
    "price": 1.11
  },
  {
    "date": "2024-01-10",
    "product": "DUBOKO ZAMRZNUTA MALINA 250G SPAR",
    "country": "Austria",
    "quantity": 2400,
    "cost": 9024.0,
    "price": 3.76
  },
  {
    "date": "2024-01-15",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 20X500GR",
    "country": "Austria",
    "quantity": 17820,
    "cost": 43659.0,
    "price": 2.45
  },
  {
    "date": "2024-01-30",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 6X500GR; 20X500GR",
    "country": "Austria",
    "quantity": 14940,
    "cost": 36372.6,
    "price": 2.43
  },
  {
    "date": "2024-01-06",
    "product": "DZ MALINA (S-BUDGET), PAK. 500G",
    "country": "Austria",
    "quantity": 8748,
    "cost": 25806.6,
    "price": 2.95
  },
  {
    "date": "2024-01-18",
    "product": "DUBOKO ZAMRZNUTA MALINA CELA 10X1KG, DUBOKO ZAMRZNUTA MALINA",
    "country": "Australia",
    "quantity": 16000,
    "cost": 53629.62,
    "price": 3.35
  },
  {
    "date": "2024-01-04",
    "product": "D.Z. MALINA, PAK. 1 KG",
    "country": "Australia",
    "quantity": 5400,
    "cost": 17698.63,
    "price": 3.28
  },
  {
    "date": "2024-01-29",
    "product": "D\\Z MALINA \"ROLEND-WHOLE 750G\"",
    "country": "Belgium",
    "quantity": 14701,
    "cost": 38811.96,
    "price": 2.64
  },
  {
    "date": "2024-01-05",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 5X1KG",
    "country": "Belgium",
    "quantity": 13200,
    "cost": 36524.4,
    "price": 2.77
  },
  {
    "date": "2024-01-12",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X250GR",
    "country": "Belgium",
    "quantity": 15840,
    "cost": 44985.6,
    "price": 2.84
  },
  {
    "date": "2024-01-13",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:6X750GR",
    "country": "Belgium",
    "quantity": 14701,
    "cost": 38811.96,
    "price": 2.64
  },
  {
    "date": "2024-01-27",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X250GR",
    "country": "Belgium",
    "quantity": 15840,
    "cost": 44985.6,
    "price": 2.84
  },
  {
    "date": "2024-01-04",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:5X1 KG",
    "country": "Belgium",
    "quantity": 16500,
    "cost": 89100.0,
    "price": 5.4
  },
  {
    "date": "2024-01-11",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 5X1KG",
    "country": "Belgium",
    "quantity": 16500,
    "cost": 89100.0,
    "price": 5.4
  },
  {
    "date": "2024-01-25",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 5X1KG",
    "country": "Belgium",
    "quantity": 16500,
    "cost": 89100.0,
    "price": 5.4
  },
  {
    "date": "2024-01-29",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "Belgium",
    "quantity": 16380,
    "cost": 47010.6,
    "price": 2.87
  },
  {
    "date": "2024-01-15",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X300GR; 20X500GR",
    "country": "Belgium",
    "quantity": 16290,
    "cost": 43718.09,
    "price": 2.68
  },
  {
    "date": "2024-01-19",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "Belgium",
    "quantity": 6400,
    "cost": 17280.0,
    "price": 2.7
  },
  {
    "date": "2024-01-05",
    "product": "DZ MALINA (CROPS, CARREFOUR), PAK. 500G",
    "country": "Belgium",
    "quantity": 14300,
    "cost": 38070.5,
    "price": 2.66
  },
  {
    "date": "2024-01-13",
    "product": "DZ MALINA (COLES), PAK. 500G",
    "country": "Belgium",
    "quantity": 36036,
    "cost": 154810.66,
    "price": 4.3
  },
  {
    "date": "2024-01-15",
    "product": "DZ MALINA (COLES), PAK. 500G",
    "country": "Belgium",
    "quantity": 18018,
    "cost": 77405.33,
    "price": 4.3
  },
  {
    "date": "2024-01-16",
    "product": "DZ MALINA (COLES), PAK. 500G",
    "country": "Belgium",
    "quantity": 18018,
    "cost": 77405.33,
    "price": 4.3
  },
  {
    "date": "2024-01-19",
    "product": "DZ MALINA (COLES), PAK. 500G",
    "country": "Belgium",
    "quantity": 18018,
    "cost": 77405.33,
    "price": 4.3
  },
  {
    "date": "2024-01-20",
    "product": "DZ MALINA (COLES), PAK. 500G",
    "country": "Belgium",
    "quantity": 36036,
    "cost": 154810.66,
    "price": 4.3
  },
  {
    "date": "2024-01-27",
    "product": "DZ MALINA (COLES), PAK. 500G",
    "country": "Belgium",
    "quantity": 18018,
    "cost": 77405.33,
    "price": 4.3
  },
  {
    "date": "2024-01-29",
    "product": "DZ MALINA (COLES), PAK. 500G",
    "country": "Belgium",
    "quantity": 18018,
    "cost": 77405.33,
    "price": 4.3
  },
  {
    "date": "2024-01-12",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:4X2,5KG",
    "country": "BG",
    "quantity": 20480,
    "cost": 56320.0,
    "price": 2.75
  },
  {
    "date": "2024-01-11",
    "product": "D/Z KONVENCIONALNA MALINA ROLEND",
    "country": "CA",
    "quantity": 20520,
    "cost": 56430.0,
    "price": 2.75
  },
  {
    "date": "2024-01-25",
    "product": "DZ MALINA ROLEND",
    "country": "CA",
    "quantity": 13700,
    "cost": 49868.0,
    "price": 3.64
  },
  {
    "date": "2024-01-05",
    "product": "DZ MALINA ROLEND",
    "country": "CA",
    "quantity": 20000,
    "cost": 54000.0,
    "price": 2.7
  },
  {
    "date": "2024-01-09",
    "product": "DZ MALINA ROLEND PAK.2X2,5 KG",
    "country": "CH",
    "quantity": 2475,
    "cost": 6435.0,
    "price": 2.6
  },
  {
    "date": "2024-01-09",
    "product": "DUBOKO ZAMRZNUTA MALINA 250G",
    "country": "CH",
    "quantity": 2880,
    "cost": 11664.0,
    "price": 4.05
  },
  {
    "date": "2024-01-12",
    "product": "DUBOKO ZAMRZNUTA MALINA 250G",
    "country": "CH",
    "quantity": 3240,
    "cost": 13122.0,
    "price": 4.05
  },
  {
    "date": "2024-01-19",
    "product": "DUBOKO ZAMRZNUTA MALINA 250G",
    "country": "CH",
    "quantity": 2160,
    "cost": 8748.0,
    "price": 4.05
  },
  {
    "date": "2024-01-30",
    "product": "DUBOKO ZAMRZNUTA MALINA 250G",
    "country": "CH",
    "quantity": 4680,
    "cost": 18954.0,
    "price": 4.05
  },
  {
    "date": "2024-01-15",
    "product": "ZAMRZNUTA MALINA , PAKOVANJE:12X500GR",
    "country": "CH",
    "quantity": 6426,
    "cost": 22407.15,
    "price": 3.49
  },
  {
    "date": "2024-01-05",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5 KG",
    "country": "CH",
    "quantity": 20790,
    "cost": 59251.5,
    "price": 2.85
  },
  {
    "date": "2024-01-05",
    "product": "DZ MALINA ROLEND",
    "country": "CL",
    "quantity": 20000,
    "cost": 61000.0,
    "price": 3.05
  },
  {
    "date": "2024-01-20",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 10X1KG",
    "country": "Germany",
    "quantity": 20790,
    "cost": 47130.93,
    "price": 2.27
  },
  {
    "date": "2024-01-27",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 10X1KG",
    "country": "Germany",
    "quantity": 20790,
    "cost": 47130.93,
    "price": 2.27
  },
  {
    "date": "2024-01-12",
    "product": "DUBOKO ZAMRZNUTA MALINA PAKOVANJE 750 GR",
    "country": "Germany",
    "quantity": 16038,
    "cost": 56667.6,
    "price": 3.53
  },
  {
    "date": "2024-01-03",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 10X500GR",
    "country": "Germany",
    "quantity": 12375,
    "cost": 30071.25,
    "price": 2.43
  },
  {
    "date": "2024-01-03",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 12X750GR",
    "country": "Germany",
    "quantity": 18711,
    "cost": 46029.06,
    "price": 2.46
  },
  {
    "date": "2024-01-06",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 10X500GR",
    "country": "Germany",
    "quantity": 16335,
    "cost": 39694.05,
    "price": 2.43
  },
  {
    "date": "2024-01-08",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 6X500GR; 10X300GR",
    "country": "Germany",
    "quantity": 9468,
    "cost": 22766.4,
    "price": 2.4
  },
  {
    "date": "2024-01-13",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 10X500GR",
    "country": "Germany",
    "quantity": 9405,
    "cost": 22854.15,
    "price": 2.43
  },
  {
    "date": "2024-01-27",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 12X750GR",
    "country": "Germany",
    "quantity": 18144,
    "cost": 44634.24,
    "price": 2.46
  },
  {
    "date": "2024-01-27",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE 10X500GR",
    "country": "Germany",
    "quantity": 11880,
    "cost": 28868.4,
    "price": 2.43
  },
  {
    "date": "2024-01-29",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 12X750GR",
    "country": "Germany",
    "quantity": 3402,
    "cost": 8368.92,
    "price": 2.46
  },
  {
    "date": "2024-01-13",
    "product": "D/Z MALINA - DEEP FROZEN RASPBERRY ROLLEND 12X750GR",
    "country": "Germany",
    "quantity": 18711,
    "cost": 47900.16,
    "price": 2.56
  },
  {
    "date": "2024-01-29",
    "product": "D/Z MALINA - DEEP FROZEN RASPBERRY ROLLEND 12X750GR",
    "country": "Germany",
    "quantity": 15309,
    "cost": 37629.52,
    "price": 2.46
  },
  {
    "date": "2024-01-30",
    "product": "D/Z MALINA - DEEP FROZEN RASPBERRY ROLLEND 4X2,5 KG LOT:EB2400027",
    "country": "Germany",
    "quantity": 20790,
    "cost": 47401.2,
    "price": 2.28
  },
  {
    "date": "2024-01-26",
    "product": "DUBOKO ZAMRZNUTA MALINA 90/10 - WILLAMETTE",
    "country": "Germany",
    "quantity": 20790,
    "cost": 46652.76,
    "price": 2.24
  },
  {
    "date": "2024-01-19",
    "product": "DZ MALINA ROLEND",
    "country": "Germany",
    "quantity": 15680,
    "cost": 40768.0,
    "price": 2.6
  },
  {
    "date": "2024-01-30",
    "product": "DZ MALINA ROLEND",
    "country": "Germany",
    "quantity": 9240,
    "cost": 24024.0,
    "price": 2.6
  },
  {
    "date": "2024-01-04",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:12X750GR",
    "country": "Germany",
    "quantity": 41310,
    "cost": 112776.3,
    "price": 2.73
  },
  {
    "date": "2024-01-11",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:12X750GR",
    "country": "Germany",
    "quantity": 19359,
    "cost": 52850.07,
    "price": 2.73
  },
  {
    "date": "2024-01-12",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:12X750GR",
    "country": "Germany",
    "quantity": 20655,
    "cost": 56388.15,
    "price": 2.73
  },
  {
    "date": "2024-01-06",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 24X350GR",
    "country": "Germany",
    "quantity": 19958,
    "cost": 50993.71,
    "price": 2.55
  },
  {
    "date": "2024-01-08",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 18X500GR",
    "country": "Germany",
    "quantity": 18711,
    "cost": 48592.47,
    "price": 2.6
  },
  {
    "date": "2024-01-08",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 24X350GR",
    "country": "Germany",
    "quantity": 19958,
    "cost": 50993.71,
    "price": 2.55
  },
  {
    "date": "2024-01-08",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:14X500GR",
    "country": "Germany",
    "quantity": 18480,
    "cost": 45091.2,
    "price": 2.44
  },
  {
    "date": "2024-01-09",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 14X500GR",
    "country": "Germany",
    "quantity": 14784,
    "cost": 36856.51,
    "price": 2.49
  },
  {
    "date": "2024-01-09",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "Germany",
    "quantity": 40410,
    "cost": 100625.4,
    "price": 2.49
  },
  {
    "date": "2024-01-10",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "Germany",
    "quantity": 13230,
    "cost": 33604.2,
    "price": 2.54
  },
  {
    "date": "2024-01-10",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:14X500GR",
    "country": "Germany",
    "quantity": 18480,
    "cost": 45091.2,
    "price": 2.44
  },
  {
    "date": "2024-01-13",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X500GR",
    "country": "Germany",
    "quantity": 16335,
    "cost": 41490.9,
    "price": 2.54
  },
  {
    "date": "2024-01-13",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 14X500GR",
    "country": "Germany",
    "quantity": 14784,
    "cost": 36856.51,
    "price": 2.49
  },
  {
    "date": "2024-01-13",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 18X500GR",
    "country": "Germany",
    "quantity": 18711,
    "cost": 48592.47,
    "price": 2.6
  },
  {
    "date": "2024-01-13",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "Germany",
    "quantity": 40570,
    "cost": 100007.8,
    "price": 2.47
  },
  {
    "date": "2024-01-13",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:14X500GR",
    "country": "Germany",
    "quantity": 18480,
    "cost": 45091.2,
    "price": 2.44
  },
  {
    "date": "2024-01-15",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 14X500GR",
    "country": "Germany",
    "quantity": 6720,
    "cost": 16396.8,
    "price": 2.44
  },
  {
    "date": "2024-01-16",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "Germany",
    "quantity": 36720,
    "cost": 93268.8,
    "price": 2.54
  },
  {
    "date": "2024-01-16",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR; 14X500GR",
    "country": "Germany",
    "quantity": 19600,
    "cost": 48832.0,
    "price": 2.49
  },
  {
    "date": "2024-01-16",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:14X500GR",
    "country": "Germany",
    "quantity": 18480,
    "cost": 45091.2,
    "price": 2.44
  },
  {
    "date": "2024-01-17",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 14X500GR",
    "country": "Germany",
    "quantity": 14784,
    "cost": 36856.51,
    "price": 2.49
  },
  {
    "date": "2024-01-20",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X500GR",
    "country": "Germany",
    "quantity": 16335,
    "cost": 41490.9,
    "price": 2.54
  },
  {
    "date": "2024-01-20",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 14X500GR",
    "country": "Germany",
    "quantity": 14784,
    "cost": 36856.51,
    "price": 2.49
  },
  {
    "date": "2024-01-20",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "Germany",
    "quantity": 40410,
    "cost": 100625.4,
    "price": 2.49
  },
  {
    "date": "2024-01-20",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 6X500GR; 14X500GR",
    "country": "Germany",
    "quantity": 15692,
    "cost": 38288.48,
    "price": 2.44
  },
  {
    "date": "2024-01-23",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X300GR; 20X500GR",
    "country": "Germany",
    "quantity": 19790,
    "cost": 49021.55,
    "price": 2.48
  },
  {
    "date": "2024-01-23",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "Germany",
    "quantity": 27810,
    "cost": 70637.4,
    "price": 2.54
  },
  {
    "date": "2024-01-23",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:14X500GR",
    "country": "Germany",
    "quantity": 18480,
    "cost": 45091.2,
    "price": 2.44
  },
  {
    "date": "2024-01-23",
    "product": "ZAMRZNUTA ORGANSKA MALINA, PAKOVANJE: 10X300GR; 16X300GR",
    "country": "Germany",
    "quantity": 9561,
    "cost": 37653.58,
    "price": 3.94
  },
  {
    "date": "2024-01-27",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X500GR",
    "country": "Germany",
    "quantity": 16335,
    "cost": 41490.9,
    "price": 2.54
  },
  {
    "date": "2024-01-27",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 16X500GR",
    "country": "Germany",
    "quantity": 14784,
    "cost": 37140.36,
    "price": 2.51
  },
  {
    "date": "2024-01-27",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "Germany",
    "quantity": 72470,
    "cost": 183181.0,
    "price": 2.53
  },
  {
    "date": "2024-01-27",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 24X350GR",
    "country": "Germany",
    "quantity": 19958,
    "cost": 50993.71,
    "price": 2.55
  },
  {
    "date": "2024-01-29",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 14X500GR",
    "country": "Germany",
    "quantity": 14784,
    "cost": 36753.02,
    "price": 2.49
  },
  {
    "date": "2024-01-29",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 24X350GR",
    "country": "Germany",
    "quantity": 19958,
    "cost": 50993.71,
    "price": 2.55
  },
  {
    "date": "2024-01-30",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "Germany",
    "quantity": 40500,
    "cost": 102973.28,
    "price": 2.54
  },
  {
    "date": "2024-01-30",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 6X500GR",
    "country": "Germany",
    "quantity": 8712,
    "cost": 21257.28,
    "price": 2.44
  },
  {
    "date": "2024-01-30",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:14X500GR",
    "country": "Germany",
    "quantity": 18480,
    "cost": 45091.2,
    "price": 2.44
  },
  {
    "date": "2024-01-08",
    "product": "DZ MALINA-TK-HIMBEEREN ALL SEASONS 14X500G,PAKOVANJE 1X7KG",
    "country": "Germany",
    "quantity": 18480,
    "cost": 45091.2,
    "price": 2.44
  },
  {
    "date": "2024-01-16",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 12X750KG",
    "country": "Germany",
    "quantity": 9639,
    "cost": 21784.14,
    "price": 2.26
  },
  {
    "date": "2024-01-12",
    "product": "-D/Z MALINA ROLEND PAK.U 675KUT.L4009/09.01.2026 - MATERIAL NO.",
    "country": "Germany",
    "quantity": 6750,
    "cost": 21262.5,
    "price": 3.15
  },
  {
    "date": "2024-01-26",
    "product": "ZAMRZNUTA MALINA VILAMET ROLEND 4X2.5KG, PO FAK. 7E/2024.",
    "country": "Germany",
    "quantity": 20790,
    "cost": 51975.0,
    "price": 2.5
  },
  {
    "date": "2024-01-26",
    "product": "DZ MALINA CELA \"IQF RASPBERRIES WHOLE\" 4*2,5KG; CONTRACT:2023-08;",
    "country": "Germany",
    "quantity": 20000,
    "cost": 44000.0,
    "price": 2.2
  },
  {
    "date": "2024-01-05",
    "product": "D/Z MALINA 500G",
    "country": "Germany",
    "quantity": 58113,
    "cost": 138765.22,
    "price": 2.39
  },
  {
    "date": "2024-01-08",
    "product": "D/Z MALINA 300G, D/Z MALINA 500G",
    "country": "Germany",
    "quantity": 14640,
    "cost": 35103.36,
    "price": 2.4
  },
  {
    "date": "2024-01-09",
    "product": "D/Z MALINA 500G",
    "country": "Germany",
    "quantity": 25200,
    "cost": 62249.04,
    "price": 2.47
  },
  {
    "date": "2024-01-12",
    "product": "D/Z MALINA 500G",
    "country": "Germany",
    "quantity": 14850,
    "cost": 35687.52,
    "price": 2.4
  },
  {
    "date": "2024-01-13",
    "product": "D/Z MALINA 500G",
    "country": "Germany",
    "quantity": 15840,
    "cost": 37246.18,
    "price": 2.35
  },
  {
    "date": "2024-01-15",
    "product": "D/Z MALINA 500G",
    "country": "Germany",
    "quantity": 15840,
    "cost": 37189.15,
    "price": 2.35
  },
  {
    "date": "2024-01-17",
    "product": "D/Z MALINA 500G",
    "country": "Germany",
    "quantity": 14850,
    "cost": 35625.15,
    "price": 2.4
  },
  {
    "date": "2024-01-19",
    "product": "D/Z MALINA 500G",
    "country": "Germany",
    "quantity": 15840,
    "cost": 37170.14,
    "price": 2.35
  },
  {
    "date": "2024-01-19",
    "product": "D/Z MALINA 500G, 750G",
    "country": "Germany",
    "quantity": 15138,
    "cost": 36325.87,
    "price": 2.4
  },
  {
    "date": "2024-01-20",
    "product": "D/Z MALINA 500G",
    "country": "Germany",
    "quantity": 15840,
    "cost": 37125.79,
    "price": 2.34
  },
  {
    "date": "2024-01-22",
    "product": "D/Z MALINA 750G",
    "country": "Germany",
    "quantity": 16038,
    "cost": 36637.21,
    "price": 2.28
  },
  {
    "date": "2024-01-23",
    "product": "D/Z MALINA 750G",
    "country": "Germany",
    "quantity": 16038,
    "cost": 29892.69,
    "price": 1.86
  },
  {
    "date": "2024-01-26",
    "product": "D/Z MALINA 500G",
    "country": "Germany",
    "quantity": 15840,
    "cost": 37189.15,
    "price": 2.35
  },
  {
    "date": "2024-01-27",
    "product": "D/Z MALINA 500G",
    "country": "Germany",
    "quantity": 11583,
    "cost": 28779.12,
    "price": 2.48
  },
  {
    "date": "2024-01-30",
    "product": "D/Z MALINA 300G",
    "country": "Germany",
    "quantity": 5040,
    "cost": 12600.0,
    "price": 2.5
  },
  {
    "date": "2024-01-13",
    "product": "D/Z MALINA 300G.",
    "country": "Germany",
    "quantity": 16632,
    "cost": 41674.25,
    "price": 2.51
  },
  {
    "date": "2024-01-17",
    "product": "D.Z. MALINA ROLEND, PAK. 200 GR",
    "country": "DK",
    "quantity": 1008,
    "cost": 5670.0,
    "price": 5.63
  },
  {
    "date": "2024-01-22",
    "product": "DUBOKO ZAMRZNUTA MALINA 1/5 KG (10X500G) -K-MENU, DUBOKO",
    "country": "FI",
    "quantity": 7152,
    "cost": 23772.0,
    "price": 3.32
  },
  {
    "date": "2024-01-05",
    "product": "D.Z. MALINA ROLEND, PAK. 200 G",
    "country": "FI",
    "quantity": 12988,
    "cost": 59244.62,
    "price": 4.56
  },
  {
    "date": "2024-01-15",
    "product": "D/Z MALINA ROLEND PAK.5X1 KG",
    "country": "France",
    "quantity": 17820,
    "cost": 77338.8,
    "price": 4.34
  },
  {
    "date": "2024-01-22",
    "product": "D/Z MALINA ROLEND PAK.10 KG",
    "country": "France",
    "quantity": 20790,
    "cost": 54054.0,
    "price": 2.6
  },
  {
    "date": "2024-01-12",
    "product": "DZ MALINA ROLEND 4X2,5KG",
    "country": "France",
    "quantity": 9100,
    "cost": 35035.0,
    "price": 3.85
  },
  {
    "date": "2024-01-09",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 12X0,5KG; 4X2,5KG",
    "country": "France",
    "quantity": 13824,
    "cost": 42336.0,
    "price": 3.06
  },
  {
    "date": "2024-01-09",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 12X500GR",
    "country": "France",
    "quantity": 8400,
    "cost": 27300.0,
    "price": 3.25
  },
  {
    "date": "2024-01-05",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 6X0,5KG",
    "country": "France",
    "quantity": 6,
    "cost": 14.7,
    "price": 2.45
  },
  {
    "date": "2024-01-10",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 6X0,5KG",
    "country": "France",
    "quantity": 3,
    "cost": 7.95,
    "price": 2.65
  },
  {
    "date": "2024-01-12",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 6X0,5KG",
    "country": "France",
    "quantity": 3,
    "cost": 7.35,
    "price": 2.45
  },
  {
    "date": "2024-01-15",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 6X0,5KG",
    "country": "France",
    "quantity": 3,
    "cost": 7.65,
    "price": 2.55
  },
  {
    "date": "2024-01-19",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X0,5KG; 2X0,5KG",
    "country": "France",
    "quantity": 3,
    "cost": 7.65,
    "price": 2.55
  },
  {
    "date": "2024-01-19",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 6X0,5KG",
    "country": "France",
    "quantity": 3,
    "cost": 7.65,
    "price": 2.55
  },
  {
    "date": "2024-01-22",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 6X0,5KG",
    "country": "France",
    "quantity": 6,
    "cost": 14.7,
    "price": 2.45
  },
  {
    "date": "2024-01-23",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 6X0,5KG",
    "country": "France",
    "quantity": 3,
    "cost": 7.35,
    "price": 2.45
  },
  {
    "date": "2024-01-20",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 5X1KG; 4X2,5KG",
    "country": "France",
    "quantity": 18620,
    "cost": 45717.2,
    "price": 2.46
  },
  {
    "date": "2024-01-26",
    "product": "DZ MALINA ROLEND",
    "country": "France",
    "quantity": 10692,
    "cost": 32076.0,
    "price": 3.0
  },
  {
    "date": "2024-01-26",
    "product": "D\\Z MALINA -WILLAMETTE \"ROLEND\" 5\\1 - 3.564 KUTIJA",
    "country": "France",
    "quantity": 17820,
    "cost": 48114.0,
    "price": 2.7
  },
  {
    "date": "2024-01-30",
    "product": "D\\Z MALINA ROLEND 5X1KG- VILAMET, LOT:232978 DF RASPBERRY IQF",
    "country": "France",
    "quantity": 19176,
    "cost": 57600.0,
    "price": 3.0
  },
  {
    "date": "2024-01-06",
    "product": "DZ MALINA ROLEND",
    "country": "France",
    "quantity": 15840,
    "cost": 38016.0,
    "price": 2.4
  },
  {
    "date": "2024-01-10",
    "product": "D.Z. MALINA, PAK. 500 G",
    "country": "France",
    "quantity": 4050,
    "cost": 12798.0,
    "price": 3.16
  },
  {
    "date": "2024-01-23",
    "product": "D.Z. MALINA, PAK. 500 G",
    "country": "France",
    "quantity": 3600,
    "cost": 11376.0,
    "price": 3.16
  },
  {
    "date": "2024-01-29",
    "product": "D.Z. MALINA, PAK. 500 G",
    "country": "France",
    "quantity": 4950,
    "cost": 15642.0,
    "price": 3.16
  },
  {
    "date": "2024-01-05",
    "product": "D/Z MALINA ROLEND",
    "country": "France",
    "quantity": 17820,
    "cost": 55242.0,
    "price": 3.1
  },
  {
    "date": "2024-01-05",
    "product": "DZ MALINA ROLEND PAK.11 KG",
    "country": "GB",
    "quantity": 20328,
    "cost": 48787.2,
    "price": 2.4
  },
  {
    "date": "2024-01-25",
    "product": "DZ MALINA ROLEND PAK.11 KG",
    "country": "GB",
    "quantity": 20207,
    "cost": 48496.8,
    "price": 2.4
  },
  {
    "date": "2024-01-10",
    "product": "DUBOKO ZAMRZNUTA MALINA 300G (1/4,2 KG)",
    "country": "GB",
    "quantity": 17472,
    "cost": 56681.25,
    "price": 3.24
  },
  {
    "date": "2024-01-11",
    "product": "DUBOKO ZAMRZNUTA MALINA 8X1 KG BOOKER",
    "country": "GB",
    "quantity": 9984,
    "cost": 47311.49,
    "price": 4.74
  },
  {
    "date": "2024-01-15",
    "product": "DUBOKO ZAMRZNUTA MALINA 300G (1/4,2 KG)",
    "country": "GB",
    "quantity": 17472,
    "cost": 56918.67,
    "price": 3.26
  },
  {
    "date": "2024-01-22",
    "product": "DUBOKO ZAMRZNUTA MALINA 300G (1/4,2 KG)",
    "country": "GB",
    "quantity": 17472,
    "cost": 57098.06,
    "price": 3.27
  },
  {
    "date": "2024-01-10",
    "product": "ZAMRZNUTA MALINA 95/5 (IQF RASPBERRY WHOLE 95/5) PO FAKTURI",
    "country": "GB",
    "quantity": 18480,
    "cost": 50820.0,
    "price": 2.75
  },
  {
    "date": "2024-01-11",
    "product": "ZAMRZNUTA MALINA 95/5 (IQF RASPBERRY WHOLE 95/5)PO FAKTURI",
    "country": "GB",
    "quantity": 18480,
    "cost": 54885.6,
    "price": 2.97
  },
  {
    "date": "2024-01-19",
    "product": "ZAMRZNUTA MALINA ROLEND 95/5 (IQF RASPBERRY WHOLE 95/5) PO",
    "country": "GB",
    "quantity": 18480,
    "cost": 54885.6,
    "price": 2.97
  },
  {
    "date": "2024-01-31",
    "product": "ZAMRZNUTA MALINA 95/5 (IQF RASPBERRY WHOLE 95/5) PO FAKTURI",
    "country": "GB",
    "quantity": 18480,
    "cost": 50820.0,
    "price": 2.75
  },
  {
    "date": "2024-01-05",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "GB",
    "quantity": 20790,
    "cost": 59667.3,
    "price": 2.87
  },
  {
    "date": "2024-01-08",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "GB",
    "quantity": 20790,
    "cost": 51351.3,
    "price": 2.47
  },
  {
    "date": "2024-01-10",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "GB",
    "quantity": 20790,
    "cost": 59667.3,
    "price": 2.87
  },
  {
    "date": "2024-01-12",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "GB",
    "quantity": 20790,
    "cost": 59667.3,
    "price": 2.87
  },
  {
    "date": "2024-01-15",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "GB",
    "quantity": 20790,
    "cost": 59667.3,
    "price": 2.87
  },
  {
    "date": "2024-01-18",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "GB",
    "quantity": 20790,
    "cost": 59667.3,
    "price": 2.87
  },
  {
    "date": "2024-01-22",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "GB",
    "quantity": 20790,
    "cost": 51351.3,
    "price": 2.47
  },
  {
    "date": "2024-01-25",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "GB",
    "quantity": 20790,
    "cost": 51351.3,
    "price": 2.47
  },
  {
    "date": "2024-01-26",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "GB",
    "quantity": 20790,
    "cost": 59667.3,
    "price": 2.87
  },
  {
    "date": "2024-01-29",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "GB",
    "quantity": 20790,
    "cost": 52390.8,
    "price": 2.52
  },
  {
    "date": "2024-01-24",
    "product": "BSM MALINA 450G PO FAKTURI",
    "country": "HR",
    "quantity": 1008,
    "cost": 4771.2,
    "price": 4.73
  },
  {
    "date": "2024-01-09",
    "product": "DUBOKO ZAMRZNUTA MALINA 300G,DUBOKO ZAMRZNUTA MALINA 4 X",
    "country": "HR",
    "quantity": 10969,
    "cost": 32661.76,
    "price": 2.98
  },
  {
    "date": "2024-01-22",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 10X250GR; 10X500GR",
    "country": "HU",
    "quantity": 7320,
    "cost": 19272.0,
    "price": 2.63
  },
  {
    "date": "2024-01-10",
    "product": "D/Z MALINA 95/5 BR.UGOVORA 003/2023",
    "country": "HU",
    "quantity": 10032,
    "cost": 26735.28,
    "price": 2.67
  },
  {
    "date": "2024-01-09",
    "product": "DZ MALINA 90/10",
    "country": "HU",
    "quantity": 20480,
    "cost": 50483.2,
    "price": 2.47
  },
  {
    "date": "2024-01-04",
    "product": "D.Z. MALINA, PAK. 4X2,5 KG",
    "country": "IN",
    "quantity": 6000,
    "cost": 21000.0,
    "price": 3.5
  },
  {
    "date": "2024-01-15",
    "product": "D/Z MALINA-FROZEN RASPBERRY,PAKOVANJE 4 X 2,5 KG",
    "country": "IT",
    "quantity": 20480,
    "cost": 51200.0,
    "price": 2.5
  },
  {
    "date": "2024-01-13",
    "product": "DZ MALINA ROLEND 4X2,5KG.",
    "country": "IT",
    "quantity": 6400,
    "cost": 14720.0,
    "price": 2.3
  },
  {
    "date": "2024-01-19",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 20X500GR",
    "country": "JP",
    "quantity": 18270,
    "cost": 67964.4,
    "price": 3.72
  },
  {
    "date": "2024-01-11",
    "product": "SMRZNUTE MALINE",
    "country": "ME",
    "quantity": 499,
    "cost": 3011.84,
    "price": 6.03
  },
  {
    "date": "2024-01-19",
    "product": "SMRZNUTE MALINE",
    "country": "ME",
    "quantity": 499,
    "cost": 3011.84,
    "price": 6.03
  },
  {
    "date": "2024-01-31",
    "product": "SMRZNUTE MALINE",
    "country": "ME",
    "quantity": 499,
    "cost": 3011.84,
    "price": 6.03
  },
  {
    "date": "2024-01-26",
    "product": "DZ MALINA,PAK.2,5 KG,PROIZVOĐAČ:ARETOL DOO,NOVI SAD",
    "country": "ME",
    "quantity": 640,
    "cost": 2060.8,
    "price": 3.22
  },
  {
    "date": "2024-01-16",
    "product": "MALINA 300 GR FAKTURA: 91215917 STAVKA: 8",
    "country": "MK",
    "quantity": 499,
    "cost": 3011.84,
    "price": 6.03
  },
  {
    "date": "2024-01-31",
    "product": "MALINA 300 GR FAKTURA: 91233249 STAVKA: 15",
    "country": "MK",
    "quantity": 499,
    "cost": 3011.84,
    "price": 6.03
  },
  {
    "date": "2024-01-22",
    "product": "DZ MALINA ROLEND PAK.4X2,5KG",
    "country": "Netherlands",
    "quantity": 20790,
    "cost": 46257.75,
    "price": 2.23
  },
  {
    "date": "2024-01-16",
    "product": "DUBOKO ZAMRZNUTA MALINA 250G, DUBOKO ZAMRZNUTA MALINA 750G",
    "country": "Netherlands",
    "quantity": 4184,
    "cost": 14802.67,
    "price": 3.54
  },
  {
    "date": "2024-01-08",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "Netherlands",
    "quantity": 10240,
    "cost": 24576.0,
    "price": 2.4
  },
  {
    "date": "2024-01-09",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:10X300GR",
    "country": "Netherlands",
    "quantity": 6336,
    "cost": 17107.2,
    "price": 2.7
  },
  {
    "date": "2024-01-12",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "Netherlands",
    "quantity": 20480,
    "cost": 49152.0,
    "price": 2.4
  },
  {
    "date": "2024-01-19",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "Netherlands",
    "quantity": 20480,
    "cost": 49152.0,
    "price": 2.4
  },
  {
    "date": "2024-01-26",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:10X300GR",
    "country": "Netherlands",
    "quantity": 5760,
    "cost": 15552.0,
    "price": 2.7
  },
  {
    "date": "2024-01-19",
    "product": "ZAMRZNUTA MALINA ROLEND 90/10, PAKOVANJE: 750GR I 500GR",
    "country": "Netherlands",
    "quantity": 19312,
    "cost": 43952.32,
    "price": 2.28
  },
  {
    "date": "2024-01-15",
    "product": "D.Z. MALINA ROLEND 90/10, PAK. 500 G",
    "country": "Netherlands",
    "quantity": 20480,
    "cost": 49152.0,
    "price": 2.4
  },
  {
    "date": "2024-01-20",
    "product": "D.Z. MALINA ROLEND 90/10, PAK. 500 G",
    "country": "Netherlands",
    "quantity": 20480,
    "cost": 49152.0,
    "price": 2.4
  },
  {
    "date": "2024-01-27",
    "product": "D.Z. MALINA ROLEND 90/10, PAK. 500 G",
    "country": "Netherlands",
    "quantity": 20480,
    "cost": 49152.0,
    "price": 2.4
  },
  {
    "date": "2024-01-22",
    "product": "DZ MALINA ROLEND (4X2,5KG).",
    "country": "Netherlands",
    "quantity": 10240,
    "cost": 26931.2,
    "price": 2.63
  },
  {
    "date": "2024-01-10",
    "product": "D.Z. MALINA, PAK. 750 G",
    "country": "Netherlands",
    "quantity": 5832,
    "cost": 29782.08,
    "price": 5.11
  },
  {
    "date": "2024-01-29",
    "product": "D.Z. MALINA, PAK. 750 G",
    "country": "Netherlands",
    "quantity": 5832,
    "cost": 29782.08,
    "price": 5.11
  },
  {
    "date": "2024-01-10",
    "product": "D/Z MALINA 250G,750G / D/F RASPBERRY 250G,750G",
    "country": "Netherlands",
    "quantity": 7476,
    "cost": 17826.58,
    "price": 2.38
  },
  {
    "date": "2024-01-22",
    "product": "D/Z MALINA 250G,750G / D/F RASPBERRY 250G,750G",
    "country": "Netherlands",
    "quantity": 6384,
    "cost": 15311.59,
    "price": 2.4
  },
  {
    "date": "2024-01-24",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE 11KG/1",
    "country": "NO",
    "quantity": 20328,
    "cost": 60984.0,
    "price": 3.0
  },
  {
    "date": "2024-01-27",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE 2X2,5KG",
    "country": "NO",
    "quantity": 19530,
    "cost": 62496.0,
    "price": 3.2
  },
  {
    "date": "2024-01-19",
    "product": "D.Z. MALINA, PAK. 300 G",
    "country": "NO",
    "quantity": 13230,
    "cost": 47760.3,
    "price": 3.61
  },
  {
    "date": "2024-01-19",
    "product": "D.Z. MALINA, PAK. 400G I 2KG",
    "country": "NO",
    "quantity": 16857,
    "cost": 61156.08,
    "price": 3.63
  },
  {
    "date": "2024-01-29",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 12X750GR",
    "country": "NZ",
    "quantity": 18270,
    "cost": 78012.9,
    "price": 4.27
  },
  {
    "date": "2024-01-09",
    "product": "DZ MALINA 90/10",
    "country": "Poland",
    "quantity": 20328,
    "cost": 50820.0,
    "price": 2.5
  },
  {
    "date": "2024-01-15",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE:11/1KG",
    "country": "Poland",
    "quantity": 20328,
    "cost": 49193.76,
    "price": 2.42
  },
  {
    "date": "2024-01-26",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 16X500GR",
    "country": "Poland",
    "quantity": 16632,
    "cost": 43243.2,
    "price": 2.6
  },
  {
    "date": "2024-01-29",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE 11KG",
    "country": "Poland",
    "quantity": 20328,
    "cost": 50820.0,
    "price": 2.5
  },
  {
    "date": "2024-01-26",
    "product": "D.Z. MALINA ROLEND 90/10",
    "country": "Poland",
    "quantity": 20328,
    "cost": 49193.76,
    "price": 2.42
  },
  {
    "date": "2024-01-16",
    "product": "D/Z MALINA 300G.",
    "country": "PT",
    "quantity": 1209,
    "cost": 2951.02,
    "price": 2.44
  },
  {
    "date": "2024-01-24",
    "product": "DADS FARM RASPBERRY IQF 400 GR - DUBOKO ZAMRZNUTA MALINA",
    "country": "QA",
    "quantity": 1000,
    "cost": 3950.0,
    "price": 3.95
  },
  {
    "date": "2024-01-29",
    "product": "D.Z. MALINA, PAK. 20X350G",
    "country": "QA",
    "quantity": 2065,
    "cost": 9735.0,
    "price": 4.71
  },
  {
    "date": "2024-01-24",
    "product": "D/Z MALINA \"WHOLE\"",
    "country": "RU",
    "quantity": 19530,
    "cost": 44919.0,
    "price": 2.3
  },
  {
    "date": "2024-01-26",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "RU",
    "quantity": 19530,
    "cost": 49801.5,
    "price": 2.55
  },
  {
    "date": "2024-01-06",
    "product": "D.Z. MALINA, PAK. 10X400 G; 5X1 KG",
    "country": "SA",
    "quantity": 4030,
    "cost": 12763.09,
    "price": 3.17
  },
  {
    "date": "2024-01-20",
    "product": "D.Z. MALINA, PAK. 10X400 G; 5X1 KG",
    "country": "SA",
    "quantity": 3380,
    "cost": 10831.32,
    "price": 3.2
  },
  {
    "date": "2024-01-24",
    "product": "D.Z. MALINA, PAK. 350G",
    "country": "SA",
    "quantity": 10080,
    "cost": 50400.0,
    "price": 5.0
  },
  {
    "date": "2024-01-05",
    "product": "DUBOKO ZAMRZNUTA MALINA 250G (10 X 250G=1/2,5KG),DUBOKO",
    "country": "Sweden",
    "quantity": 12105,
    "cost": 36976.5,
    "price": 3.05
  },
  {
    "date": "2024-01-05",
    "product": "DUBOKO ZAMRZNUTA MALINA 500G (10 X 500G=1/5KG),DUBOKO",
    "country": "Sweden",
    "quantity": 13200,
    "cost": 40080.0,
    "price": 3.04
  },
  {
    "date": "2024-01-10",
    "product": "DUBOKO ZAMRZNUTA MALINA 500G (10 X 500G = 1/5 KG), DUBOKO",
    "country": "Sweden",
    "quantity": 12360,
    "cost": 37860.0,
    "price": 3.06
  },
  {
    "date": "2024-01-17",
    "product": "DUBOKO ZAMRZNUTA MALINA 500G (10 X 500G=1/5KG), DUBOKO",
    "country": "Sweden",
    "quantity": 11430,
    "cost": 34719.0,
    "price": 3.04
  },
  {
    "date": "2024-01-19",
    "product": "DUBOKO ZAMRZNUTA MALINA 500G (10 X 500G=1/5KG), DUBOKO",
    "country": "Sweden",
    "quantity": 14970,
    "cost": 46005.0,
    "price": 3.07
  },
  {
    "date": "2024-01-22",
    "product": "DUBOKO ZAMRZNUTA MALINA 500G (10 X 500G=1/5KG), DUBOKO",
    "country": "Sweden",
    "quantity": 12270,
    "cost": 38427.0,
    "price": 3.13
  },
  {
    "date": "2024-01-24",
    "product": "DUBOKO ZAMRZNUTA MALINA 1 KG (10 X 1 KG=1/10KG)",
    "country": "Sweden",
    "quantity": 17700,
    "cost": 53100.0,
    "price": 3.0
  },
  {
    "date": "2024-01-26",
    "product": "DUBOKO ZAMRZNUTA MALINA 500G (10 X 500G=1/5KG), DUBOKO",
    "country": "Sweden",
    "quantity": 13485,
    "cost": 42406.5,
    "price": 3.14
  },
  {
    "date": "2024-01-29",
    "product": "DUBOKO ZAMRZNUTA MALINA 500G (10 X 500G=1/5KG), DUBOKO",
    "country": "Sweden",
    "quantity": 14115,
    "cost": 43723.5,
    "price": 3.1
  },
  {
    "date": "2024-01-31",
    "product": "DUBOKO ZAMRZNUTA MALINA 500G (10 X 500G=1/5KG), DUBOKO",
    "country": "Sweden",
    "quantity": 11760,
    "cost": 35898.0,
    "price": 3.05
  },
  {
    "date": "2024-01-12",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE 12X750GR",
    "country": "Sweden",
    "quantity": 2304,
    "cost": 6912.0,
    "price": 3.0
  },
  {
    "date": "2024-01-11",
    "product": "D.Z. MALINA, PAK. 10X500 G; 10X225 G; 4X2,5 KG",
    "country": "Sweden",
    "quantity": 16296,
    "cost": 58876.08,
    "price": 3.61
  },
  {
    "date": "2024-01-17",
    "product": "D.Z. MALINA ROLEND, PAK. 200 I 400 GR",
    "country": "Sweden",
    "quantity": 12182,
    "cost": 44218.22,
    "price": 3.63
  },
  {
    "date": "2024-01-22",
    "product": "D.Z. MALINA, PAK. 10X500 G; 10X225 G",
    "country": "Sweden",
    "quantity": 16929,
    "cost": 61630.8,
    "price": 3.64
  },
  {
    "date": "2024-01-23",
    "product": "D.Z. MALINA, PAK. 10X500 G; 10X225 G",
    "country": "Sweden",
    "quantity": 16173,
    "cost": 58767.6,
    "price": 3.63
  },
  {
    "date": "2024-01-27",
    "product": "D.Z. MALINA ROLEND, PAK. 2 X 2,5 KG",
    "country": "Sweden",
    "quantity": 8100,
    "cost": 27280.8,
    "price": 3.37
  },
  {
    "date": "2024-01-27",
    "product": "D.Z. MALINA ROLEND, PAK. 200 I 400 G",
    "country": "Sweden",
    "quantity": 25056,
    "cost": 91333.44,
    "price": 3.65
  },
  {
    "date": "2024-01-29",
    "product": "DUBOKO ZAMRZNUTA MALINA 250G SPAR",
    "country": "SI",
    "quantity": 2880,
    "cost": 17625.6,
    "price": 6.12
  },
  {
    "date": "2024-01-19",
    "product": "DUBOKO ZAMRZNUTA MALINA PAKOVANJE 4X2,5 KG",
    "country": "TR",
    "quantity": 21120,
    "cost": 51744.0,
    "price": 2.45
  },
  {
    "date": "2024-01-09",
    "product": "D.Z. MALINA ROLEND, PAK. 4 X 2,5 KG",
    "country": "United States",
    "quantity": 20000,
    "cost": 49000.0,
    "price": 2.45
  },
  {
    "date": "2024-01-12",
    "product": "D.Z. MALINA ROLEND, PAK. 4 X 2,5 KG",
    "country": "United States",
    "quantity": 20000,
    "cost": 49000.0,
    "price": 2.45
  },
  {
    "date": "2024-01-15",
    "product": "D.Z. MALINA ROLEND, PAK. 4 X 2,5 KG",
    "country": "United States",
    "quantity": 20000,
    "cost": 49000.0,
    "price": 2.45
  },
  {
    "date": "2024-01-22",
    "product": "D.Z. MALINA ROLEND, PAK. 4 X 2,5 KG",
    "country": "United States",
    "quantity": 20000,
    "cost": 49400.0,
    "price": 2.47
  },
  {
    "date": "2024-01-22",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 4X2,5KG",
    "country": "UY",
    "quantity": 36000,
    "cost": 141480.0,
    "price": 3.93
  },
  {
    "date": "2024-02-02",
    "product": "DUBOKO ZAMRZNUTA MALINA 300G",
    "country": "United Arab Emirates",
    "quantity": 2052,
    "cost": 8071.2,
    "price": 3.93
  },
  {
    "date": "2024-02-02",
    "product": "DUBOKO ZAMRZNUTA MALINA 250G SPAR",
    "country": "Austria",
    "quantity": 1920,
    "cost": 7219.2,
    "price": 3.76
  },
  {
    "date": "2024-02-27",
    "product": "DUBOKO ZAMRZNUTA MALINA 250G SPAR",
    "country": "Austria",
    "quantity": 4800,
    "cost": 18048.0,
    "price": 3.76
  },
  {
    "date": "2024-02-13",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 6X500GR; 20X500GR",
    "country": "Austria",
    "quantity": 14220,
    "cost": 34551.0,
    "price": 2.43
  },
  {
    "date": "2024-02-27",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 20X500GR",
    "country": "Austria",
    "quantity": 17820,
    "cost": 43659.0,
    "price": 2.45
  },
  {
    "date": "2024-02-03",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X300GR",
    "country": "Austria",
    "quantity": 14850,
    "cost": 40840.47,
    "price": 2.75
  },
  {
    "date": "2024-02-03",
    "product": "DZ MALINA (S-BUDGET), PAK. 500G",
    "country": "Austria",
    "quantity": 16038,
    "cost": 47312.1,
    "price": 2.95
  },
  {
    "date": "2024-02-12",
    "product": "DZ MALINA (S-BUDGET), PAK. 500G",
    "country": "Austria",
    "quantity": 13122,
    "cost": 38709.9,
    "price": 2.95
  },
  {
    "date": "2024-02-19",
    "product": "DZ MALINA (S-BUDGET), PAK. 500G",
    "country": "Austria",
    "quantity": 9720,
    "cost": 28674.0,
    "price": 2.95
  },
  {
    "date": "2024-02-10",
    "product": "D/Z MALINA 300G",
    "country": "Austria",
    "quantity": 14256,
    "cost": 32308.85,
    "price": 2.27
  },
  {
    "date": "2024-02-20",
    "product": "D/Z MALINA 300G",
    "country": "Austria",
    "quantity": 14256,
    "cost": 32375.38,
    "price": 2.27
  },
  {
    "date": "2024-02-06",
    "product": "DUBOKO ZAMRZNUTA MALINA CELA 10X1 KG, DUBOKO ZAMRZNUTA MALINA CELA",
    "country": "Australia",
    "quantity": 10000,
    "cost": 35840.73,
    "price": 3.58
  },
  {
    "date": "2024-02-07",
    "product": "D.Z. MALINA, PAK. 8 X 300 G",
    "country": "Australia",
    "quantity": 14774,
    "cost": 76826.88,
    "price": 5.2
  },
  {
    "date": "2024-02-08",
    "product": "D.Z. MALINA, PAK. 8 X 300 G",
    "country": "Australia",
    "quantity": 14774,
    "cost": 76826.88,
    "price": 5.2
  },
  {
    "date": "2024-02-13",
    "product": "DUBOKO ZAMRZNUTA MALINA 300G",
    "country": "Belgium",
    "quantity": 4708,
    "cost": 14909.3,
    "price": 3.17
  },
  {
    "date": "2024-02-09",
    "product": "D\\Z MALINA \"ROLEND-WHOLE 750G\"",
    "country": "Belgium",
    "quantity": 14701,
    "cost": 38811.96,
    "price": 2.64
  },
  {
    "date": "2024-02-02",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 10X250GR",
    "country": "Belgium",
    "quantity": 960,
    "cost": 2726.4,
    "price": 2.84
  },
  {
    "date": "2024-02-02",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 5X1KG; 6X250GR",
    "country": "Belgium",
    "quantity": 14096,
    "cost": 39536.24,
    "price": 2.8
  },
  {
    "date": "2024-02-09",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 5X1KG",
    "country": "Belgium",
    "quantity": 13200,
    "cost": 36524.4,
    "price": 2.77
  },
  {
    "date": "2024-02-17",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE 6X750GR",
    "country": "Belgium",
    "quantity": 14701,
    "cost": 38811.96,
    "price": 2.64
  },
  {
    "date": "2024-02-23",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "Belgium",
    "quantity": 14000,
    "cost": 43680.0,
    "price": 3.12
  },
  {
    "date": "2024-02-26",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 6X750GR,6X250GR",
    "country": "Belgium",
    "quantity": 14880,
    "cost": 40833.6,
    "price": 2.74
  },
  {
    "date": "2024-02-02",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 12X300GR",
    "country": "Belgium",
    "quantity": 11880,
    "cost": 33976.8,
    "price": 2.86
  },
  {
    "date": "2024-02-12",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X1KG",
    "country": "Belgium",
    "quantity": 10710,
    "cost": 27203.4,
    "price": 2.54
  },
  {
    "date": "2024-02-19",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 12X300GR",
    "country": "Belgium",
    "quantity": 11880,
    "cost": 33976.8,
    "price": 2.86
  },
  {
    "date": "2024-02-19",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 5X1KG",
    "country": "Belgium",
    "quantity": 16500,
    "cost": 89100.0,
    "price": 5.4
  },
  {
    "date": "2024-02-27",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "Belgium",
    "quantity": 8190,
    "cost": 23505.3,
    "price": 2.87
  },
  {
    "date": "2024-02-10",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X300GR; 20X500GR",
    "country": "Belgium",
    "quantity": 16020,
    "cost": 43319.7,
    "price": 2.7
  },
  {
    "date": "2024-02-23",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:20X500GR",
    "country": "Belgium",
    "quantity": 17820,
    "cost": 45975.6,
    "price": 2.58
  },
  {
    "date": "2024-02-10",
    "product": "-D/Z MALINA COUNTRY RANG ,PAK.U 960KUT.OD 6KG, J4036A00D / BBE",
    "country": "Belgium",
    "quantity": 8452,
    "cost": 25978.46,
    "price": 3.07
  },
  {
    "date": "2024-02-20",
    "product": "-D/Z MALINA PINGO DOCE,PAK.U 768KUT.OD 8KG, L4039B01D / BBE 02/2026",
    "country": "Belgium",
    "quantity": 6144,
    "cost": 19906.56,
    "price": 3.24
  },
  {
    "date": "2024-02-02",
    "product": "DZ MALINA (THIRIET, THIRIET W&B), PAK. 450G",
    "country": "Belgium",
    "quantity": 12150,
    "cost": 45003.6,
    "price": 3.7
  },
  {
    "date": "2024-02-03",
    "product": "DZ MALINA (COLES), PAK. 500G",
    "country": "Belgium",
    "quantity": 18018,
    "cost": 77405.33,
    "price": 4.3
  },
  {
    "date": "2024-02-10",
    "product": "DZ MALINA (COLES), PAK. 500G",
    "country": "Belgium",
    "quantity": 18018,
    "cost": 77405.33,
    "price": 4.3
  },
  {
    "date": "2024-02-17",
    "product": "DZ MALINA (COLES), PAK. 500G",
    "country": "Belgium",
    "quantity": 29106,
    "cost": 125039.38,
    "price": 4.3
  },
  {
    "date": "2024-02-24",
    "product": "DZ MALINA (COLES), PAK. 500G",
    "country": "Belgium",
    "quantity": 36036,
    "cost": 154810.66,
    "price": 4.3
  },
  {
    "date": "2024-02-01",
    "product": "D/Z KONVENCIONALNA MALINA ROLEND",
    "country": "CA",
    "quantity": 40800,
    "cost": 112200.0,
    "price": 2.75
  },
  {
    "date": "2024-02-14",
    "product": "D/Z KONVENCIONALNA MALINA ROLEND",
    "country": "CA",
    "quantity": 20400,
    "cost": 56100.0,
    "price": 2.75
  },
  {
    "date": "2024-02-29",
    "product": "D\\Z MALINA ROLEND 4X2,5KG VILAMET, (US NORMA) LOT:4002 PO 30715-1 DF",
    "country": "CA",
    "quantity": 18000,
    "cost": 50040.0,
    "price": 2.78
  },
  {
    "date": "2024-02-09",
    "product": "DUBOKO ZAMRZNUTA MALINA 250G",
    "country": "CH",
    "quantity": 3240,
    "cost": 13122.0,
    "price": 4.05
  },
  {
    "date": "2024-02-19",
    "product": "DUBOKO ZAMRZNUTA MALINA 250G",
    "country": "CH",
    "quantity": 2160,
    "cost": 8748.0,
    "price": 4.05
  },
  {
    "date": "2024-02-23",
    "product": "DUBOKO ZAMRZNUTA MALINA 250G",
    "country": "CH",
    "quantity": 2880,
    "cost": 11664.0,
    "price": 4.05
  },
  {
    "date": "2024-02-23",
    "product": "ZAMRZNUTA MALINA , PAKOVANJE: 10X0,300KG",
    "country": "CH",
    "quantity": 10368,
    "cost": 37635.84,
    "price": 3.63
  },
  {
    "date": "2024-02-12",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:12X0,5KG",
    "country": "CH",
    "quantity": 11718,
    "cost": 40783.6,
    "price": 3.48
  },
  {
    "date": "2024-02-17",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 14X500GR",
    "country": "CH",
    "quantity": 12936,
    "cost": 32866.5,
    "price": 2.54
  },
  {
    "date": "2024-02-14",
    "product": "D/Z MALINA 500G",
    "country": "CZ",
    "quantity": 15840,
    "cost": 29370.53,
    "price": 1.85
  },
  {
    "date": "2024-02-08",
    "product": "DUBOKO ZAMRZNUTA MALINA",
    "country": "Germany",
    "quantity": 6006,
    "cost": 18418.4,
    "price": 3.07
  },
  {
    "date": "2024-02-10",
    "product": "DUBOKO ZAMRZNUTA MALINA",
    "country": "Germany",
    "quantity": 8305,
    "cost": 24318.8,
    "price": 2.93
  },
  {
    "date": "2024-02-14",
    "product": "DUBOKO ZAMRZNUTA MALINA",
    "country": "Germany",
    "quantity": 32899,
    "cost": 97231.6,
    "price": 2.96
  },
  {
    "date": "2024-02-03",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 10X1KG",
    "country": "Germany",
    "quantity": 20790,
    "cost": 46694.34,
    "price": 2.25
  },
  {
    "date": "2024-02-06",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 10X1KG",
    "country": "Germany",
    "quantity": 3105,
    "cost": 7074.9,
    "price": 2.28
  },
  {
    "date": "2024-02-10",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 10X1KG",
    "country": "Germany",
    "quantity": 12600,
    "cost": 28299.6,
    "price": 2.25
  },
  {
    "date": "2024-02-03",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 6X500GR;10X500GR",
    "country": "Germany",
    "quantity": 13140,
    "cost": 31786.2,
    "price": 2.42
  },
  {
    "date": "2024-02-10",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE 10X500GR",
    "country": "Germany",
    "quantity": 8415,
    "cost": 20448.45,
    "price": 2.43
  },
  {
    "date": "2024-02-10",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 6X500GR I 10X500GR",
    "country": "Germany",
    "quantity": 12510,
    "cost": 30327.3,
    "price": 2.42
  },
  {
    "date": "2024-02-12",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 12X750GR",
    "country": "Germany",
    "quantity": 18711,
    "cost": 46029.06,
    "price": 2.46
  },
  {
    "date": "2024-02-17",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 10X500GR",
    "country": "Germany",
    "quantity": 16335,
    "cost": 39694.05,
    "price": 2.43
  },
  {
    "date": "2024-02-17",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 6X500GR I 10X500GR",
    "country": "Germany",
    "quantity": 12015,
    "cost": 29124.45,
    "price": 2.42
  },
  {
    "date": "2024-02-24",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 6X500GR I 10X500GR",
    "country": "Germany",
    "quantity": 13500,
    "cost": 32733.0,
    "price": 2.42
  },
  {
    "date": "2024-02-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE 10X500GR",
    "country": "Germany",
    "quantity": 13365,
    "cost": 32476.95,
    "price": 2.43
  },
  {
    "date": "2024-02-09",
    "product": "DZ MALINA- DEEP FROZEN RASPBERRY ROLLEND 4X2,5KG LOT: EB2400106",
    "country": "Germany",
    "quantity": 20720,
    "cost": 53457.6,
    "price": 2.58
  },
  {
    "date": "2024-02-26",
    "product": "DZ MALINA- DEEP FROZEN RASPBERRY ROLLEND 4X2,5KG LOT: EB2400200",
    "country": "Germany",
    "quantity": 20790,
    "cost": 51975.0,
    "price": 2.5
  },
  {
    "date": "2024-02-01",
    "product": "D/Z MALINE \"IQF RASPBERRY \"",
    "country": "Germany",
    "quantity": 20790,
    "cost": 58212.0,
    "price": 2.8
  },
  {
    "date": "2024-02-10",
    "product": "D/Z MALINE \"IQF RASPBERRY \"",
    "country": "Germany",
    "quantity": 20790,
    "cost": 54054.0,
    "price": 2.6
  },
  {
    "date": "2024-02-24",
    "product": "D/Z MALINE \"IQF RASPBERRY \"",
    "country": "Germany",
    "quantity": 20790,
    "cost": 58212.0,
    "price": 2.8
  },
  {
    "date": "2024-02-06",
    "product": "DUBOKO ZAMRZNUTA MALINA 90/10 - WILLAMETTE",
    "country": "Germany",
    "quantity": 17640,
    "cost": 39584.16,
    "price": 2.24
  },
  {
    "date": "2024-02-03",
    "product": "DZ MALINA ROLEND 4X2,5KG - IQF RASPBERRY 4X2,5KG",
    "country": "Germany",
    "quantity": 20790,
    "cost": 48856.5,
    "price": 2.35
  },
  {
    "date": "2024-02-17",
    "product": "DZ MALINA ROLEND",
    "country": "Germany",
    "quantity": 9240,
    "cost": 24024.0,
    "price": 2.6
  },
  {
    "date": "2024-02-23",
    "product": "DZ MALINA ROLEND 90/10",
    "country": "Germany",
    "quantity": 20790,
    "cost": 45530.1,
    "price": 2.19
  },
  {
    "date": "2024-02-13",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "Germany",
    "quantity": 10080,
    "cost": 24192.0,
    "price": 2.4
  },
  {
    "date": "2024-02-03",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:12X750GR",
    "country": "Germany",
    "quantity": 25677,
    "cost": 70098.21,
    "price": 2.73
  },
  {
    "date": "2024-02-03",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 16X500GR",
    "country": "Germany",
    "quantity": 14784,
    "cost": 37140.36,
    "price": 2.51
  },
  {
    "date": "2024-02-03",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "Germany",
    "quantity": 40450,
    "cost": 100723.0,
    "price": 2.49
  },
  {
    "date": "2024-02-03",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 24X350GR",
    "country": "Germany",
    "quantity": 19958,
    "cost": 50993.71,
    "price": 2.55
  },
  {
    "date": "2024-02-03",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:14X500GR",
    "country": "Germany",
    "quantity": 36960,
    "cost": 90182.4,
    "price": 2.44
  },
  {
    "date": "2024-02-05",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X300GR",
    "country": "Germany",
    "quantity": 4950,
    "cost": 13231.35,
    "price": 2.67
  },
  {
    "date": "2024-02-05",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 14X500GR",
    "country": "Germany",
    "quantity": 14784,
    "cost": 36856.51,
    "price": 2.49
  },
  {
    "date": "2024-02-06",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 14X500GR",
    "country": "Germany",
    "quantity": 14784,
    "cost": 36856.51,
    "price": 2.49
  },
  {
    "date": "2024-02-06",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "Germany",
    "quantity": 40500,
    "cost": 102870.0,
    "price": 2.54
  },
  {
    "date": "2024-02-06",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 6X500GR; 20X500GR",
    "country": "Germany",
    "quantity": 17046,
    "cost": 42663.24,
    "price": 2.5
  },
  {
    "date": "2024-02-10",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X500GR",
    "country": "Germany",
    "quantity": 16335,
    "cost": 41490.9,
    "price": 2.54
  },
  {
    "date": "2024-02-10",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "Germany",
    "quantity": 40410,
    "cost": 100625.4,
    "price": 2.49
  },
  {
    "date": "2024-02-10",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 24X350GR",
    "country": "Germany",
    "quantity": 19958,
    "cost": 50993.71,
    "price": 2.55
  },
  {
    "date": "2024-02-10",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 6X500GR; 12X750GR",
    "country": "Germany",
    "quantity": 15408,
    "cost": 37670.4,
    "price": 2.44
  },
  {
    "date": "2024-02-12",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "Germany",
    "quantity": 20250,
    "cost": 51435.0,
    "price": 2.54
  },
  {
    "date": "2024-02-12",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:14X500GR",
    "country": "Germany",
    "quantity": 18480,
    "cost": 45091.2,
    "price": 2.44
  },
  {
    "date": "2024-02-13",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 18X500GR",
    "country": "Germany",
    "quantity": 18711,
    "cost": 48592.47,
    "price": 2.6
  },
  {
    "date": "2024-02-13",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "Germany",
    "quantity": 20250,
    "cost": 51435.0,
    "price": 2.54
  },
  {
    "date": "2024-02-13",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:14X500GR",
    "country": "Germany",
    "quantity": 18480,
    "cost": 45091.2,
    "price": 2.44
  },
  {
    "date": "2024-02-14",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:14X500GR",
    "country": "Germany",
    "quantity": 18480,
    "cost": 45091.2,
    "price": 2.44
  },
  {
    "date": "2024-02-17",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "Germany",
    "quantity": 40310,
    "cost": 98356.4,
    "price": 2.44
  },
  {
    "date": "2024-02-17",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 6X500GR",
    "country": "Germany",
    "quantity": 13068,
    "cost": 31885.92,
    "price": 2.44
  },
  {
    "date": "2024-02-17",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:14X500GR",
    "country": "Germany",
    "quantity": 18480,
    "cost": 45091.2,
    "price": 2.44
  },
  {
    "date": "2024-02-19",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "Germany",
    "quantity": 20250,
    "cost": 51435.0,
    "price": 2.54
  },
  {
    "date": "2024-02-20",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 14X500GR",
    "country": "Germany",
    "quantity": 14784,
    "cost": 36856.51,
    "price": 2.49
  },
  {
    "date": "2024-02-20",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 16X500GR",
    "country": "Germany",
    "quantity": 14784,
    "cost": 37140.36,
    "price": 2.51
  },
  {
    "date": "2024-02-20",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "Germany",
    "quantity": 60500,
    "cost": 152777.2,
    "price": 2.53
  },
  {
    "date": "2024-02-23",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 14X500GR",
    "country": "Germany",
    "quantity": 14784,
    "cost": 36856.51,
    "price": 2.49
  },
  {
    "date": "2024-02-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "Germany",
    "quantity": 40500,
    "cost": 102870.0,
    "price": 2.54
  },
  {
    "date": "2024-02-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:14X500GR",
    "country": "Germany",
    "quantity": 18480,
    "cost": 45091.2,
    "price": 2.44
  },
  {
    "date": "2024-02-26",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 14X500GR",
    "country": "Germany",
    "quantity": 14784,
    "cost": 36856.51,
    "price": 2.49
  },
  {
    "date": "2024-02-27",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 18X500GR",
    "country": "Germany",
    "quantity": 18711,
    "cost": 48592.47,
    "price": 2.6
  },
  {
    "date": "2024-02-27",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "Germany",
    "quantity": 40410,
    "cost": 100625.4,
    "price": 2.49
  },
  {
    "date": "2024-02-27",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:14X500GR",
    "country": "Germany",
    "quantity": 18480,
    "cost": 45091.2,
    "price": 2.44
  },
  {
    "date": "2024-02-03",
    "product": "DZ MALINA-TK-HIMBEEREN ALL SEASONS",
    "country": "Germany",
    "quantity": 18480,
    "cost": 45091.2,
    "price": 2.44
  },
  {
    "date": "2024-02-06",
    "product": "DZ MALINA-TK-HIMBEEREN ALL SEASONS",
    "country": "Germany",
    "quantity": 9520,
    "cost": 23228.8,
    "price": 2.44
  },
  {
    "date": "2024-02-13",
    "product": "DZ MALINA-TK-HIMBEEREN ALL SEASONS",
    "country": "Germany",
    "quantity": 18480,
    "cost": 45091.2,
    "price": 2.44
  },
  {
    "date": "2024-02-17",
    "product": "DZ MALINA-TK-HIMBEEREN FRESHONA DE/AT 20X500G",
    "country": "Germany",
    "quantity": 20250,
    "cost": 51435.0,
    "price": 2.54
  },
  {
    "date": "2024-02-24",
    "product": "DZ MALINA-TK-HIMBEEREN FRESHONA DE/AT 20X500G",
    "country": "Germany",
    "quantity": 20250,
    "cost": 51435.0,
    "price": 2.54
  },
  {
    "date": "2024-02-13",
    "product": "-D/Z MALINA ROLEND PAK.U 630KUT.L4039/08.02.2026 - MATERIAL NO.",
    "country": "Germany",
    "quantity": 6300,
    "cost": 20097.0,
    "price": 3.19
  },
  {
    "date": "2024-02-29",
    "product": "D.Z. MALINA ROLEND 4X2,5",
    "country": "Germany",
    "quantity": 20000,
    "cost": 48000.0,
    "price": 2.4
  },
  {
    "date": "2024-02-23",
    "product": "DUBOKO ZAMRZNUTA MALINA-VILAMET ROLEND",
    "country": "Germany",
    "quantity": 20790,
    "cost": 41580.0,
    "price": 2.0
  },
  {
    "date": "2024-02-05",
    "product": "D/Z MALINA 500G",
    "country": "Germany",
    "quantity": 14850,
    "cost": 36792.36,
    "price": 2.48
  },
  {
    "date": "2024-02-06",
    "product": "D/Z MALINA 500G",
    "country": "Germany",
    "quantity": 15840,
    "cost": 37211.33,
    "price": 2.35
  },
  {
    "date": "2024-02-09",
    "product": "D/Z MALINA 500G",
    "country": "Germany",
    "quantity": 9000,
    "cost": 21641.4,
    "price": 2.4
  },
  {
    "date": "2024-02-10",
    "product": "D/Z MALINA 500G",
    "country": "Germany",
    "quantity": 15840,
    "cost": 37103.62,
    "price": 2.34
  },
  {
    "date": "2024-02-15",
    "product": "D/Z MALINA 500G",
    "country": "Germany",
    "quantity": 6720,
    "cost": 15740.93,
    "price": 2.34
  },
  {
    "date": "2024-02-19",
    "product": "D/Z MALINA 500G",
    "country": "Germany",
    "quantity": 15840,
    "cost": 38031.84,
    "price": 2.4
  },
  {
    "date": "2024-02-22",
    "product": "D/Z MALINA 500G",
    "country": "Germany",
    "quantity": 14850,
    "cost": 35729.1,
    "price": 2.41
  },
  {
    "date": "2024-02-24",
    "product": "D/Z MALINA 500G",
    "country": "Germany",
    "quantity": 15840,
    "cost": 38288.45,
    "price": 2.42
  },
  {
    "date": "2024-02-26",
    "product": "D/Z MALINA 500G",
    "country": "Germany",
    "quantity": 45090,
    "cost": 107366.45,
    "price": 2.38
  },
  {
    "date": "2024-02-27",
    "product": "D/Z MALINA 500G I 750G",
    "country": "Germany",
    "quantity": 15210,
    "cost": 36582.48,
    "price": 2.41
  },
  {
    "date": "2024-02-10",
    "product": "D/Z MALINA 300G.",
    "country": "Germany",
    "quantity": 16632,
    "cost": 41690.88,
    "price": 2.51
  },
  {
    "date": "2024-02-20",
    "product": "D/Z MALINA 300G.",
    "country": "Germany",
    "quantity": 4032,
    "cost": 10086.72,
    "price": 2.5
  },
  {
    "date": "2024-02-24",
    "product": "D/Z MALINA 300G.",
    "country": "Germany",
    "quantity": 16632,
    "cost": 41713.06,
    "price": 2.51
  },
  {
    "date": "2024-02-01",
    "product": "D.Z. MALINA ROLEND, PAK. 200 GR",
    "country": "DK",
    "quantity": 720,
    "cost": 4050.0,
    "price": 5.63
  },
  {
    "date": "2024-02-09",
    "product": "D.Z. MALINA ROLEND, PAK. 200 GR",
    "country": "DK",
    "quantity": 3888,
    "cost": 14405.04,
    "price": 3.71
  },
  {
    "date": "2024-02-22",
    "product": "D.Z. MALINA ROLEND, PAK. 200 GR",
    "country": "DK",
    "quantity": 2376,
    "cost": 8803.08,
    "price": 3.71
  },
  {
    "date": "2024-02-24",
    "product": "D.Z. MALINA ROLEND, PAK. 200 GR",
    "country": "DK",
    "quantity": 7128,
    "cost": 26409.24,
    "price": 3.71
  },
  {
    "date": "2024-02-12",
    "product": "ZAMRZNUTA MALINA ROLEND (IQF RASPBERRY WHOLE FERTODI) PO FAKTURI",
    "country": "ES",
    "quantity": 560,
    "cost": 1288.0,
    "price": 2.3
  },
  {
    "date": "2024-02-12",
    "product": "ZAMRZNUTA MALINA ROLEND (IQF RASPBERRY WHOLE WILAMETTE) PO FAKTURI",
    "country": "ES",
    "quantity": 560,
    "cost": 1288.0,
    "price": 2.3
  },
  {
    "date": "2024-02-14",
    "product": "DUBOKO ZAMRZNUTA MALINA IQF 1/5 KG (10X500G) - K-MENU;DUBOKO",
    "country": "FI",
    "quantity": 7968,
    "cost": 26443.2,
    "price": 3.32
  },
  {
    "date": "2024-02-13",
    "product": "D.Z. MALINA ROLEND, PAK. 200 I 400G",
    "country": "FI",
    "quantity": 4536,
    "cost": 16689.24,
    "price": 3.68
  },
  {
    "date": "2024-02-23",
    "product": "D.Z. MALINA ROLEND, PAK. 200G, 400G I 500G",
    "country": "FI",
    "quantity": 15130,
    "cost": 57221.21,
    "price": 3.78
  },
  {
    "date": "2024-02-05",
    "product": "DZ MALINA ROLEND",
    "country": "France",
    "quantity": 10000,
    "cost": 23500.0,
    "price": 2.35
  },
  {
    "date": "2024-02-17",
    "product": "DZ MALINA ROLEND",
    "country": "France",
    "quantity": 18480,
    "cost": 46200.0,
    "price": 2.5
  },
  {
    "date": "2024-02-22",
    "product": "DZ MALINA ROLEND",
    "country": "France",
    "quantity": 5400,
    "cost": 12960.0,
    "price": 2.4
  },
  {
    "date": "2024-02-26",
    "product": "DZ MALINA ROLEND",
    "country": "France",
    "quantity": 4960,
    "cost": 12106.0,
    "price": 2.44
  },
  {
    "date": "2024-02-21",
    "product": "ZAMRZNUTA MALINA 5X1KG (FROZEN RASPBERRY WILL. 5X1KG) PO FAKTURI BR",
    "country": "France",
    "quantity": 10260,
    "cost": 27702.0,
    "price": 2.7
  },
  {
    "date": "2024-02-09",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 12X0,5KG; 4X2,5KG",
    "country": "France",
    "quantity": 13824,
    "cost": 42336.0,
    "price": 3.06
  },
  {
    "date": "2024-02-12",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG; 5X1KG",
    "country": "France",
    "quantity": 19120,
    "cost": 55506.0,
    "price": 2.9
  },
  {
    "date": "2024-02-05",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 6X0,5KG",
    "country": "France",
    "quantity": 6,
    "cost": 14.7,
    "price": 2.45
  },
  {
    "date": "2024-02-09",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 6X0,5KG",
    "country": "France",
    "quantity": 6,
    "cost": 15.0,
    "price": 2.5
  },
  {
    "date": "2024-02-12",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 6X0,5KG",
    "country": "France",
    "quantity": 6,
    "cost": 14.7,
    "price": 2.45
  },
  {
    "date": "2024-02-13",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X0,5KG; 3X0,5KG",
    "country": "France",
    "quantity": 3,
    "cost": 11.77,
    "price": 3.36
  },
  {
    "date": "2024-02-13",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 5X1KG",
    "country": "France",
    "quantity": 8800,
    "cost": 35640.0,
    "price": 4.05
  },
  {
    "date": "2024-02-21",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 6X0,5KG",
    "country": "France",
    "quantity": 3,
    "cost": 7.95,
    "price": 2.65
  },
  {
    "date": "2024-02-23",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 6X0,5KG",
    "country": "France",
    "quantity": 3,
    "cost": 7.65,
    "price": 2.55
  },
  {
    "date": "2024-02-26",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 6X0,5KG",
    "country": "France",
    "quantity": 3,
    "cost": 7.65,
    "price": 2.55
  },
  {
    "date": "2024-02-23",
    "product": "SMRZNUTE MALINE:IQF WHOLW WILLAMETTE RASPBERRIES 5X1KG PO FAKTURI",
    "country": "France",
    "quantity": 9180,
    "cost": 23868.0,
    "price": 2.6
  },
  {
    "date": "2024-02-12",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 12X500GR",
    "country": "France",
    "quantity": 11088,
    "cost": 36036.0,
    "price": 3.25
  },
  {
    "date": "2024-02-12",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 5X1KG",
    "country": "France",
    "quantity": 35640,
    "cost": 95595.12,
    "price": 2.68
  },
  {
    "date": "2024-02-03",
    "product": "DZ MALINA ROLEND 5X1 KG",
    "country": "France",
    "quantity": 15840,
    "cost": 38016.0,
    "price": 2.4
  },
  {
    "date": "2024-02-20",
    "product": "DZ MALINA ROLEND 5X1 KG",
    "country": "France",
    "quantity": 15840,
    "cost": 38016.0,
    "price": 2.4
  },
  {
    "date": "2024-02-23",
    "product": "DZ MALINA (SYSTEME U), PAK. 5X1KG",
    "country": "France",
    "quantity": 19800,
    "cost": 53460.0,
    "price": 2.7
  },
  {
    "date": "2024-02-01",
    "product": "D.Z. MALINA ROLEND, PAK. 500 G",
    "country": "France",
    "quantity": 5760,
    "cost": 17971.2,
    "price": 3.12
  },
  {
    "date": "2024-02-29",
    "product": "D.Z. MALINA R 90/10, PAK. 0,500 GR",
    "country": "France",
    "quantity": 10560,
    "cost": 32947.2,
    "price": 3.12
  },
  {
    "date": "2024-02-02",
    "product": "D\\Z MALINA ROLEND 20X450G-VILAMET LOT:233471, 233472, DF RASPBERRY IQF",
    "country": "France",
    "quantity": 9216,
    "cost": 23040.0,
    "price": 2.5
  },
  {
    "date": "2024-02-20",
    "product": "D.Z. MALINA, PAK. 500 G",
    "country": "France",
    "quantity": 3150,
    "cost": 9954.0,
    "price": 3.16
  },
  {
    "date": "2024-02-14",
    "product": "- DZ MALINA, LOT: 484192 -",
    "country": "France",
    "quantity": 14701,
    "cost": 37194.8,
    "price": 2.53
  },
  {
    "date": "2024-02-12",
    "product": "D/Z MALINA ROLEND",
    "country": "France",
    "quantity": 18480,
    "cost": 47493.6,
    "price": 2.57
  },
  {
    "date": "2024-02-05",
    "product": "DZ MALINA ROLEND PAK.11 KG",
    "country": "GB",
    "quantity": 20207,
    "cost": 48496.8,
    "price": 2.4
  },
  {
    "date": "2024-02-19",
    "product": "DZ MALINA ROLEND PAK.11 KG",
    "country": "GB",
    "quantity": 20207,
    "cost": 48496.8,
    "price": 2.4
  },
  {
    "date": "2024-02-05",
    "product": "DUBOKO ZAMRZNUTA MALINA",
    "country": "GB",
    "quantity": 12960,
    "cost": 59820.07,
    "price": 4.62
  },
  {
    "date": "2024-02-14",
    "product": "DUBOKO ZAMRZNUTA MALINA 300G (1/4,2 KG)",
    "country": "GB",
    "quantity": 17472,
    "cost": 57278.53,
    "price": 3.28
  },
  {
    "date": "2024-02-21",
    "product": "DUBOKO ZAMRZNUTA MALINA 300G (1/4,2 KG)",
    "country": "GB",
    "quantity": 17472,
    "cost": 57548.06,
    "price": 3.29
  },
  {
    "date": "2024-02-23",
    "product": "DUBOKO ZAMRZNUTA MALINA 300G (1/4,2 KG)",
    "country": "GB",
    "quantity": 17472,
    "cost": 57548.06,
    "price": 3.29
  },
  {
    "date": "2024-02-27",
    "product": "DUBOKO ZAMRZNUTA MALINA 300G (1/4,2 KG)",
    "country": "GB",
    "quantity": 17472,
    "cost": 57191.49,
    "price": 3.27
  },
  {
    "date": "2024-02-28",
    "product": "ZAMRZNUTA MALINA 95/5 (IQF RASPBERRY WHOLE 95/5) PO FAKTURI 8745/2024",
    "country": "GB",
    "quantity": 18480,
    "cost": 50820.0,
    "price": 2.75
  },
  {
    "date": "2024-02-01",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "GB",
    "quantity": 20790,
    "cost": 59667.3,
    "price": 2.87
  },
  {
    "date": "2024-02-02",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "GB",
    "quantity": 10710,
    "cost": 30737.7,
    "price": 2.87
  },
  {
    "date": "2024-02-05",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "GB",
    "quantity": 20790,
    "cost": 51351.3,
    "price": 2.47
  },
  {
    "date": "2024-02-08",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "GB",
    "quantity": 20790,
    "cost": 59667.3,
    "price": 2.87
  },
  {
    "date": "2024-02-14",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "GB",
    "quantity": 20790,
    "cost": 59667.3,
    "price": 2.87
  },
  {
    "date": "2024-02-19",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "GB",
    "quantity": 20790,
    "cost": 51351.3,
    "price": 2.47
  },
  {
    "date": "2024-02-21",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "GB",
    "quantity": 20790,
    "cost": 59667.3,
    "price": 2.87
  },
  {
    "date": "2024-02-26",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "GB",
    "quantity": 20790,
    "cost": 59667.3,
    "price": 2.87
  },
  {
    "date": "2024-02-29",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "GB",
    "quantity": 20790,
    "cost": 59667.3,
    "price": 2.87
  },
  {
    "date": "2024-02-09",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 1X12KG",
    "country": "GB",
    "quantity": 20004,
    "cost": 96019.2,
    "price": 4.8
  },
  {
    "date": "2024-02-20",
    "product": "SMRZNUTA MALINA - PO FAKTURI",
    "country": "GR",
    "quantity": 20472,
    "cost": 51180.0,
    "price": 2.5
  },
  {
    "date": "2024-02-05",
    "product": "BSM MALINA 450GR PO FAKTURI",
    "country": "HR",
    "quantity": 504,
    "cost": 3584.0,
    "price": 7.11
  },
  {
    "date": "2024-02-20",
    "product": "DUBOKO ZAMRZNUTA MALINA 250G SPAR",
    "country": "HR",
    "quantity": 1440,
    "cost": 8812.8,
    "price": 6.12
  },
  {
    "date": "2024-02-29",
    "product": "DUBOKO ZAMRZNUTA MALINA FRIZO 400G (12X400G)",
    "country": "HR",
    "quantity": 6489,
    "cost": 21504.4,
    "price": 3.31
  },
  {
    "date": "2024-02-21",
    "product": "D/Z MALINA 2,5 KG - STAVKA 4 SA FAKTURE",
    "country": "HR",
    "quantity": 1280,
    "cost": 4697.6,
    "price": 3.67
  },
  {
    "date": "2024-02-17",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 10X500GR",
    "country": "HU",
    "quantity": 360,
    "cost": 936.0,
    "price": 2.6
  },
  {
    "date": "2024-02-26",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 11/1KG",
    "country": "HU",
    "quantity": 20328,
    "cost": 50616.72,
    "price": 2.49
  },
  {
    "date": "2024-02-26",
    "product": "DUBOKO ZAMRZNUTA MALINA 300 GR",
    "country": "IQ",
    "quantity": 518,
    "cost": 2937.6,
    "price": 5.67
  },
  {
    "date": "2024-02-13",
    "product": "DUBOKO ZAMRZNUTA MALINA EURO SHOPPER 500G (10X500G=1/5 KG)",
    "country": "IS",
    "quantity": 7200,
    "cost": 22320.0,
    "price": 3.1
  },
  {
    "date": "2024-02-22",
    "product": "ZAMRZNUTA MALINA 4X2,5KG - FROZEN RASSPERIES 4X2,5KG",
    "country": "IT",
    "quantity": 20480,
    "cost": 51200.0,
    "price": 2.5
  },
  {
    "date": "2024-02-09",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 1X10KG; 4X2,5KG",
    "country": "JP",
    "quantity": 18500,
    "cost": 67825.0,
    "price": 3.67
  },
  {
    "date": "2024-02-22",
    "product": "D.Z. MALINA ROLEND, PAK. 16X400 G",
    "country": "KW",
    "quantity": 320,
    "cost": 1272.0,
    "price": 3.98
  },
  {
    "date": "2024-02-22",
    "product": "D.Z. MALINA ROLEND, PAK. 5X1 KG",
    "country": "KW",
    "quantity": 8000,
    "cost": 29840.0,
    "price": 3.73
  },
  {
    "date": "2024-02-07",
    "product": "DZ MALINA KULTIVISANA RASPBERRIES RIMI FROZEN",
    "country": "LV",
    "quantity": 960,
    "cost": 3283.2,
    "price": 3.42
  },
  {
    "date": "2024-02-22",
    "product": "DZ MALINA KULTIVISANA RASPBERRIES RIMI FROZEN",
    "country": "LV",
    "quantity": 6240,
    "cost": 21340.8,
    "price": 3.42
  },
  {
    "date": "2024-02-29",
    "product": "SMRZNUTE MALINE",
    "country": "ME",
    "quantity": 499,
    "cost": 1547.52,
    "price": 3.1
  },
  {
    "date": "2024-02-08",
    "product": "BSM MALINA 450G PO FAKTURI",
    "country": "ME",
    "quantity": 1008,
    "cost": 5443.2,
    "price": 5.4
  },
  {
    "date": "2024-02-19",
    "product": "MALINA 300G - MONTELLA - PREMA FAKTURI",
    "country": "ME",
    "quantity": 1260,
    "cost": 9240.0,
    "price": 7.33
  },
  {
    "date": "2024-02-28",
    "product": "MALINA 300 GR FAKTURA: 91264641 STAVKA: 7",
    "country": "MK",
    "quantity": 499,
    "cost": 1547.52,
    "price": 3.1
  },
  {
    "date": "2024-02-06",
    "product": "D/Z MALINA 300G",
    "country": "MK",
    "quantity": 1152,
    "cost": 3456.0,
    "price": 3.0
  },
  {
    "date": "2024-02-20",
    "product": "DUBOKO ZAMRZNUTA MALINA",
    "country": "Netherlands",
    "quantity": 6664,
    "cost": 17293.36,
    "price": 2.6
  },
  {
    "date": "2024-02-23",
    "product": "DUBOKO ZAMRZNUTA MALINA",
    "country": "Netherlands",
    "quantity": 5040,
    "cost": 12872.16,
    "price": 2.55
  },
  {
    "date": "2024-02-27",
    "product": "DUBOKO ZAMRZNUTA MALINA",
    "country": "Netherlands",
    "quantity": 16800,
    "cost": 44251.2,
    "price": 2.63
  },
  {
    "date": "2024-02-02",
    "product": "DUBOKO ZAMRZNUTA MALINA 250G, DUBOKO ZAMRZNUTA MALINA 750G",
    "country": "Netherlands",
    "quantity": 7358,
    "cost": 26184.56,
    "price": 3.56
  },
  {
    "date": "2024-02-08",
    "product": "DUBOKO ZAMRZNUTA MALINA 250G, DUBOKO ZAMRZNUTA MALINA 750G",
    "country": "Netherlands",
    "quantity": 3288,
    "cost": 11568.47,
    "price": 3.52
  },
  {
    "date": "2024-02-23",
    "product": "DUBOKO ZAMRZNUTA MALINA 250G, DUBOKO ZAMRZNUTA MALINA 750G",
    "country": "Netherlands",
    "quantity": 7434,
    "cost": 26308.94,
    "price": 3.54
  },
  {
    "date": "2024-02-09",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X300GR",
    "country": "Netherlands",
    "quantity": 8640,
    "cost": 23328.0,
    "price": 2.7
  },
  {
    "date": "2024-02-09",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR; 10X1KG",
    "country": "Netherlands",
    "quantity": 20390,
    "cost": 48085.5,
    "price": 2.36
  },
  {
    "date": "2024-02-19",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "Netherlands",
    "quantity": 20480,
    "cost": 49152.0,
    "price": 2.4
  },
  {
    "date": "2024-02-24",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:10X300GR",
    "country": "Netherlands",
    "quantity": 5760,
    "cost": 15552.0,
    "price": 2.7
  },
  {
    "date": "2024-02-02",
    "product": "ZAMRZNUTA MALINA ROLEND 90/10, PAKOVANJE: 500GR",
    "country": "Netherlands",
    "quantity": 20480,
    "cost": 46899.2,
    "price": 2.29
  },
  {
    "date": "2024-02-09",
    "product": "D.Z. MALINA ROLEND 90/10, PAK. 500 G",
    "country": "Netherlands",
    "quantity": 20480,
    "cost": 49152.0,
    "price": 2.4
  },
  {
    "date": "2024-02-10",
    "product": "D.Z. MALINA ROLEND 90/10, PAK. 500 G",
    "country": "Netherlands",
    "quantity": 7680,
    "cost": 18432.0,
    "price": 2.4
  },
  {
    "date": "2024-02-20",
    "product": "D.Z. MALINA ROLEND 90/10, PAK. 500 G",
    "country": "Netherlands",
    "quantity": 20480,
    "cost": 49152.0,
    "price": 2.4
  },
  {
    "date": "2024-02-26",
    "product": "D.Z. MALINA ROLEND 90/10, PAK. 500 G",
    "country": "Netherlands",
    "quantity": 20480,
    "cost": 49152.0,
    "price": 2.4
  },
  {
    "date": "2024-02-20",
    "product": "D.Z. MALINA, PAK. 750 G",
    "country": "Netherlands",
    "quantity": 1458,
    "cost": 7445.52,
    "price": 5.11
  },
  {
    "date": "2024-02-01",
    "product": "D/Z MALINA 250G/ D/F RASPBERRY 250G.",
    "country": "Netherlands",
    "quantity": 1680,
    "cost": 4298.78,
    "price": 2.56
  },
  {
    "date": "2024-02-12",
    "product": "D/Z MALINA 250G., 750G. / D/F RASPBERRY 250G., 750G.",
    "country": "Netherlands",
    "quantity": 7308,
    "cost": 17582.85,
    "price": 2.41
  },
  {
    "date": "2024-02-14",
    "product": "D/Z MALINA 250G. / D/F RASPBERRY 250G.",
    "country": "Netherlands",
    "quantity": 840,
    "cost": 2149.39,
    "price": 2.56
  },
  {
    "date": "2024-02-29",
    "product": "D/Z MALINA 250G. / D/F RASPBERRY 250G.",
    "country": "Netherlands",
    "quantity": 2520,
    "cost": 6449.18,
    "price": 2.56
  },
  {
    "date": "2024-02-17",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE 11KG/1",
    "country": "NO",
    "quantity": 20328,
    "cost": 60984.0,
    "price": 3.0
  },
  {
    "date": "2024-02-03",
    "product": "D.Z. MALINA, PAK. 300 G",
    "country": "NO",
    "quantity": 5027,
    "cost": 18148.91,
    "price": 3.61
  },
  {
    "date": "2024-02-05",
    "product": "D.Z. MALINA, PAK. 400G I 2KG",
    "country": "NO",
    "quantity": 16934,
    "cost": 61683.12,
    "price": 3.64
  },
  {
    "date": "2024-02-29",
    "product": "D.Z. MALINA, PAK. 400G",
    "country": "NO",
    "quantity": 15033,
    "cost": 55248.48,
    "price": 3.68
  },
  {
    "date": "2024-02-29",
    "product": "DZ MALINA 90/10",
    "country": "Poland",
    "quantity": 20328,
    "cost": 50820.0,
    "price": 2.5
  },
  {
    "date": "2024-02-10",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 16X500GR",
    "country": "Poland",
    "quantity": 16632,
    "cost": 43243.2,
    "price": 2.6
  },
  {
    "date": "2024-02-24",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 16X500GR",
    "country": "Poland",
    "quantity": 16632,
    "cost": 43243.2,
    "price": 2.6
  },
  {
    "date": "2024-02-17",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 16X500GR",
    "country": "Poland",
    "quantity": 16632,
    "cost": 43243.2,
    "price": 2.6
  },
  {
    "date": "2024-02-19",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 16X500GR",
    "country": "Poland",
    "quantity": 16632,
    "cost": 43243.2,
    "price": 2.6
  },
  {
    "date": "2024-02-10",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE 11 KG",
    "country": "Poland",
    "quantity": 20328,
    "cost": 57934.8,
    "price": 2.85
  },
  {
    "date": "2024-02-13",
    "product": "D.Z. MALINA ROLEND 90/10",
    "country": "Poland",
    "quantity": 20328,
    "cost": 49193.76,
    "price": 2.42
  },
  {
    "date": "2024-02-27",
    "product": "D.Z. MALINA ROLEND 90/10",
    "country": "Poland",
    "quantity": 20328,
    "cost": 49193.76,
    "price": 2.42
  },
  {
    "date": "2024-02-06",
    "product": "D\\Z MALINA -WILLAMETTE \"ROLEND\" 11\\1 - 1.848 KUTIJA",
    "country": "Poland",
    "quantity": 20328,
    "cost": 49193.76,
    "price": 2.42
  },
  {
    "date": "2024-02-19",
    "product": "D\\Z MALINA -WILLAMETTE \"ROLEND\" 11\\1 - 1.848 KUTIJA",
    "country": "Poland",
    "quantity": 20328,
    "cost": 49193.76,
    "price": 2.42
  },
  {
    "date": "2024-02-07",
    "product": "DZ MALINA,PAK.450 GR,PROIZVOĐAČ:ARETOL DOO,NOVI SAD",
    "country": "RO",
    "quantity": 2880,
    "cost": 9664.0,
    "price": 3.36
  },
  {
    "date": "2024-02-26",
    "product": "D/Z MALINA \"WHOLE\"",
    "country": "RU",
    "quantity": 19530,
    "cost": 44919.0,
    "price": 2.3
  },
  {
    "date": "2024-02-21",
    "product": "D.Z. MALINA ROLEND, PAK. 4 X 2,5 KG",
    "country": "RU",
    "quantity": 2240,
    "cost": 6720.0,
    "price": 3.0
  },
  {
    "date": "2024-02-21",
    "product": "D.Z. MALINA, PAK. 300 G",
    "country": "RU",
    "quantity": 302,
    "cost": 1098.72,
    "price": 3.63
  },
  {
    "date": "2024-02-27",
    "product": "SMRZNUTA MALINA PAKOVANJE 4*2,5KG PO FAKTURI 0602/24",
    "country": "RU",
    "quantity": 10000,
    "cost": 28500.0,
    "price": 2.85
  },
  {
    "date": "2024-02-03",
    "product": "D.Z. MALINA ROLEND, PAK. 16X350GKONTEJNER BR. MEDU 9732366",
    "country": "SA",
    "quantity": 10080,
    "cost": 32520.6,
    "price": 3.23
  },
  {
    "date": "2024-02-14",
    "product": "RASPBERRY 300 GR - DUBOKO ZAMRZNUTA MALINA",
    "country": "SA",
    "quantity": 3300,
    "cost": 19536.0,
    "price": 5.92
  },
  {
    "date": "2024-02-28",
    "product": "D.Z. MALINA, PAK. 16X350 KG",
    "country": "SA",
    "quantity": 10080,
    "cost": 47520.0,
    "price": 4.71
  },
  {
    "date": "2024-02-02",
    "product": "DUBOKO ZAMRZNUTA MALINA 500G (10 X 500G=1/5KG), DUBOKO ZAMRZNUTA",
    "country": "Sweden",
    "quantity": 12990,
    "cost": 40299.0,
    "price": 3.1
  },
  {
    "date": "2024-02-05",
    "product": "DUBOKO ZAMRZNUTA MALINA 500G (10 X 500G=1/5KG), DUBOKO ZAMRZNUTA",
    "country": "Sweden",
    "quantity": 12840,
    "cost": 39588.0,
    "price": 3.08
  },
  {
    "date": "2024-02-07",
    "product": "DUBOKO ZAMRZNUTA MALINA 500G (10 X 500G = 1/5 KG), DUBOKO ZAMRZNUTA",
    "country": "Sweden",
    "quantity": 13980,
    "cost": 44478.0,
    "price": 3.18
  },
  {
    "date": "2024-02-09",
    "product": "DUBOKO ZAMRZNUTA MALINA 500G (10 X 500G=1/5KG), DUBOKO ZAMRZNUTA",
    "country": "Sweden",
    "quantity": 13035,
    "cost": 40597.5,
    "price": 3.11
  },
  {
    "date": "2024-02-12",
    "product": "DUBOKO ZAMRZNUTA MALINA 500G (10 X 500G = 1/5 KG), DUBOKO ZAMRZNUTA",
    "country": "Sweden",
    "quantity": 7290,
    "cost": 22677.0,
    "price": 3.11
  },
  {
    "date": "2024-02-14",
    "product": "DUBOKO ZAMRZNUTA MALINA 500G (10 X 500G = 1/5 KG), DUBOKO ZAMRZNUTA",
    "country": "Sweden",
    "quantity": 13485,
    "cost": 42046.5,
    "price": 3.12
  },
  {
    "date": "2024-02-19",
    "product": "DUBOKO ZAMRZNUTA MALINA 500G (10 X 500G = 1/5 KG),DUBOKO ZAMRZNUTA",
    "country": "Sweden",
    "quantity": 16215,
    "cost": 51955.5,
    "price": 3.2
  },
  {
    "date": "2024-02-21",
    "product": "DUBOKO ZAMRZNUTA MALINA 1KG (10 X 1 KG = 1/10 KG)",
    "country": "Sweden",
    "quantity": 9000,
    "cost": 27000.0,
    "price": 3.0
  },
  {
    "date": "2024-02-21",
    "product": "DUBOKO ZAMRZNUTA MALINA 500G (10 X 500G = 1/5 KG), DUBOKO ZAMRZNUTA",
    "country": "Sweden",
    "quantity": 16230,
    "cost": 50805.0,
    "price": 3.13
  },
  {
    "date": "2024-02-23",
    "product": "DUBOKO ZAMRZNUTA MALINA 500G (10 X 500G=1/5KG), DUBOKO ZAMRZNUTA",
    "country": "Sweden",
    "quantity": 10755,
    "cost": 34111.5,
    "price": 3.17
  },
  {
    "date": "2024-02-26",
    "product": "DUBOKO ZAMRZNUTA MALINA 1 KG (10 X 1 KG=1/10KG), DUBOKO ZAMRZNUTA",
    "country": "Sweden",
    "quantity": 11100,
    "cost": 35190.0,
    "price": 3.17
  },
  {
    "date": "2024-02-26",
    "product": "DUBOKO ZAMRZNUTA MALINA 500G (10 X 500G=1/5KG), DUBOKO ZAMRZNUTA",
    "country": "Sweden",
    "quantity": 12960,
    "cost": 39456.0,
    "price": 3.04
  },
  {
    "date": "2024-02-28",
    "product": "DUBOKO ZAMRZNUTA MALINA 500G (10 X 500G=1/5KG), DUBOKO ZAMRZNUTA",
    "country": "Sweden",
    "quantity": 10560,
    "cost": 32256.0,
    "price": 3.05
  },
  {
    "date": "2024-02-03",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE 12X750GR",
    "country": "Sweden",
    "quantity": 6336,
    "cost": 19008.0,
    "price": 3.0
  },
  {
    "date": "2024-02-24",
    "product": "DZ MALINA (ICA), PAK. 250G",
    "country": "Sweden",
    "quantity": 6300,
    "cost": 21955.5,
    "price": 3.49
  },
  {
    "date": "2024-02-02",
    "product": "D.Z. MALINA ROLEND, PAK. 400 G",
    "country": "Sweden",
    "quantity": 5702,
    "cost": 20229.26,
    "price": 3.55
  },
  {
    "date": "2024-02-06",
    "product": "D.Z. MALINA, PAK. 10X500 G; 10X225 G",
    "country": "Sweden",
    "quantity": 16875,
    "cost": 61245.6,
    "price": 3.63
  },
  {
    "date": "2024-02-07",
    "product": "D.Z. MALINA ROLEND, PAK. 200 G",
    "country": "Sweden",
    "quantity": 6912,
    "cost": 26300.16,
    "price": 3.81
  },
  {
    "date": "2024-02-09",
    "product": "D.Z. MALINA, PAK. 10X500 G; 10X225 G; 4X2,5 KG",
    "country": "Sweden",
    "quantity": 16354,
    "cost": 59229.92,
    "price": 3.62
  },
  {
    "date": "2024-02-14",
    "product": "D.Z. MALINA, PAK. 10X500 G; 10X225 G",
    "country": "Sweden",
    "quantity": 17037,
    "cost": 61768.8,
    "price": 3.63
  },
  {
    "date": "2024-02-19",
    "product": "D.Z. MALINA ROLEND, PAK. 2 X 2,5 KG",
    "country": "Sweden",
    "quantity": 16200,
    "cost": 54561.6,
    "price": 3.37
  },
  {
    "date": "2024-02-22",
    "product": "D.Z. MALINA, PAK. 10X500 G; 10X225 G; 4X2,5 KG",
    "country": "Sweden",
    "quantity": 17056,
    "cost": 61707.92,
    "price": 3.62
  },
  {
    "date": "2024-02-13",
    "product": "ZAMRZNUTA MALINA 95/5 (FROZEN RASPBERRY 95/5) PO FAKTURI BR 8719/2024",
    "country": "SI",
    "quantity": 12800,
    "cost": 29440.0,
    "price": 2.3
  },
  {
    "date": "2024-02-10",
    "product": "D/Z MALINA 400G",
    "country": "SI",
    "quantity": 3584,
    "cost": 8354.3,
    "price": 2.33
  },
  {
    "date": "2024-02-09",
    "product": "DZ MALINA IQF RASBERRY WHOLE 1X10LB EG 4,54",
    "country": "United States",
    "quantity": 19599,
    "cost": 50796.16,
    "price": 2.59
  },
  {
    "date": "2024-02-12",
    "product": "DZ MALINA 4X2,5KG",
    "country": "United States",
    "quantity": 20000,
    "cost": 48000.0,
    "price": 2.4
  },
  {
    "date": "2024-02-12",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 4X2,5KG",
    "country": "UY",
    "quantity": 36000,
    "cost": 142920.0,
    "price": 3.97
  },
  {
    "date": "2024-02-19",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 4X2,5KG",
    "country": "UY",
    "quantity": 36000,
    "cost": 142920.0,
    "price": 3.97
  },
  {
    "date": "15.3.2024.",
    "product": "DUBOKO ZAMRZNUTA MALINA 300G",
    "country": "AE",
    "quantity": 2052.0,
    "cost": 8071.2,
    "price": 3.93
  },
  {
    "date": "1.3.2024.",
    "product": "DUBOKO ZAMRZNUTA MALINA",
    "country": "AE",
    "quantity": 1920.0,
    "cost": 5472.0,
    "price": 2.85
  },
  {
    "date": "23.3.2024.",
    "product": "DUBOKO ZAMRZNUTA MALINA 350G",
    "country": "AE",
    "quantity": 1512.0,
    "cost": 6696.0,
    "price": 4.43
  },
  {
    "date": "20.3.2024.",
    "product": "DZ MALINA",
    "country": "AE",
    "quantity": 4000.0,
    "cost": 23001.66,
    "price": 5.75
  },
  {
    "date": "22.3.2024.",
    "product": "DUBOKO ZAMRZNUTA MALINA 250G SPAR",
    "country": "AT",
    "quantity": 4800.0,
    "cost": 18048.0,
    "price": 3.76
  },
  {
    "date": "12.3.2024.",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 6X500GR; 20X500GR",
    "country": "AT",
    "quantity": 14940.0,
    "cost": 36372.6,
    "price": 2.43
  },
  {
    "date": "25.3.2024.",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 6X500GR; 20X500GR",
    "country": "AT",
    "quantity": 15480.0,
    "cost": 37738.8,
    "price": 2.44
  },
  {
    "date": "5.3.2024.",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:10X250KG",
    "country": "AT",
    "quantity": 8250.0,
    "cost": 50490.0,
    "price": 6.12
  },
  {
    "date": "5.3.2024.",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:2X2,5KG",
    "country": "AT",
    "quantity": 5445.0,
    "cost": 17115.5,
    "price": 3.14
  },
  {
    "date": "4.3.2024.",
    "product": "DZ MALINA (S-BUDGET), PAK. 500G",
    "country": "AT",
    "quantity": 10692.0,
    "cost": 31541.4,
    "price": 2.95
  },
  {
    "date": "11.3.2024.",
    "product": "DZ MALINA (S-BUDGET), PAK. 500G",
    "country": "AT",
    "quantity": 2916.0,
    "cost": 8602.2,
    "price": 2.95
  },
  {
    "date": "19.3.2024.",
    "product": "DZ MALINA (S-BUDGET), PAK. 500G",
    "country": "AT",
    "quantity": 7776.0,
    "cost": 22939.2,
    "price": 2.95
  },
  {
    "date": "25.3.2024.",
    "product": "DZ MALINA (S-BUDGET), PAK. 500G",
    "country": "AT",
    "quantity": 16038.0,
    "cost": 47312.1,
    "price": 2.95
  },
  {
    "date": "12.3.2024.",
    "product": "D/Z MALINA 300G",
    "country": "AT",
    "quantity": 5616.0,
    "cost": 12753.94,
    "price": 2.27
  },
  {
    "date": "26.3.2024.",
    "product": "D/Z MALINA 500G",
    "country": "AT",
    "quantity": 13500.0,
    "cost": 32364.9,
    "price": 2.4
  },
  {
    "date": "6.3.2024.",
    "product": "DUBOKO ZAMRZNUTA MALINA",
    "country": "AU",
    "quantity": 1080.0,
    "cost": 5263.59,
    "price": 4.87
  },
  {
    "date": "7.3.2024.",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE 6X1KG",
    "country": "AU",
    "quantity": 2160.0,
    "cost": 7776.0,
    "price": 3.6
  },
  {
    "date": "26.3.2024.",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE 6X1KG",
    "country": "AU",
    "quantity": 720.0,
    "cost": 2760.95,
    "price": 3.83
  },
  {
    "date": "5.3.2024.",
    "product": "D.Z. MALINA, PAK. 8X300 G; 1X10KG",
    "country": "AU",
    "quantity": 17128.0,
    "cost": 61585.36,
    "price": 3.6
  },
  {
    "date": "22.3.2024.",
    "product": "D.Z. MALINA, PAK. 8X300 G",
    "country": "AU",
    "quantity": 14774.4,
    "cost": 76826.88,
    "price": 5.2
  },
  {
    "date": "30.3.2024.",
    "product": "D.Z. MALINA, PAK. 8X300 G",
    "country": "AU",
    "quantity": 14774.4,
    "cost": 76826.88,
    "price": 5.2
  },
  {
    "date": "1.3.2024.",
    "product": "DUBOKO ZAMRZNUTA MALINA 300G",
    "country": "BE",
    "quantity": 7396.2,
    "cost": 23421.3,
    "price": 3.17
  },
  {
    "date": "21.3.2024.",
    "product": "DUBOKO ZAMRZNUTA MALINA 300G",
    "country": "BE",
    "quantity": 8068.2,
    "cost": 31331.51,
    "price": 3.88
  },
  {
    "date": "4.3.2024.",
    "product": "D\\Z MALINA \"ROLEND-WHOLE 750G\"",
    "country": "BE",
    "quantity": 14701.5,
    "cost": 38811.96,
    "price": 2.64
  },
  {
    "date": "11.3.2024.",
    "product": "D\\Z MALINA \"ROLEND-WHOLE 750G\"",
    "country": "BE",
    "quantity": 14701.5,
    "cost": 38811.96,
    "price": 2.64
  },
  {
    "date": "30.3.2024.",
    "product": "D\\Z MALINA \"ROLEND-WHOLE 750G\"",
    "country": "BE",
    "quantity": 14701.5,
    "cost": 38811.96,
    "price": 2.64
  },
  {
    "date": "19.3.2024.",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 6X1KG",
    "country": "BE",
    "quantity": 16380.0,
    "cost": 46191.6,
    "price": 2.82
  },
  {
    "date": "1.3.2024.",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 5X1KG",
    "country": "BE",
    "quantity": 16500.0,
    "cost": 81220.0,
    "price": 4.92
  },
  {
    "date": "15.3.2024.",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 5X1KG",
    "country": "BE",
    "quantity": 16500.0,
    "cost": 56595.0,
    "price": 3.43
  },
  {
    "date": "22.3.2024.",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 12X300GR",
    "country": "BE",
    "quantity": 3960.0,
    "cost": 11325.6,
    "price": 2.86
  },
  {
    "date": "22.3.2024.",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "BE",
    "quantity": 13860.0,
    "cost": 34372.8,
    "price": 2.48
  },
  {
    "date": "22.3.2024.",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 5X1KG",
    "country": "BE",
    "quantity": 16500.0,
    "cost": 56595.0,
    "price": 3.43
  },
  {
    "date": "18.3.2024.",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:20X500GR",
    "country": "BE",
    "quantity": 17820.0,
    "cost": 45975.6,
    "price": 2.58
  },
  {
    "date": "14.3.2024.",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 8X500GR",
    "country": "BE",
    "quantity": 10560.0,
    "cost": 32630.4,
    "price": 3.09
  },
  {
    "date": "23.3.2024.",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 12X500GR",
    "country": "BE",
    "quantity": 16848.0,
    "cost": 69919.2,
    "price": 4.15
  },
  {
    "date": "30.3.2024.",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:12X750GR",
    "country": "BE",
    "quantity": 6912.0,
    "cost": 18731.52,
    "price": 2.71
  },
  {
    "date": "12.3.2024.",
    "product": "-D/Z MALINA ROLEND BRAKES,PAK.U1.820KUT.OD 10KG,L4057DB / BBE 02/2026:",
    "country": "BE",
    "quantity": 18200.0,
    "cost": 48048.0,
    "price": 2.64
  },
  {
    "date": "1.3.2024.",
    "product": "DZ MALINA (ALDI B), PAK. 400G",
    "country": "BE",
    "quantity": 4050.0,
    "cost": 12998.48,
    "price": 3.21
  },
  {
    "date": "2.3.2024.",
    "product": "DZ MALINA (COLES), PAK. 500G",
    "country": "BE",
    "quantity": 18018.0,
    "cost": 77405.33,
    "price": 4.3
  },
  {
    "date": "2.3.2024.",
    "product": "DZ MALINA (CROPS), PAK.500G",
    "country": "BE",
    "quantity": 2772.0,
    "cost": 15176.7,
    "price": 5.48
  },
  {
    "date": "8.3.2024.",
    "product": "DZ MALINA SYSTEME U, PAK 5X1KG",
    "country": "BE",
    "quantity": 14400.0,
    "cost": 38880.0,
    "price": 2.7
  },
  {
    "date": "8.3.2024.",
    "product": "DZ MALINA (CROPS, CRUMBLE), PAK.300G, 10 KG",
    "country": "BE",
    "quantity": 8840.0,
    "cost": 24968.0,
    "price": 2.82
  },
  {
    "date": "12.3.2024.",
    "product": "DZ MALINA (COLES), PAK. 500G",
    "country": "BE",
    "quantity": 18018.0,
    "cost": 77405.33,
    "price": 4.3
  },
  {
    "date": "14.3.2024.",
    "product": "DZ MALINA (CROPS), PAK. 1KG",
    "country": "BE",
    "quantity": 5400.0,
    "cost": 15120.0,
    "price": 2.8
  },
  {
    "date": "15.3.2024.",
    "product": "DZ MALINA (COLES), PAK. 500G",
    "country": "BE",
    "quantity": 9702.0,
    "cost": 41679.79,
    "price": 4.3
  },
  {
    "date": "16.3.2024.",
    "product": "DZ MALINA (COLES), PAK. 500G",
    "country": "BE",
    "quantity": 18018.0,
    "cost": 77405.33,
    "price": 4.3
  },
  {
    "date": "18.3.2024.",
    "product": "DZ MALINA (COLES), PAK. 500G",
    "country": "BE",
    "quantity": 18018.0,
    "cost": 77405.33,
    "price": 4.3
  },
  {
    "date": "22.3.2024.",
    "product": "DZ MALINA (COLES), PAK. 500G",
    "country": "BE",
    "quantity": 18018.0,
    "cost": 77405.33,
    "price": 4.3
  },
  {
    "date": "23.3.2024.",
    "product": "DZ MALINA (COLES), PAK. 500G",
    "country": "BE",
    "quantity": 18018.0,
    "cost": 77405.33,
    "price": 4.3
  },
  {
    "date": "25.3.2024.",
    "product": "DZ MALINA DELHAIZE, PAK.250GL24082, BB:03/2026CERTIFIED BY RS-BIO-162",
    "country": "BE",
    "quantity": 891.0,
    "cost": 6941.78,
    "price": 7.79
  },
  {
    "date": "1.3.2024.",
    "product": "D/Z MALINA ROLEND",
    "country": "BE",
    "quantity": 21000.0,
    "cost": 46200.0,
    "price": 2.2
  },
  {
    "date": "12.3.2024.",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:4X2,5KG",
    "country": "BG",
    "quantity": 20480.0,
    "cost": 56320.0,
    "price": 2.75
  },
  {
    "date": "30.3.2024.",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:4X2,5KG",
    "country": "BG",
    "quantity": 20480.0,
    "cost": 56320.0,
    "price": 2.75
  },
  {
    "date": "7.3.2024.",
    "product": "DZ MALINA ROLEND",
    "country": "CA",
    "quantity": 13300.0,
    "cost": 48412.0,
    "price": 3.64
  },
  {
    "date": "29.3.2024.",
    "product": "DZ MALINA ROLEND",
    "country": "CA",
    "quantity": 10000.0,
    "cost": 36400.0,
    "price": 3.64
  },
  {
    "date": "14.3.2024.",
    "product": "DZ MALINA ROLEND",
    "country": "CA",
    "quantity": 40000.0,
    "cost": 104000.0,
    "price": 2.6
  },
  {
    "date": "4.3.2024.",
    "product": "D\\Z MALINA ROLEND 4X2,5KG VILAMET, (US NORMA) LOT:4003 PO 30715-2 DF",
    "country": "CA",
    "quantity": 18000.0,
    "cost": 50040.0,
    "price": 2.78
  },
  {
    "date": "15.3.2024.",
    "product": "D\\Z MALINA ROLEND 4X2,5KG ,WILLAMETTE (US NORMA), LOT 4004 PO 30715-3 DF",
    "country": "CA",
    "quantity": 18000.0,
    "cost": 50040.0,
    "price": 2.78
  },
  {
    "date": "18.3.2024.",
    "product": "D\\Z MALINA ROLEND 4X2,5KG VILAMET, (US NORMA) LOT:4005 PO 30715-4 DF",
    "country": "CA",
    "quantity": 18000.0,
    "cost": 50040.0,
    "price": 2.78
  },
  {
    "date": "29.3.2024.",
    "product": "D\\Z MALINA ROLEND 4X2,5KG ,WILLAMETTE (US NORMA), LOT 4006 PO 30715-3 DF",
    "country": "CA",
    "quantity": 18000.0,
    "cost": 50040.0,
    "price": 2.78
  },
  {
    "date": "5.3.2024.",
    "product": "DUBOKO ZAMRZNUTA MALINA 250G",
    "country": "CH",
    "quantity": 11880.0,
    "cost": 48114.0,
    "price": 4.05
  },
  {
    "date": "15.3.2024.",
    "product": "DUBOKO ZAMRZNUTA MALINA 250G",
    "country": "CH",
    "quantity": 2160.0,
    "cost": 8748.0,
    "price": 4.05
  },
  {
    "date": "25.3.2024.",
    "product": "DZ MALINA-IQF RASPBERRIES",
    "country": "CH",
    "quantity": 1134.0,
    "cost": 3924.86,
    "price": 3.46
  },
  {
    "date": "6.3.2024.",
    "product": "D/Z MALINA 500G",
    "country": "CZ",
    "quantity": 15360.0,
    "cost": 35125.25,
    "price": 2.29
  },
  {
    "date": "9.3.2024.",
    "product": "DUBOKO ZAMRZNUTA MALINA",
    "country": "DE",
    "quantity": 16253.0,
    "cost": 48170.0,
    "price": 2.96
  },
  {
    "date": "14.3.2024.",
    "product": "DUBOKO ZAMRZNUTA MALINA",
    "country": "DE",
    "quantity": 11832.0,
    "cost": 34716.8,
    "price": 2.93
  },
  {
    "date": "19.3.2024.",
    "product": "DUBOKO ZAMRZNUTA MALINA",
    "country": "DE",
    "quantity": 7280.0,
    "cost": 20966.4,
    "price": 2.88
  },
  {
    "date": "29.3.2024.",
    "product": "DUBOKO ZAMRZNUTA MALINA",
    "country": "DE",
    "quantity": 8960.0,
    "cost": 25804.8,
    "price": 2.88
  },
  {
    "date": "11.3.2024.",
    "product": "DUBOKO ZAMRZNUTA MALINA PAKOVANJE 0,400GR",
    "country": "DE",
    "quantity": 12672.0,
    "cost": 47520.0,
    "price": 3.75
  },
  {
    "date": "4.3.2024.",
    "product": "DUBOKO ZAMRZNUTA MALINA 95/5 PAKOVANJE: 4X2,5KG",
    "country": "DE",
    "quantity": 20790.0,
    "cost": 49864.82,
    "price": 2.4
  },
  {
    "date": "2.3.2024.",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 10X500GR",
    "country": "DE",
    "quantity": 16335.0,
    "cost": 39694.05,
    "price": 2.43
  },
  {
    "date": "2.3.2024.",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 12X750GR",
    "country": "DE",
    "quantity": 18711.0,
    "cost": 46029.06,
    "price": 2.46
  },
  {
    "date": "2.3.2024.",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 6X500GR",
    "country": "DE",
    "quantity": 11880.0,
    "cost": 28630.8,
    "price": 2.41
  },
  {
    "date": "4.3.2024.",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 12X750GR",
    "country": "DE",
    "quantity": 18711.0,
    "cost": 46029.06,
    "price": 2.46
  },
  {
    "date": "9.3.2024.",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 10X500GR",
    "country": "DE",
    "quantity": 15345.0,
    "cost": 37288.35,
    "price": 2.43
  },
  {
    "date": "12.3.2024.",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 6X500GR I 10X500GR",
    "country": "DE",
    "quantity": 14715.0,
    "cost": 35671.05,
    "price": 2.42
  },
  {
    "date": "16.3.2024.",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 12X750GR",
    "country": "DE",
    "quantity": 18711.0,
    "cost": 49771.26,
    "price": 2.66
  },
  {
    "date": "18.3.2024.",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 12X750GR",
    "country": "DE",
    "quantity": 18711.0,
    "cost": 49771.26,
    "price": 2.66
  },
  {
    "date": "18.3.2024.",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 6X500GR I 10X500GR",
    "country": "DE",
    "quantity": 14715.0,
    "cost": 35671.05,
    "price": 2.42
  },
  {
    "date": "23.3.2024.",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 6X500GR I 10X500GR",
    "country": "DE",
    "quantity": 14985.0,
    "cost": 36341.55,
    "price": 2.43
  },
  {
    "date": "23.3.2024.",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE 10X500GR",
    "country": "DE",
    "quantity": 13365.0,
    "cost": 32476.95,
    "price": 2.43
  },
  {
    "date": "4.3.2024.",
    "product": "D/Z MALINA - DEEP FROZEN RASPBERRY ROLLEND 12X750GR",
    "country": "DE",
    "quantity": 18711.0,
    "cost": 47900.16,
    "price": 2.56
  },
  {
    "date": "5.3.2024.",
    "product": "D/Z MALINA - DEEP FROZEN RASPBERRY ROLLEND 12X750GR",
    "country": "DE",
    "quantity": 18711.0,
    "cost": 47900.16,
    "price": 2.56
  },
  {
    "date": "16.3.2024.",
    "product": "D/Z MALINA - DF RASPBERRY ROLLEND 12X750GR",
    "country": "DE",
    "quantity": 18711.0,
    "cost": 51642.36,
    "price": 2.76
  },
  {
    "date": "23.3.2024.",
    "product": "D/Z MALINA - DEEP FROZEN RASPBERRY ROLLEND 12X750GR",
    "country": "DE",
    "quantity": 18711.0,
    "cost": 51642.36,
    "price": 2.76
  },
  {
    "date": "15.3.2024.",
    "product": "D\\Z MALINA DEEP FROZEN ROLLEND 4X2,5KG",
    "country": "DE",
    "quantity": 20790.0,
    "cost": 53014.5,
    "price": 2.55
  },
  {
    "date": "8.3.2024.",
    "product": "D/Z MALINA-DEEP FROZEN RASPBERRY ROLLEND 4X2,5KG,15X600G",
    "country": "DE",
    "quantity": 20097.0,
    "cost": 55197.45,
    "price": 2.75
  },
  {
    "date": "15.3.2024.",
    "product": "D/Z MALINE \" IQF RASPBERRIES \" 4X2.5KG",
    "country": "DE",
    "quantity": 20790.0,
    "cost": 46361.7,
    "price": 2.23
  },
  {
    "date": "1.3.2024.",
    "product": "DZ MALINA ROLEND 4X2,5KG - IQF RASPBERRY 4X2,5KG",
    "country": "DE",
    "quantity": 20790.0,
    "cost": 48856.5,
    "price": 2.35
  },
  {
    "date": "15.3.2024.",
    "product": "DZ MALINA ROLEND 90/10",
    "country": "DE",
    "quantity": 20790.0,
    "cost": 45530.1,
    "price": 2.19
  },
  {
    "date": "1.3.2024.",
    "product": "ZAMRZNUTA MALINA ROLEND (IQF RASPBERRY WHOLE 95/5,4X2,5KG) PO FAKTURI",
    "country": "DE",
    "quantity": 20790.0,
    "cost": 47817.0,
    "price": 2.3
  },
  {
    "date": "11.3.2024.",
    "product": "ZAMRZNUTA MALINA ROLEND (IQF RASPBERRIES WHOLE) PO FAKTURI 8766/2024",
    "country": "DE",
    "quantity": 20790.0,
    "cost": 51975.0,
    "price": 2.5
  },
  {
    "date": "21.3.2024.",
    "product": "ZAMRZNUTA MALINA ROLEND (IQF RASPBERRY WHOLE 95/5,4X2,5KG) PO FAKTURI",
    "country": "DE",
    "quantity": 20790.0,
    "cost": 51975.0,
    "price": 2.5
  },
  {
    "date": "23.3.2024.",
    "product": "ZAMRZNUTA MALINA ROLEND (IQF RASPBERRY WHOLE 85/15,4X2,5KG) PO FAKTURI",
    "country": "DE",
    "quantity": 18480.0,
    "cost": 41764.8,
    "price": 2.26
  },
  {
    "date": "22.3.2024.",
    "product": "DUBOKO ZAMRZNUTA MALINA I.Q.F. PREMA PRIL.FAKTURI.",
    "country": "DE",
    "quantity": 20790.0,
    "cost": 53430.3,
    "price": 2.57
  },
  {
    "date": "2.3.2024.",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X500GR",
    "country": "DE",
    "quantity": 16335.0,
    "cost": 41490.9,
    "price": 2.54
  },
  {
    "date": "2.3.2024.",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 14X500GR",
    "country": "DE",
    "quantity": 14784.0,
    "cost": 36856.51,
    "price": 2.49
  },
  {
    "date": "2.3.2024.",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 14X500GR; 20X500GR",
    "country": "DE",
    "quantity": 19760.0,
    "cost": 49798.4,
    "price": 2.52
  },
  {
    "date": "2.3.2024.",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "DE",
    "quantity": 40410.0,
    "cost": 100625.4,
    "price": 2.49
  },
  {
    "date": "2.3.2024.",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:10X500GR",
    "country": "DE",
    "quantity": 11385.0,
    "cost": 28917.9,
    "price": 2.54
  },
  {
    "date": "2.3.2024.",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:14X500GR",
    "country": "DE",
    "quantity": 18480.0,
    "cost": 45091.2,
    "price": 2.44
  },
  {
    "date": "4.3.2024.",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X300GR; 20X500GR",
    "country": "DE",
    "quantity": 19530.0,
    "cost": 50025.15,
    "price": 2.56
  },
  {
    "date": "4.3.2024.",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 14X500GR",
    "country": "DE",
    "quantity": 14784.0,
    "cost": 36856.51,
    "price": 2.49
  },
  {
    "date": "5.3.2024.",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X500GR; 20X500GR",
    "country": "DE",
    "quantity": 14400.0,
    "cost": 36576.0,
    "price": 2.54
  },
  {
    "date": "5.3.2024.",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "DE",
    "quantity": 20160.0,
    "cost": 49392.0,
    "price": 2.45
  },
  {
    "date": "5.3.2024.",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:14X500GR",
    "country": "DE",
    "quantity": 18480.0,
    "cost": 45091.2,
    "price": 2.44
  },
  {
    "date": "6.3.2024.",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:10X300GR; 18X500GR",
    "country": "DE",
    "quantity": 18477.0,
    "cost": 48053.17,
    "price": 2.6
  },
  {
    "date": "8.3.2024.",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "DE",
    "quantity": 31680.0,
    "cost": 78914.88,
    "price": 2.49
  },
  {
    "date": "8.3.2024.",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:14X500GR",
    "country": "DE",
    "quantity": 18480.0,
    "cost": 45091.2,
    "price": 2.44
  },
  {
    "date": "9.3.2024.",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "DE",
    "quantity": 20160.0,
    "cost": 49190.4,
    "price": 2.44
  },
  {
    "date": "11.3.2024.",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 14X500GR",
    "country": "DE",
    "quantity": 14784.0,
    "cost": 36856.51,
    "price": 2.49
  },
  {
    "date": "11.3.2024.",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 24X350GR",
    "country": "DE",
    "quantity": 19958.4,
    "cost": 50993.71,
    "price": 2.55
  },
  {
    "date": "12.3.2024.",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X500GR",
    "country": "DE",
    "quantity": 16335.0,
    "cost": 41490.9,
    "price": 2.54
  },
  {
    "date": "12.3.2024.",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 18X500GR",
    "country": "DE",
    "quantity": 8505.0,
    "cost": 22087.49,
    "price": 2.6
  },
  {
    "date": "12.3.2024.",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:14X500GR",
    "country": "DE",
    "quantity": 18480.0,
    "cost": 45091.2,
    "price": 2.44
  },
  {
    "date": "16.3.2024.",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 14X500GR",
    "country": "DE",
    "quantity": 44352.0,
    "cost": 110559.1,
    "price": 2.49
  },
  {
    "date": "16.3.2024.",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "DE",
    "quantity": 20160.0,
    "cost": 51206.4,
    "price": 2.54
  },
  {
    "date": "18.3.2024.",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X300GR; 10X500GR",
    "country": "DE",
    "quantity": 11070.0,
    "cost": 28536.75,
    "price": 2.58
  },
  {
    "date": "19.3.2024.",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 14X500GR",
    "country": "DE",
    "quantity": 14784.0,
    "cost": 36856.51,
    "price": 2.49
  },
  {
    "date": "19.3.2024.",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 16X500GR",
    "country": "DE",
    "quantity": 14784.0,
    "cost": 37140.36,
    "price": 2.51
  },
  {
    "date": "19.3.2024.",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 6X500GR; 20X500GR",
    "country": "DE",
    "quantity": 16484.0,
    "cost": 40220.96,
    "price": 2.44
  },
  {
    "date": "22.3.2024.",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 6X500GR; 12X750GR",
    "country": "DE",
    "quantity": 15408.0,
    "cost": 37670.4,
    "price": 2.44
  },
  {
    "date": "23.3.2024.",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X500GR",
    "country": "DE",
    "quantity": 16335.0,
    "cost": 41490.9,
    "price": 2.54
  },
  {
    "date": "23.3.2024.",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "DE",
    "quantity": 40320.0,
    "cost": 102412.8,
    "price": 2.54
  },
  {
    "date": "23.3.2024.",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR; 14X500GR",
    "country": "DE",
    "quantity": 19600.0,
    "cost": 48832.0,
    "price": 2.49
  },
  {
    "date": "23.3.2024.",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:14X500GR",
    "country": "DE",
    "quantity": 18480.0,
    "cost": 45091.2,
    "price": 2.44
  },
  {
    "date": "25.3.2024.",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X300GR; 20X500GR",
    "country": "DE",
    "quantity": 11340.0,
    "cost": 29641.5,
    "price": 2.61
  },
  {
    "date": "25.3.2024.",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 14X500GR",
    "country": "DE",
    "quantity": 14784.0,
    "cost": 36856.51,
    "price": 2.49
  },
  {
    "date": "25.3.2024.",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:14X500; 20X500GR",
    "country": "DE",
    "quantity": 18830.0,
    "cost": 46260.2,
    "price": 2.46
  },
  {
    "date": "26.3.2024.",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "DE",
    "quantity": 20160.0,
    "cost": 51206.4,
    "price": 2.54
  },
  {
    "date": "26.3.2024.",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR; 12X750GR",
    "country": "DE",
    "quantity": 19946.0,
    "cost": 50605.24,
    "price": 2.54
  },
  {
    "date": "30.3.2024.",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X500GR",
    "country": "DE",
    "quantity": 16335.0,
    "cost": 41490.9,
    "price": 2.54
  },
  {
    "date": "30.3.2024.",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 10X500GR; 20X500GR",
    "country": "DE",
    "quantity": 17350.0,
    "cost": 44069.0,
    "price": 2.54
  },
  {
    "date": "30.3.2024.",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "DE",
    "quantity": 40320.0,
    "cost": 102412.8,
    "price": 2.54
  },
  {
    "date": "2.3.2024.",
    "product": "TK- HIMBEEREN FRESHONA DE/AT 20X500G",
    "country": "DE",
    "quantity": 20250.0,
    "cost": 51435.0,
    "price": 2.54
  },
  {
    "date": "9.3.2024.",
    "product": "TK- HIMBEEREN FRESHONA DE/AT 20X500G",
    "country": "DE",
    "quantity": 20250.0,
    "cost": 51435.0,
    "price": 2.54
  },
  {
    "date": "12.3.2024.",
    "product": "TK-BIO HIMBEEREN 4X2,5KG,10KG PER KARTON",
    "country": "DE",
    "quantity": 20000.0,
    "cost": 71800.0,
    "price": 3.59
  },
  {
    "date": "16.3.2024.",
    "product": "TK- HIMBEEREN FRESHONA DE/AT 20X500G",
    "country": "DE",
    "quantity": 20250.0,
    "cost": 51435.0,
    "price": 2.54
  },
  {
    "date": "19.3.2024.",
    "product": "TK- HIMBEEREN FRESHONA DE/AT 20X500G",
    "country": "DE",
    "quantity": 20250.0,
    "cost": 51435.0,
    "price": 2.54
  },
  {
    "date": "23.3.2024.",
    "product": "TK- HIMBEEREN FRESHONA DE/AT 20X500G",
    "country": "DE",
    "quantity": 20250.0,
    "cost": 51435.0,
    "price": 2.54
  },
  {
    "date": "26.3.2024.",
    "product": "TK- HIMBEEREN FRESHONA DE/AT 20X500G",
    "country": "DE",
    "quantity": 20250.0,
    "cost": 51435.0,
    "price": 2.54
  },
  {
    "date": "30.3.2024.",
    "product": "TK- HIMBEEREN FRESHONA DE/AT 20X500G",
    "country": "DE",
    "quantity": 20250.0,
    "cost": 51435.0,
    "price": 2.54
  },
  {
    "date": "12.3.2024.",
    "product": "ZAMRZNUTA MALINA",
    "country": "DE",
    "quantity": 20250.0,
    "cost": 51435.0,
    "price": 2.54
  },
  {
    "date": "12.3.2024.",
    "product": "ZAMRZNUTA MALINA,PAKOVANJE 6X500GR",
    "country": "DE",
    "quantity": 13068.0,
    "cost": 31885.92,
    "price": 2.44
  },
  {
    "date": "8.3.2024.",
    "product": "-D/Z MALINA ROLEND PAK.U 1485KUT.L4061/01.03.2026 - MATERIAL NO.",
    "country": "DE",
    "quantity": 14850.0,
    "cost": 47371.5,
    "price": 3.19
  },
  {
    "date": "22.3.2024.",
    "product": "D.Z. MALINA ROLEND 4X2,5",
    "country": "DE",
    "quantity": 20000.0,
    "cost": 48000.0,
    "price": 2.4
  },
  {
    "date": "1.3.2024.",
    "product": "D/Z MALINA 500G",
    "country": "DE",
    "quantity": 3600.0,
    "cost": 8609.76,
    "price": 2.39
  },
  {
    "date": "1.3.2024.",
    "product": "D/Z MALINA 750G",
    "country": "DE",
    "quantity": 16038.0,
    "cost": 36573.06,
    "price": 2.28
  },
  {
    "date": "4.3.2024.",
    "product": "D/Z MALINA 500G",
    "country": "DE",
    "quantity": 14850.0,
    "cost": 36810.18,
    "price": 2.48
  },
  {
    "date": "5.3.2024.",
    "product": "D/Z MALINA 500G",
    "country": "DE",
    "quantity": 14850.0,
    "cost": 35432.1,
    "price": 2.39
  },
  {
    "date": "8.3.2024.",
    "product": "D/Z MALINA 500G",
    "country": "DE",
    "quantity": 5760.0,
    "cost": 13403.52,
    "price": 2.33
  },
  {
    "date": "13.3.2024.",
    "product": "D/Z MALINA 300G",
    "country": "DE",
    "quantity": 8568.0,
    "cost": 21451.42,
    "price": 2.5
  },
  {
    "date": "16.3.2024.",
    "product": "D/Z MALINA 500G",
    "country": "DE",
    "quantity": 15840.0,
    "cost": 38478.53,
    "price": 2.43
  },
  {
    "date": "18.3.2024.",
    "product": "D/Z MALINA 500G",
    "country": "DE",
    "quantity": 14850.0,
    "cost": 36510.21,
    "price": 2.46
  },
  {
    "date": "19.3.2024.",
    "product": "D/Z MALINA 500G",
    "country": "DE",
    "quantity": 30690.0,
    "cost": 73962.87,
    "price": 2.41
  },
  {
    "date": "22.3.2024.",
    "product": "D/Z MALINA 500G, 300G",
    "country": "DE",
    "quantity": 15984.0,
    "cost": 38007.22,
    "price": 2.38
  },
  {
    "date": "29.3.2024.",
    "product": "D/Z MALINA 500G",
    "country": "DE",
    "quantity": 13860.0,
    "cost": 33628.21,
    "price": 2.43
  },
  {
    "date": "29.3.2024.",
    "product": "D/Z MALINA 750G",
    "country": "DE",
    "quantity": 16038.0,
    "cost": 36282.23,
    "price": 2.26
  },
  {
    "date": "5.3.2024.",
    "product": "D/Z MALINA 300G",
    "country": "DE",
    "quantity": 2520.0,
    "cost": 6230.28,
    "price": 2.47
  },
  {
    "date": "16.3.2024.",
    "product": "D/Z MALINA 300G.",
    "country": "DE",
    "quantity": 16632.0,
    "cost": 41646.53,
    "price": 2.5
  },
  {
    "date": "19.3.2024.",
    "product": "D/Z MALINA 300G.",
    "country": "DE",
    "quantity": 2520.0,
    "cost": 6316.8,
    "price": 2.51
  },
  {
    "date": "23.3.2024.",
    "product": "D/Z MALINA 300G.",
    "country": "DE",
    "quantity": 16632.0,
    "cost": 41607.72,
    "price": 2.5
  },
  {
    "date": "29.3.2024.",
    "product": "D/Z MALINA 300G.",
    "country": "DE",
    "quantity": 16632.0,
    "cost": 41652.07,
    "price": 2.5
  },
  {
    "date": "4.3.2024.",
    "product": "D/Z MALINA",
    "country": "DE",
    "quantity": 20790.0,
    "cost": 50935.5,
    "price": 2.45
  },
  {
    "date": "22.3.2024.",
    "product": "D/Z MALINA",
    "country": "DE",
    "quantity": 20790.0,
    "cost": 50935.5,
    "price": 2.45
  },
  {
    "date": "1.3.2024.",
    "product": "D.Z. MALINA ROLEND, PAK. 200 GR",
    "country": "DK",
    "quantity": 4320.0,
    "cost": 16005.6,
    "price": 3.71
  },
  {
    "date": "8.3.2024.",
    "product": "DUBOKO ZAMRZNUTA MALINA 1/5 KG (10X500G) -K-MENU, DUBOKO ZAMZNUTA",
    "country": "FI",
    "quantity": 8112.0,
    "cost": 26863.2,
    "price": 3.31
  },
  {
    "date": "29.3.2024.",
    "product": "DUBOKO ZAMRZNUTA MALINA 1/5 KG (10X500G) -K-MENU, DUBOKO ZAMZNUTA",
    "country": "FI",
    "quantity": 7152.0,
    "cost": 23772.0,
    "price": 3.32
  },
  {
    "date": "8.3.2024.",
    "product": "D.Z. MALINA ROLEND, PAK. 200G I 400G",
    "country": "FI",
    "quantity": 14731.2,
    "cost": 55912.03,
    "price": 3.8
  },
  {
    "date": "16.3.2024.",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE:10X500GR",
    "country": "FR",
    "quantity": 9405.0,
    "cost": 26428.05,
    "price": 2.81
  },
  {
    "date": "9.3.2024.",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 12X500GR; 5X1KG",
    "country": "FR",
    "quantity": 15488.0,
    "cost": 40352.0,
    "price": 2.61
  },
  {
    "date": "4.3.2024.",
    "product": "DZ MALINA ROLEND",
    "country": "FR",
    "quantity": 10000.0,
    "cost": 23500.0,
    "price": 2.35
  },
  {
    "date": "25.3.2024.",
    "product": "DZ MALINA ROLEND",
    "country": "FR",
    "quantity": 14520.0,
    "cost": 35898.0,
    "price": 2.47
  },
  {
    "date": "1.3.2024.",
    "product": "ZAMRZNUTA MALINA -DF RASPBERRIES WHOLE (4X2,5)",
    "country": "FR",
    "quantity": 9520.0,
    "cost": 23324.0,
    "price": 2.45
  },
  {
    "date": "8.3.2024.",
    "product": "ZAMRZNUTA MALINA -DF RASPBERRIES WHOLE (4X2,5)",
    "country": "FR",
    "quantity": 8960.0,
    "cost": 21952.0,
    "price": 2.45
  },
  {
    "date": "1.3.2024.",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG; 5X1KG",
    "country": "FR",
    "quantity": 19420.0,
    "cost": 56453.0,
    "price": 2.91
  },
  {
    "date": "7.3.2024.",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG; 12X500GR",
    "country": "FR",
    "quantity": 18688.0,
    "cost": 90912.0,
    "price": 4.86
  },
  {
    "date": "22.3.2024.",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 12X500GR",
    "country": "FR",
    "quantity": 11088.0,
    "cost": 36036.0,
    "price": 3.25
  },
  {
    "date": "1.3.2024.",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 12X0,5KG",
    "country": "FR",
    "quantity": 11880.0,
    "cost": 71874.0,
    "price": 6.05
  },
  {
    "date": "1.3.2024.",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 7X0,5KG",
    "country": "FR",
    "quantity": 3.5,
    "cost": 21.17,
    "price": 6.05
  },
  {
    "date": "11.3.2024.",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 15/1KG",
    "country": "FR",
    "quantity": 20880.0,
    "cost": 55332.0,
    "price": 2.65
  },
  {
    "date": "11.3.2024.",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 6X0,5KG",
    "country": "FR",
    "quantity": 3.0,
    "cost": 7.95,
    "price": 2.65
  },
  {
    "date": "25.3.2024.",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 15/1KG",
    "country": "FR",
    "quantity": 12960.0,
    "cost": 35640.0,
    "price": 2.75
  },
  {
    "date": "25.3.2024.",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 1X0,5;4X0,5KG",
    "country": "FR",
    "quantity": 2.5,
    "cost": 7.33,
    "price": 2.93
  },
  {
    "date": "25.3.2024.",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "FR",
    "quantity": 2800.0,
    "cost": 10220.0,
    "price": 3.65
  },
  {
    "date": "16.3.2024.",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 5X1KG",
    "country": "FR",
    "quantity": 17820.0,
    "cost": 35775.0,
    "price": 2.01
  },
  {
    "date": "4.3.2024.",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 5X1KG",
    "country": "FR",
    "quantity": 17820.0,
    "cost": 48114.0,
    "price": 2.7
  },
  {
    "date": "29.3.2024.",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 5X1KG; 4X2,5KG",
    "country": "FR",
    "quantity": 18620.0,
    "cost": 34326.0,
    "price": 1.84
  },
  {
    "date": "21.3.2024.",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE 5X1KG",
    "country": "FR",
    "quantity": 17820.0,
    "cost": 47757.6,
    "price": 2.68
  },
  {
    "date": "8.3.2024.",
    "product": "DZ MALINA ROLEND 5X1 KG",
    "country": "FR",
    "quantity": 15840.0,
    "cost": 38016.0,
    "price": 2.4
  },
  {
    "date": "21.3.2024.",
    "product": "D.Z. MALINA ROLEND, PAK. 500G",
    "country": "FR",
    "quantity": 8640.0,
    "cost": 26956.8,
    "price": 3.12
  },
  {
    "date": "22.3.2024.",
    "product": "D\\Z MALINA -FERTODI \"ROLEND\" PAK. 4KG (8X500G)- 800 KUTIJA",
    "country": "FR",
    "quantity": 3200.0,
    "cost": 10080.0,
    "price": 3.15
  },
  {
    "date": "4.3.2024.",
    "product": "D\\Z MALINA ROLEND 5X1KG - VILAMET, LOT :232978,D\\Z MALINA ROLEND 20X450G",
    "country": "FR",
    "quantity": 18784.0,
    "cost": 64992.0,
    "price": 3.46
  },
  {
    "date": "11.3.2024.",
    "product": "D\\Z MALINA ROLEND 20X450G- VILAMET, LOT: 233473, 240121 DF RASPBERRY IQF",
    "country": "FR",
    "quantity": 19008.0,
    "cost": 47520.0,
    "price": 2.5
  },
  {
    "date": "18.3.2024.",
    "product": "D\\Z MALINA ROLEND 5X1KG-VILAMET LOT: 240172,240173 DF RASPBERRY IQF 5X1KG-",
    "country": "FR",
    "quantity": 19320.0,
    "cost": 92736.0,
    "price": 4.8
  },
  {
    "date": "30.3.2024.",
    "product": "D\\Z MALINA ROLEND 20X450G- VILAMET, LOT: 240121, 240122 DF RASPBERRY IQF",
    "country": "FR",
    "quantity": 19008.0,
    "cost": 47520.0,
    "price": 2.5
  },
  {
    "date": "8.3.2024.",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 4X2,5KG; 5X1KG",
    "country": "FR",
    "quantity": 11460.0,
    "cost": 27120.0,
    "price": 2.37
  },
  {
    "date": "12.3.2024.",
    "product": "D.Z. MALINA, PAK. 500 G",
    "country": "FR",
    "quantity": 1350.0,
    "cost": 4266.0,
    "price": 3.16
  },
  {
    "date": "21.3.2024.",
    "product": "D.Z. MALINA, PAK. 500 G",
    "country": "FR",
    "quantity": 5850.0,
    "cost": 18486.0,
    "price": 3.16
  },
  {
    "date": "5.3.2024.",
    "product": "DZ MALINA ROLEND PAK.11 KG",
    "country": "GB",
    "quantity": 20207.0,
    "cost": 48496.8,
    "price": 2.4
  },
  {
    "date": "22.3.2024.",
    "product": "DZ MALINA ROLEND PAK.11 KG",
    "country": "GB",
    "quantity": 20207.0,
    "cost": 48496.8,
    "price": 2.4
  },
  {
    "date": "4.3.2024.",
    "product": "UZORCI DUBOKO ZAMRZNUTE MALINE",
    "country": "GB",
    "quantity": 1.0,
    "cost": 3.0,
    "price": 3.0
  },
  {
    "date": "8.3.2024.",
    "product": "DUBOKO ZAMRZNUTA MALINA 300G (1/4,2 KG)",
    "country": "GB",
    "quantity": 17472.0,
    "cost": 57124.7,
    "price": 3.27
  },
  {
    "date": "11.3.2024.",
    "product": "DUBOKO ZAMRZNUTA MALINA 300G (1/4,2 KG)",
    "country": "GB",
    "quantity": 17472.0,
    "cost": 57218.26,
    "price": 3.27
  },
  {
    "date": "12.3.2024.",
    "product": "DUBOKO ZAMRZNUTA MALINA 300G (1/4,2 KG)",
    "country": "GB",
    "quantity": 17472.0,
    "cost": 57218.26,
    "price": 3.27
  },
  {
    "date": "27.3.2024.",
    "product": "DUBOKO ZAMRZNUTA MALINA 300G (1/4,2 KG)",
    "country": "GB",
    "quantity": 17472.0,
    "cost": 57024.82,
    "price": 3.26
  },
  {
    "date": "23.3.2024.",
    "product": "DUBOKO ZAMRZNUTA MALINA PAKOVANJE 300G MS",
    "country": "GB",
    "quantity": 5940.0,
    "cost": 27391.86,
    "price": 4.61
  },
  {
    "date": "30.3.2024.",
    "product": "DUBOKO ZAMRZNUTA MALINA PAKOVANJE 300G AD",
    "country": "GB",
    "quantity": 15876.0,
    "cost": 72912.27,
    "price": 4.59
  },
  {
    "date": "12.3.2024.",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 24X350GR",
    "country": "GB",
    "quantity": 19958.4,
    "cost": 59476.03,
    "price": 2.98
  },
  {
    "date": "22.3.2024.",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 24X350GR",
    "country": "GB",
    "quantity": 19958.4,
    "cost": 59476.03,
    "price": 2.98
  },
  {
    "date": "29.3.2024.",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 24X350GR",
    "country": "GB",
    "quantity": 19958.4,
    "cost": 59476.03,
    "price": 2.98
  },
  {
    "date": "15.3.2024.",
    "product": "ZAMRZNUTA MALINA 95/5 (IQF RASPBERRY WHOLE 95/5) PO FAKTURI 8775/2024",
    "country": "GB",
    "quantity": 18480.0,
    "cost": 50820.0,
    "price": 2.75
  },
  {
    "date": "20.3.2024.",
    "product": "ZAMRZNUTA MALINA 95/5 (IQF RASPBERRY WHOLE 95/5)PO FAKTURI 8779/2024",
    "country": "GB",
    "quantity": 18480.0,
    "cost": 54885.6,
    "price": 2.97
  },
  {
    "date": "25.3.2024.",
    "product": "ZAMRZNUTA MALINA 95/5 (IQF RASPBERRY WHOLE 95/5) PO FAKTURI 8789/2024",
    "country": "GB",
    "quantity": 18480.0,
    "cost": 50820.0,
    "price": 2.75
  },
  {
    "date": "7.3.2024.",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "GB",
    "quantity": 20790.0,
    "cost": 52390.8,
    "price": 2.52
  },
  {
    "date": "8.3.2024.",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "GB",
    "quantity": 20790.0,
    "cost": 59667.3,
    "price": 2.87
  },
  {
    "date": "11.3.2024.",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "GB",
    "quantity": 20790.0,
    "cost": 59667.3,
    "price": 2.87
  },
  {
    "date": "14.3.2024.",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "GB",
    "quantity": 20790.0,
    "cost": 51351.3,
    "price": 2.47
  },
  {
    "date": "15.3.2024.",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "GB",
    "quantity": 20790.0,
    "cost": 59667.3,
    "price": 2.87
  },
  {
    "date": "18.3.2024.",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "GB",
    "quantity": 20790.0,
    "cost": 51351.3,
    "price": 2.47
  },
  {
    "date": "22.3.2024.",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 4X2,5KG",
    "country": "GB",
    "quantity": 20790.0,
    "cost": 59667.3,
    "price": 2.87
  },
  {
    "date": "2.3.2024.",
    "product": "DZ MALINA (DEL MONTE), PAK. 300G",
    "country": "GB",
    "quantity": 10125.0,
    "cost": 45663.75,
    "price": 4.51
  },
  {
    "date": "9.3.2024.",
    "product": "DZ MALINA (DEL MONTE), PAK. 300G",
    "country": "GB",
    "quantity": 9450.0,
    "cost": 42619.5,
    "price": 4.51
  },
  {
    "date": "22.3.2024.",
    "product": "DZ MALINA (OCADO), PAK. 300G",
    "country": "GB",
    "quantity": 12096.0,
    "cost": 56609.28,
    "price": 4.68
  },
  {
    "date": "14.3.2024.",
    "product": "DUBOKO ZAMRZNUTA MALINA 300GDUBOKO ZAMRZNUTA MALINA 2.5KG",
    "country": "HR",
    "quantity": 10032.0,
    "cost": 29587.2,
    "price": 2.95
  },
  {
    "date": "13.3.2024.",
    "product": "D/Z MALINA 400G",
    "country": "HR",
    "quantity": 2816.0,
    "cost": 6507.07,
    "price": 2.31
  },
  {
    "date": "6.3.2024.",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 10X250GR, 10X500GR",
    "country": "HU",
    "quantity": 5280.0,
    "cost": 13776.0,
    "price": 2.61
  },
  {
    "date": "28.3.2024.",
    "product": "DUBOKO ZAMRZNUTA MALINA 500G",
    "country": "IS",
    "quantity": 6720.0,
    "cost": 20832.0,
    "price": 3.1
  },
  {
    "date": "8.3.2024.",
    "product": "ZAMRZNUTA MALINA 4X2,5KG - FROZEN RASSPERIES CALIBRATED 4X2,5KG",
    "country": "IT",
    "quantity": 20480.0,
    "cost": 59392.0,
    "price": 2.9
  },
  {
    "date": "18.3.2024.",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:20X500GR",
    "country": "JP",
    "quantity": 9130.0,
    "cost": 33963.6,
    "price": 3.72
  },
  {
    "date": "25.3.2024.",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE:20X500GR",
    "country": "JP",
    "quantity": 9130.0,
    "cost": 33963.6,
    "price": 3.72
  },
  {
    "date": "26.3.2024.",
    "product": "ZAMRZNUTA MALINA ROLEND 10KG",
    "country": "KW",
    "quantity": 6000.0,
    "cost": 24660.0,
    "price": 4.11
  },
  {
    "date": "27.3.2024.",
    "product": "DZ MALINA RASBERRIES RIMI FROZEN",
    "country": "LV",
    "quantity": 5760.0,
    "cost": 19699.2,
    "price": 3.42
  },
  {
    "date": "6.3.2024.",
    "product": "SMRZNUTE MALINE",
    "country": "ME",
    "quantity": 499.2,
    "cost": 1547.52,
    "price": 3.1
  },
  {
    "date": "13.3.2024.",
    "product": "SMRZNUTE MALINE",
    "country": "ME",
    "quantity": 998.4,
    "cost": 3095.4,
    "price": 3.1
  },
  {
    "date": "11.3.2024.",
    "product": "BSM MALINA 450G PO FAKTURI",
    "country": "ME",
    "quantity": 504.0,
    "cost": 2721.6,
    "price": 5.4
  },
  {
    "date": "25.3.2024.",
    "product": "MALINA 300 GR FAKTURA: 91296944 STAVKA: 7",
    "country": "MK",
    "quantity": 499.2,
    "cost": 1547.52,
    "price": 3.1
  },
  {
    "date": "27.3.2024.",
    "product": "D/Z MALINA 300G",
    "country": "MK",
    "quantity": 1152.0,
    "cost": 3801.6,
    "price": 3.3
  },
  {
    "date": "19.3.2024.",
    "product": "DZ MALINA ROLEND PAK.10X1KG",
    "country": "NL",
    "quantity": 10710.0,
    "cost": 24097.5,
    "price": 2.25
  },
  {
    "date": "19.3.2024.",
    "product": "DUBOKO ZAMRZNUTA MALINA",
    "country": "NL",
    "quantity": 1064.0,
    "cost": 2834.16,
    "price": 2.66
  },
  {
    "date": "25.3.2024.",
    "product": "DUBOKO ZAMRZNUTA MALINA",
    "country": "NL",
    "quantity": 18760.0,
    "cost": 48765.36,
    "price": 2.6
  },
  {
    "date": "1.3.2024.",
    "product": "DUBOKO ZAMRZNUTA MALINA 250G, DUBOKO ZAMRZNUTA MALINA 750G,",
    "country": "NL",
    "quantity": 9978.0,
    "cost": 34891.98,
    "price": 3.5
  },
  {
    "date": "14.3.2024.",
    "product": "DUBOKO ZAMRZNUTA MALINA 250G, DUBOKO ZAMRZNUTA MALINA 750G",
    "country": "NL",
    "quantity": 2278.0,
    "cost": 8147.69,
    "price": 3.58
  },
  {
    "date": "18.3.2024.",
    "product": "DUBOKO ZAMRZNUTA MALINA 1 KG",
    "country": "NL",
    "quantity": 2000.0,
    "cost": 6400.0,
    "price": 3.2
  },
  {
    "date": "22.3.2024.",
    "product": "DUBOKO ZAMRZNUTA MALINA 250G, DUBOKO ZAMRZNUTA MALINA 750G",
    "country": "NL",
    "quantity": 2802.0,
    "cost": 9889.17,
    "price": 3.53
  },
  {
    "date": "28.3.2024.",
    "product": "DUBOKO ZAMRZNUTA MALINA 250G, DUBOKO ZAMRZNUTA MALINA 750G",
    "country": "NL",
    "quantity": 6090.0,
    "cost": 21457.65,
    "price": 3.52
  },
  {
    "date": "1.3.2024.",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "NL",
    "quantity": 8320.0,
    "cost": 19968.0,
    "price": 2.4
  },
  {
    "date": "8.3.2024.",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "NL",
    "quantity": 20480.0,
    "cost": 49152.0,
    "price": 2.4
  },
  {
    "date": "16.3.2024.",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X500GR",
    "country": "NL",
    "quantity": 8320.0,
    "cost": 19968.0,
    "price": 2.4
  },
  {
    "date": "16.3.2024.",
    "product": "DZ MALINA PO:23023702,LOT:08032024",
    "country": "NL",
    "quantity": 20000.0,
    "cost": 55000.0,
    "price": 2.75
  },
  {
    "date": "1.3.2024.",
    "product": "MALINA ROLEND METRO CHEF 4X2.5KG",
    "country": "NL",
    "quantity": 20790.0,
    "cost": 46257.75,
    "price": 2.23
  },
  {
    "date": "1.3.2024.",
    "product": "ZAMRZNUTA MALINA ROLEND 90/10, PAKOVANJE: 12X750GR; 20X500GR",
    "country": "NL",
    "quantity": 19312.0,
    "cost": 43952.32,
    "price": 2.28
  },
  {
    "date": "4.3.2024.",
    "product": "D.Z. MALINA ROLEND 90/10, PAK. 500 G",
    "country": "NL",
    "quantity": 20480.0,
    "cost": 49152.0,
    "price": 2.4
  },
  {
    "date": "11.3.2024.",
    "product": "D.Z. MALINA ROLEND 90/10, PAK. 500 G",
    "country": "NL",
    "quantity": 20480.0,
    "cost": 49152.0,
    "price": 2.4
  },
  {
    "date": "18.3.2024.",
    "product": "D.Z. MALINA ROLEND 90/10, PAK. 500 G",
    "country": "NL",
    "quantity": 10240.0,
    "cost": 24576.0,
    "price": 2.4
  },
  {
    "date": "12.3.2024.",
    "product": "D.Z. MALINA, PAK. 750 G",
    "country": "NL",
    "quantity": 6318.0,
    "cost": 32263.92,
    "price": 5.11
  },
  {
    "date": "12.3.2024.",
    "product": "D/Z MALINA 750G / D/F RASPBERRY 750G",
    "country": "NL",
    "quantity": 10080.0,
    "cost": 23932.61,
    "price": 2.37
  },
  {
    "date": "25.3.2024.",
    "product": "D/Z MALINA ROLEND",
    "country": "NL",
    "quantity": 20790.0,
    "cost": 45738.0,
    "price": 2.2
  },
  {
    "date": "29.3.2024.",
    "product": "D/Z MALINA ROLEND",
    "country": "NL",
    "quantity": 20790.0,
    "cost": 45738.0,
    "price": 2.2
  },
  {
    "date": "11.3.2024.",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE 11KG/1",
    "country": "NO",
    "quantity": 20328.0,
    "cost": 60984.0,
    "price": 3.0
  },
  {
    "date": "23.3.2024.",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE 2X2,5KG",
    "country": "NO",
    "quantity": 19530.0,
    "cost": 62496.0,
    "price": 3.2
  },
  {
    "date": "28.3.2024.",
    "product": "D/Z MALINA ROLEND",
    "country": "NO",
    "quantity": 20328.0,
    "cost": 60984.0,
    "price": 3.0
  },
  {
    "date": "28.3.2024.",
    "product": "D.Z. MALINA, PAK. 300 G",
    "country": "NO",
    "quantity": 11642.4,
    "cost": 42029.06,
    "price": 3.61
  },
  {
    "date": "26.3.2024.",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 12X750GR",
    "country": "NZ",
    "quantity": 18270.0,
    "cost": 61947.5,
    "price": 3.39
  },
  {
    "date": "15.3.2024.",
    "product": "DZ MALINA ROLEND",
    "country": "PL",
    "quantity": 10000.0,
    "cost": 23500.0,
    "price": 2.35
  },
  {
    "date": "2.3.2024.",
    "product": "ZAMRZNUTA MALINA ROLEND, PAKOVANJE: 16X500GR",
    "country": "PL",
    "quantity": 16632.0,
    "cost": 43243.2,
    "price": 2.6
  },
  {
    "date": "12.3.2024.",
    "product": "D\\Z MALINA \"ROLEND\"- SORTE FERTODI 11\\1 - 1.848 KUTIJA",
    "country": "PL",
    "quantity": 20328.0,
    "cost": 52852.8,
    "price": 2.6
  },
  {
    "date": "14.3.2024.",
    "product": "DZ MALINA (CROPS), PAK. 2.5KG",
    "country": "PL",
    "quantity": 1920.0,
    "cost": 7776.0,
    "price": 4.05
  },
  {
    "date": "8.3.2024.",
    "product": "D.Z. MALINA ROLEND 90/10",
    "country": "PL",
    "quantity": 20328.0,
    "cost": 50820.0,
    "price": 2.5
  },
  {
    "date": "25.3.2024.",
    "product": "D.Z. MALINA ROLEND 90:10",
    "country": "PL",
    "quantity": 20328.0,
    "cost": 50820.0,
    "price": 2.5
  },
  {
    "date": "4.3.2024.",
    "product": "D\\Z MALINA -WILLAMETTE \"ROLEND\" 11\\1 - 1.848 KUTIJA",
    "country": "PL",
    "quantity": 20328.0,
    "cost": 49193.76,
    "price": 2.42
  },
  {
    "date": "19.3.2024.",
    "product": "D\\Z MALINA -WILLAMETTE \"ROLEND\" 11\\1 - 1.848 KUTIJA",
    "country": "PL",
    "quantity": 20328.0,
    "cost": 49193.76,
    "price": 2.42
  },
  {
    "date": "20.3.2024.",
    "product": "DUBOKO ZAMRZNUTA MALINA",
    "country": "RU",
    "quantity": 17808.0,
    "cost": 45888.86,
    "price": 2.58
  },
  {
    "date": "22.3.2024.",
    "product": "D/Z MALINA \"WHOLE\"",
    "country": "RU",
    "quantity": 19530.0,
    "cost": 44919.0,
    "price": 2.3
  },
  {
    "date": "21.3.2024.",
    "product": "D.Z. MALINA, PAK. 4X2,5 KG",
    "country": "RU",
    "quantity": 2800.0,
    "cost": 8400.0,
    "price": 3.0
  },
  {
    "date": "16.3.2024.",
    "product": "SMRZNUTA MALINA",
    "country": "RU",
    "quantity": 3840.0,
    "cost": 14976.0,
    "price": 3.9
  },
  {
    "date": "9.3.2024.",
    "product": "SMRZNUTA MALINA PAKOVANJE 4*2,5KG PO FAKTURI 1003/24",
    "country": "RU",
    "quantity": 10000.0,
    "cost": 28800.0,
    "price": 2.88
  },
  {
    "date": "13.3.2024.",
    "product": "D.Z. MALINA, PAK. 16X350 KG",
    "country": "SA",
    "quantity": 10080.0,
    "cost": 47520.0,
    "price": 4.71
  },
  {
    "date": "1.3.2024.",
    "product": "DUBOKO ZAMRZNUTA MALINA 500G (10 X 500G=1/5KG), DUBOKO ZAMRZNUTA",
    "country": "SE",
    "quantity": 13200.0,
    "cost": 40200.0,
    "price": 3.05
  },
  {
    "date": "4.3.2024.",
    "product": "DUBOKO ZAMRZNUTA MALINA 500G (10 X 500G=1/5KG), DUBOKO ZAMRZNUTA",
    "country": "SE",
    "quantity": 12360.0,
    "cost": 37536.0,
    "price": 3.04
  },
  {
    "date": "6.3.2024.",
    "product": "DUBOKO ZAMRZNUTA MALINA 500G (10 X 500G=1/5KG), DUBOKO ZAMRZNUTA",
    "country": "SE",
    "quantity": 13635.0,
    "cost": 42679.5,
    "price": 3.13
  },
  {
    "date": "8.3.2024.",
    "product": "DUBOKO ZAMRZNUTA MALINA 500G (10 X 500G=1/5KG), DUBOKO ZAMRZNUTA",
    "country": "SE",
    "quantity": 14610.0,
    "cost": 45795.0,
    "price": 3.13
  },
  {
    "date": "11.3.2024.",
    "product": "DUBOKO ZAMRZNUTA MALINA 500G (10 X 500G=1/5KG), DUBOKO ZAMRZNUTA",
    "country": "SE",
    "quantity": 13590.0,
    "cost": 42219.0,
    "price": 3.11
  },
  {
    "date": "13.3.2024.",
    "product": "DUBOKO ZAMRZNUTA MALINA 500G (10 X 500G=1/5KG), DUBOKO ZAMRZNUTA",
    "country": "SE",
    "quantity": 12045.0,
    "cost": 38266.5,
    "price": 3.18
  },
  {
    "date": "15.3.2024.",
    "product": "DUBOKO ZAMRZNUTA MALINA 500G (10 X 500G=1/5KG), DUBOKO ZAMRZNUTA",
    "country": "SE",
    "quantity": 11520.0,
    "cost": 34992.0,
    "price": 3.04
  },
  {
    "date": "18.3.2024.",
    "product": "DUBOKO ZAMRZNUTA MALINA 500G (10 X 500G=1/5KG), DUBOKO ZAMRZNUTA",
    "country": "SE",
    "quantity": 12885.0,
    "cost": 39442.5,
    "price": 3.06
  },
  {
    "date": "20.3.2024.",
    "product": "DUBOKO ZAMRZNUTA MALINA 500 G (10 X 500 G=1/5 KG),",
    "country": "SE",
    "quantity": 10320.0,
    "cost": 31992.0,
    "price": 3.1
  },
  {
    "date": "21.3.2024.",
    "product": "DUBOKO ZAMRZNUTA MALINA 1 KG (10 X 1 KG=1/10KG), DUBOKO ZAMRZNUTA",
    "country": "SE",
    "quantity": 14040.0,
    "cost": 43632.0,
    "price": 3.11
  },
  {
    "date": "21.3.2024.",
    "product": "DUBOKO ZAMRZNUTA MALINA 500G (10 X 500G=1/5KG), DUBOKO ZAMRZNUTA",
    "country": "SE",
    "quantity": 12480.0,
    "cost": 38088.0,
    "price": 3.05
  },
  {
    "date": "29.3.2024.",
    "product": "DUBOKO ZAMRZNUTA MALINA 500G (10 X 500G=1/5KG), DUBOKO ZAMRZNUTA",
    "country": "SE",
    "quantity": 11760.0,
    "cost": 35856.0,
    "price": 3.05
  },
  {
    "date": "1.3.2024.",
    "product": "D.Z. MALINA, PAK. 10X500 G; 10X225 G",
    "country": "SE",
    "quantity": 17739.0,
    "cost": 64246.8,
    "price": 3.62
  },
  {
    "date": "2.3.2024.",
    "product": "D.Z. MALINA, PAK. 10X500 G; 10X225 G",
    "country": "SE",
    "quantity": 17658.0,
    "cost": 63985.2,
    "price": 3.62
  },
  {
    "date": "5.3.2024.",
    "product": "D.Z. MALINA, PAK. 10 X 500 G; 10 X 225 G; 4 X 2,5 KG",
    "country": "SE",
    "quantity": 15818.0,
    "cost": 57243.76,
    "price": 3.62
  },
  {
    "date": "6.3.2024.",
    "product": "D.Z. MALINA, PAK. 10 X 500 G; 10 X 225 G",
    "country": "SE",
    "quantity": 15471.0,
    "cost": 56289.6,
    "price": 3.64
  },
  {
    "date": "8.3.2024.",
    "product": "D.Z. MALINA ROLEND, PAK. 200 I 400 G",
    "country": "SE",
    "quantity": 7689.6,
    "cost": 28391.26,
    "price": 3.69
  },
  {
    "date": "15.3.2024.",
    "product": "D.Z. MALINA, PAK. 10X500 G; 10X225 G; 4X2,5 KG",
    "country": "SE",
    "quantity": 16115.0,
    "cost": 58413.76,
    "price": 3.62
  },
  {
    "date": "16.3.2024.",
    "product": "D.Z. MALINA ROLEND, PAK. 2 X 2,5 KG",
    "country": "SE",
    "quantity": 8100.0,
    "cost": 27280.8,
    "price": 3.37
  },
  {
    "date": "16.3.2024.",
    "product": "D.Z. MALINA, PAK. 10X500 G; 10X225 G; 4X2,5 KG",
    "country": "SE",
    "quantity": 14657.0,
    "cost": 53072.56,
    "price": 3.62
  },
  {
    "date": "18.3.2024.",
    "product": "D.Z. MALINA, PAK. 10 X 500 G; 10 X 225 G",
    "country": "SE",
    "quantity": 15093.0,
    "cost": 54858.0,
    "price": 3.63
  },
  {
    "date": "20.3.2024.",
    "product": "D.Z. MALINA, PAK. 200 I 400 G",
    "country": "SE",
    "quantity": 8899.2,
    "cost": 32793.55,
    "price": 3.68
  },
  {
    "date": "21.3.2024.",
    "product": "D.Z. MALINA, PAK. 10X500 G; 10X225 G; 4X2,5 KG",
    "country": "SE",
    "quantity": 14734.0,
    "cost": 53365.52,
    "price": 3.62
  },
  {
    "date": "27.3.2024.",
    "product": "D.Z. MALINA, PAK. 10X500 G; 10X225 G",
    "country": "SE",
    "quantity": 16416.0,
    "cost": 59552.4,
    "price": 3.63
  },
  {
    "date": "29.3.2024.",
    "product": "D.Z. MALINA, PAK. 200 I 400 G",
    "country": "SE",
    "quantity": 6480.0,
    "cost": 23988.96,
    "price": 3.7
  },
  {
    "date": "14.3.2024.",
    "product": "DUBOKO ZAMRZNUTA MALINA",
    "country": "SI",
    "quantity": 4860.0,
    "cost": 14364.0,
    "price": 2.96
  },
  {
    "date": "6.3.2024.",
    "product": "DUBOKO ZAMRZNUTA MALINA 250G SPAR",
    "country": "SI",
    "quantity": 3840.0,
    "cost": 23500.8,
    "price": 6.12
  },
  {
    "date": "22.3.2024.",
    "product": "DZ MALINA 90-10 1X11KG",
    "country": "TR",
    "quantity": 20328.0,
    "cost": 55902.0,
    "price": 2.75
  },
  {
    "date": "27.3.2024.",
    "product": "DUBOKO ZAMRZNUTA MALINA, LOT.NO: 24075",
    "country": "TR",
    "quantity": 20328.0,
    "cost": 54885.6,
    "price": 2.7
  },
  {
    "date": "29.3.2024.",
    "product": "DUBOKO ZAMRZNUTA MALINA, LOT.NO: 24075",
    "country": "TR",
    "quantity": 20328.0,
    "cost": 54885.6,
    "price": 2.7
  },
  {
    "date": "7.3.2024.",
    "product": "DUBOKO ZAMRZNUTA MALINA 10X1KG",
    "country": "TR",
    "quantity": 9360.0,
    "cost": 23119.2,
    "price": 2.47
  },
  {
    "date": "28.3.2024.",
    "product": "DUBOKO ZAMRZNUTA MALINA PAKOVANJE 4X2,5 KG",
    "country": "TR",
    "quantity": 21120.0,
    "cost": 53064.0,
    "price": 2.51
  },
  {
    "date": "27.3.2024.",
    "product": "ZAMRZNUTA MALINA, PAKOVANJE: 20X300GR",
    "country": "TR",
    "quantity": 5952.0,
    "cost": 15177.6,
    "price": 2.55
  },
  {
    "date": "29.3.2024.",
    "product": "ZAMRZNUTA MALINA ROLEND (IQF RASPBERRY WHOLE) U KONTEJNERU BR.",
    "country": "US",
    "quantity": 18000.0,
    "cost": 46800.0,
    "price": 2.6
  },
  {
    "date": "22.3.2024.",
    "product": "ZAMRZNUTA MALINA ROLEND 95/5 (IQF RASPBERRY WHOLE 95/5) U KONTEJNERU",
    "country": "US",
    "quantity": 16200.0,
    "cost": 41310.0,
    "price": 2.55
  },
  {
    "date": "8.3.2024.",
    "product": "ZAMRZNUTA MALINA ( IQF RASPBERRY WHOLE 24X340G ), U KONTEJNERU BR:",
    "country": "US",
    "quantity": 14688.0,
    "cost": 46267.2,
    "price": 3.15
  },
  {
    "date": "19.3.2024.",
    "product": "D.Z. MALINA ROLEND, PAK. 4 X 2,5 KG",
    "country": "US",
    "quantity": 20000.0,
    "cost": 49400.0,
    "price": 2.47
  }


]
const TransactionList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedMonth, setSelectedMonth] = useState('Avgust');
  const itemsPerPage = 25;
  
  const months = [
    'Januar', 'Februar', 'Mart', 'April', 'Maj', 'Jun',
    'Jul', 'Avgust', 'Septembar', 'Oktobar', 'Novembar', 'Decembar'
  ];

  const getMonthNumber = (monthName: string): number => {
    return months.indexOf(monthName) + 1;
  };

  const parseDate = (dateStr: string): Date => {
    // Handle format "DD.M.YYYY."
    if (dateStr.includes('.')) {
      const [day, month, year] = dateStr.split('.').map(part => parseInt(part));
      return new Date(year, month - 1, day);
    }
    // Handle format "YYYY-MM-DD"
    return new Date(dateStr);
  };

  const filteredTransactions = transactionData
    .filter(transaction => {
      const transactionDate = parseDate(transaction.date);
      const transactionMonth = transactionDate.getMonth() + 1;
      return transactionMonth === getMonthNumber(selectedMonth);
    })
    .sort((a, b) => {
      const dateA = parseDate(a.date);
      const dateB = parseDate(b.date);
      return dateA.getTime() - dateB.getTime();
    });

  return (
    <div className="col-span-12">
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="p-4 md:p-6 xl:p-7.5">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-title-sm2 font-bold text-black dark:text-white">
                Izveštaj transakcija
              </h2>
            </div>
            <select 
              value={selectedMonth}
              onChange={(e) => {
                setSelectedMonth(e.target.value);
                setCurrentPage(1);
              }}
              className="rounded-lg border-stroke px-3 py-2 dark:border-strokedark"
            >
              {months.map((month) => (
                <option key={month} value={month}>{month}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="border-b border-stroke px-4 pb-5 dark:border-strokedark md:px-6 xl:px-7.5">
          <div className="flex items-start gap-1 md:gap-3">
            <div className="w-2/12"><span className="font-medium text-[10px] md:text-xs lg:text-base">Datum</span></div>
            <div className="w-2/12"><span className="font-medium text-[10px] md:text-xs lg:text-base">Proizvod</span></div>
            <div className="w-2/12"><span className="font-medium text-[10px] md:text-xs lg:text-base">Država</span></div>
            <div className="w-2/12"><span className="font-medium text-[10px] md:text-xs lg:text-base">Količina</span></div>
            <div className="w-2/12"><span className="font-medium text-[10px] md:text-xs lg:text-base">Vrednost</span></div>
            <div className="w-2/12"><span className="font-medium text-[10px] md:text-xs lg:text-base">Cena</span></div>
          </div>
        </div>

        <div className="p-2 md:p-6 xl:p-7.5">
          <div className="flex flex-col gap-3 md:gap-7">
            {filteredTransactions
              .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
              .map((transaction, key) => (
              <div className="flex items-start gap-1 md:gap-3" key={key}>
                <div className="w-2/12">
                  <span className="font-medium text-[10px] md:text-xs lg:text-base break-words">{transaction.date}</span>
                </div>
                <div className="w-2/12">
                  <span className="font-medium text-[10px] md:text-xs lg:text-base break-words">{transaction.product}</span>
                </div>
                <div className="w-2/12">
                  <span className="font-medium text-[10px] md:text-xs lg:text-base break-words">{transaction.country}</span>
                </div>
                <div className="w-2/12">
                  <span className="font-medium text-[10px] md:text-xs lg:text-base break-words">{transaction.quantity} kg</span>
                </div>
                <div className="w-2/12">
                  <span className="font-medium text-[10px] md:text-xs lg:text-base break-words">€{transaction.cost}</span>
                </div>
                <div className="w-2/12">
                  <span className="font-medium text-[10px] md:text-xs lg:text-base break-words">€{transaction.price}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-6 flex justify-center gap-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="rounded-lg border border-stroke px-4 py-2 hover:bg-gray-100 disabled:opacity-50"
            >
              Prethodna
            </button>
            <span className="flex items-center px-4">
              Strana {currentPage} od {Math.ceil(filteredTransactions.length / itemsPerPage)}
            </span>
            <button
              onClick={() => setCurrentPage(prev => 
                Math.min(prev + 1, Math.ceil(filteredTransactions.length / itemsPerPage))
              )}
              disabled={currentPage >= Math.ceil(filteredTransactions.length / itemsPerPage)}
              className="rounded-lg border border-stroke px-4 py-2 hover:bg-gray-100 disabled:opacity-50"
            >
              Sledeća
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionList;
