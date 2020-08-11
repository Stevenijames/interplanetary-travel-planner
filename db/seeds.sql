USE interplanetary_travel;

INSERT INTO `user`
(`email`, `password`, `createdAt`, `updatedAt`)
VALUES
("example@email.com", "$2a$10$8c3rCMo6bJagpE8lmyTmtewaCnIK/VsEaPGk0mrSIpX1lE5haT2U2", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO `amenities`
(`name`, `cost`, `description`, `createdAt`, `updatedAt`)
VALUES
('All You Can Eat Shrimp', 26, 'Enjoy all you can eat shrimp! Price is calculated per 24-hour cycle. Must choose ammount prior to departure date.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Private Bedroom', 35000, 'Enjoy privacy in a custom-built compartment providing the maximum level of comfort for a single individual.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Pilot in Command Flight Experience', 140000, 'Sit as the "Pilot in Command" of your spacecraft for an entire shift! A certified flight instructor will sit next to you every step of the way, but you will be in command of your journey! Requires pre-flight training session.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Influencer Package', 80000, 'A professional photographer/videographer will join your mission and document the entire story visually, making you the star of an adventure that you will be sharing for the rest of your life!', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Upgraded Personal Items', 7500, 'This package provides an additional compartment of storage space for your personal belongings for the entirity of the trip.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO `countries`
(`name`, `createdAt`, `updatedAt`)
VALUES
('United States',  CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO `companies`
(`name`, `createdAt`, `updatedAt`, `CountryId`)
VALUES
 ('Blue Origin', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 1),
 ('SpaceX', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 1),
 ('United Launch Alliance', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 1);

INSERT INTO `launchSites`
(`name`, `operatedBy`, `createdAt`, `updatedAt`) 
VALUES
('Cape Canaveral, Florida', 'NASA', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Cape Canaveral Air Force Station', 'USAF', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Vandenburg Air Force Base', 'USAF', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO `planets`
(`name`, `distance`, `createdAt`, `updatedAt`)
VALUES
('Sun', 93000000000, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Mercury', 57000000000, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Venus', 25800000000, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Earth', 0, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Mars', 48600000000, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Jupiter', 390600000, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Saturn', 777000000, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Uranus', 1690000000, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Neptune', 2700000000, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO `rockets`
(`name`, `passengers`, `range`, `cruisingSpeed`, `launchCost`, `createdAt`, `updatedAt`, `CompanyId`)
VALUES
('Atlas V', 2, 50000000000, 45000, 100000, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 3),
('Delta IV', 4, 100000000000, 47000, 150000, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 3),
('Delta V', 4, 500000000000, 50000, 200000, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 3),
('Delta V Heavy', 5, 777000000000, 55000, 450000, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 3),
('Falcon IX', 4, 900000000000, 60000, 250000, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 2),
('Falcon IX Heavy', 5, 1690000000000, 65000, 450000, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 2),
('Falcon X', 8, 1000000000000, 60000, 500000, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 2),
('Falcon X Heavy', 8, 2700000000000, 65000, 750000, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 2),
('Falcon XX', 10, 2000000000000, 75000, 1250000, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 2),
('New Glenn 2 Stage', 3, 40000000000, 26000, 350000, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 1),
('New Glenn 3 Stage', 5, 150000000, 30000, 550000, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 1);

INSERT INTO `flights`
(`arrivalTimeEst`, `totalCost`, `flightNumber`, `timestamp`, `createdAt`, `updatedAt`, `PlanetId`, `UserId`, `RocketId`)
VALUES
(10000, 1600000000000, 'ECA543', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 8, 1, 9),
(1000, 1340000000000, 'JFA191', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 8, 1, 9),
(100, 80000000, 'XMRA43', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 8, 1, 9);

INSERT INTO `flightamenities`
(`createdAt`, `updatedAt`, `AmenityId`, `FlightId`)
VALUES
(CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 1, 1),
(CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 2, 1),
(CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 4, 1),
(CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 5, 1);