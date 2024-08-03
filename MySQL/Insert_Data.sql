USE dbms_g5;

INSERT INTO Person (Nid, FName, LName, DobD, DobM, DobY, House, Street, area, PostalCode, Division, District, Type)
VALUES
('1234567890', 'Rahim', 'Uddin', 15, 5, 1945, 'House 1', 'Street 1', 'Dhanmondi', '1209', 'Dhaka', 'Dhaka', 'Elderly'),
('2233445566', 'Karim', 'Ahmed', 22, 6, 1946, 'House 2', 'Street 2', 'Dhanmondi', '1209', 'Dhaka', 'Dhaka', 'Elderly'),
('3344556677', 'Salam', 'Chowdhury', 10, 7, 1947, 'House 3', 'Street 3', 'Dhanmondi', '1209', 'Dhaka', 'Dhaka', 'Elderly'),
('4455667788', 'Rashid', 'Khan', 3, 8, 1948, 'House 4', 'Street 4', 'Dhanmondi', '1209', 'Dhaka', 'Dhaka', 'Elderly'),
('5566778899', 'Hasan', 'Mia', 12, 9, 1949, 'House 5', 'Street 5', 'Dhanmondi', '1209', 'Dhaka', 'Dhaka', 'Elderly'),
('6677889900', 'Jamal', 'Hossain', 24, 10, 1950, 'House 6', 'Street 6', 'Dhanmondi', '1209', 'Dhaka', 'Dhaka', 'Elderly'),
('7788990011', 'Naser', 'Ali', 7, 11, 1951, 'House 7', 'Street 7', 'Dhanmondi', '1209', 'Dhaka', 'Dhaka', 'Elderly'),
('8899001122', 'Farid', 'Rahman', 18, 12, 1952, 'House 8', 'Street 8', 'Dhanmondi', '1209', 'Dhaka', 'Dhaka', 'Elderly'),
('9900112233', 'Latif', 'Babu', 30, 1, 1953, 'House 9', 'Street 9', 'Dhanmondi', '1209', 'Dhaka', 'Dhaka', 'Elderly'),
('1111222233', 'Majid', 'Sarker', 5, 2, 1954, 'House 10', 'Street 10', 'Dhanmondi', '1209', 'Dhaka', 'Dhaka', 'Elderly'),
('1122334455', 'Abul', 'Kalam', 15, 5, 1970, 'House 11', 'Street 11', 'Dhanmondi', '1209', 'Dhaka', 'Dhaka', 'Caretaker'),
('5555666677', 'Babul', 'Ahmed', 22, 6, 1971, 'House 12', 'Street 12', 'Dhanmondi', '1209', 'Dhaka', 'Dhaka', 'Caretaker'),
('6666777788', 'Selim', 'Chowdhury', 10, 7, 1972, 'House 13', 'Street 13', 'Dhanmondi', '1209', 'Dhaka', 'Dhaka', 'Caretaker'),
('7777888899', 'Ruhul', 'Khan', 3, 8, 1973, 'House 14', 'Street 14', 'Dhanmondi', '1209', 'Dhaka', 'Dhaka', 'Caretaker'),
('8888999900', 'Mizan', 'Mia', 12, 9, 1974, 'House 15', 'Street 15', 'Dhanmondi', '1209', 'Dhaka', 'Dhaka', 'Caretaker'),
('9999000011', 'Kamal', 'Hossain', 24, 10, 1975, 'House 16', 'Street 16', 'Dhanmondi', '1209', 'Dhaka', 'Dhaka', 'Caretaker'),
('1111000022', 'Naim', 'Ali', 7, 11, 1976, 'House 17', 'Street 17', 'Dhanmondi', '1209', 'Dhaka', 'Dhaka', 'Caretaker'),
('2222000033', 'Faruk', 'Rahman', 18, 12, 1977, 'House 18', 'Street 18', 'Dhanmondi', '1209', 'Dhaka', 'Dhaka', 'Caretaker'),
('3333000044', 'Latif', 'Babu', 30, 1, 1978, 'House 19', 'Street 19', 'Dhanmondi', '1209', 'Dhaka', 'Dhaka', 'Caretaker'),
('4444000055', 'Majid', 'Sarker', 5, 2, 1979, 'House 20', 'Street 20', 'Dhanmondi', '1209', 'Dhaka', 'Dhaka', 'Caretaker');

INSERT INTO Caretaker (CaretakerNid)
VALUES
('1122334455'),
('5555666677'),
('6666777788'),
('7777888899'),
('8888999900'),
('9999000011'),
('1111000022'),
('2222000033'),
('3333000044'),
('4444000055');

INSERT INTO Elderly (ElderlyNid, CaretakerNid)
VALUES
('1234567890', '1122334455'),
('2233445566', '1122334455'),
('3344556677', '1122334455'),
('4455667788', '5555666677'),
('5566778899', '5555666677'),
('6677889900', '5555666677'),
('7788990011', '6666777788'),
('8899001122', '6666777788'),
('9900112233', '6666777788'),
('1111222233', '7777888899');

INSERT INTO MedicalHistory (MhId, ElderlyNid, MedicalCondition, Recommendation)
VALUES
(10000000001, '1234567890', 'Diabetes', 'Insulin therapy'),
(10000000002, '2233445566', 'Hypertension', 'Low salt diet'),
(10000000003, '3344556677', 'Asthma', 'Inhaler use'),
(10000000004, '4455667788', 'Arthritis', 'Pain management'),
(10000000005, '5566778899', 'Heart Disease', 'Medication'),
(10000000006, '6677889900', 'COPD', 'Pulmonary rehab'),
(10000000007, '7788990011', 'Cancer', 'Chemotherapy'),
(10000000008, '8899001122', 'Diabetes', 'Diet control'),
(10000000009, '9900112233', 'Heart Disease', 'Medication'),
(10000000010, '1111222233', 'COPD', 'Oxygen Therapy');

INSERT INTO VaccinationCenter (CenterId, Name, MaxCapacity, Address)
VALUES
('50000000001', 'Center 1', 1000, 'Address 1'),
('50000000002', 'Center 2', 800, 'Address 2'),
('50000000003', 'Center 3', 600, 'Address 3');


INSERT INTO Physician (PhysicianNid, LicenseNo, VCenterId)
VALUES
('2233445566', '123456789012', '50000000001'),
('3344556677', '123456789013', '50000000002'),
('1234567890', '123456789014', '50000000003');


INSERT INTO Appointment (Appointmentid, ElderlyNid, CaretakerNid, TimeH, TimeM, DateD, DateM, DateY, VCenterId, PhysicianNid)
VALUES
(20000000001, '1234567890', '1122334455', 10, 0, 1, 8, 2024, '50000000001', '2233445566'),
(20000000002, '2233445566', '1122334455', 11, 0, 1, 8, 2024, '50000000001', '3344556677'),
(20000000003, '3344556677', '1122334455', 12, 0, 1, 8, 2024, '50000000001', '1234567890'),
(20000000004, '4455667788', '5555666677', 13, 0, 1, 8, 2024, '50000000001', '3344556677'),
(20000000005, '5566778899', '5555666677', 14, 0, 1, 8, 2024, '50000000001', '2233445566'),
(20000000006, '6677889900', '5555666677', 15, 0, 1, 8, 2024, '50000000001', '3344556677'),
(20000000007, '7788990011', '6666777788', 16, 0, 1, 8, 2024, '50000000001', '1234567890'),
(20000000008, '8899001122', '6666777788', 17, 0, 1, 8, 2024, '50000000001', '3344556677'),
(20000000009, '9900112233', '6666777788', 18, 0, 1, 8, 2024, '50000000001', '2233445566'),
(20000000010, '1111222233', '7777888899', 19, 0, 1, 8, 2024, '50000000001', '1234567890');


INSERT INTO PhysicianCertificate (PCertificateNo, PhysicianNid, Degree, Institution, Year)
VALUES
(30000000001, '2233445566', 'MBBS', 'DU', 2010),
(30000000002, '3344556677', 'MBBS', 'BU', 2011),
(30000000003, '1234567890', 'MBBS', 'CU', 2012);

INSERT INTO Vaccine (VaccineId, Brand, Name, Disease, Doses, Efficacy, ProdDate, ExDate)
VALUES
('60000000001', 'Pfizer', 'Comirnaty', 'COVID-19', 2, 95.0, '2021-01-01', '2023-12-31'),
('60000000002', 'Moderna', 'Spikevax', 'COVID-19', 2, 94.5, '2021-02-01', '2023-12-31'),
('60000000003', 'AstraZeneca', 'Vaxzevria', 'COVID-19', 2, 82.4, '2021-03-01', '2023-12-31');

INSERT INTO Contraindication (VaccineId, Situation)
VALUES
('60000000001', 'Severe allergic reaction to any ingredient'),
('60000000002', 'History of myocarditis or pericarditis'),
('60000000003', 'Severe allergic reaction to any ingredient');

INSERT INTO SideEffect (VaccineId, Effect)
VALUES
('60000000001', 'Pain at injection site'),
('60000000002', 'Fever and chills'),
('60000000003', 'Headache and fatigue');



INSERT INTO Campaign (CampaignId, BeginningDate, AdminNid, EndDate, StartTime, EndTime)
VALUES
(70000000001, '2024-06-01', '50000000001', '2024-06-30', '09:00', '17:00'),
(70000000002, '2024-07-01', '50000000001', '2024-07-31', '09:00', '17:00'),
(70000000003, '2024-08-01', '50000000001', '2024-08-31', '09:00', '17:00');

INSERT INTO CampaignCenter (CampaignId, CenterId)
VALUES
(70000000001, '50000000001'),
(70000000002, '50000000002'),
(70000000003, '50000000003');

INSERT INTO VaccinationCertificate (VaccinationId, ElderlyNid, VaccineId, CenterId)
VALUES
(80000000001, '1234567890', '60000000001', '50000000001'),
(80000000002, '2233445566', '60000000002', '50000000002'),
(80000000003, '3344556677', '60000000003', '50000000003');

INSERT INTO VaccinationTime (VaccinationId, Date, Time)
VALUES
(80000000001, '2024-06-25', '10:00'),
(80000000002, '2024-06-25', '11:00'),
(80000000003, '2024-06-25', '12:00');

INSERT INTO LocalHealthAuthority (LhaAddress, Coverage, PhoneNo)
VALUES
('Dhanmondi', 'Dhaka', '01234567891'),
('Agrabad', 'Chittagong', '01234567892'),
('Zindabazar', 'Sylhet', '01234567893');

INSERT INTO Supply (SupplyId, VaccineId, CenterId, Quantity, DispatchDate, ArrivalDate, LhaAddress)
VALUES
(40000000001, '60000000001', '50000000001', 1000, '2024-01-01', '2024-01-05', 'Dhanmondi'),
(40000000002, '60000000002', '50000000002', 800, '2024-02-01', '2024-02-05', 'Agrabad'),
(40000000003, '60000000003', '50000000003', 600, '2024-03-01', '2024-03-05', 'Zindabazar');

INSERT INTO DghsAdmin(AdminNid)
VALUES
(50000000001);

