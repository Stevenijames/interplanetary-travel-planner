-- Amenities Model
INSERT INTO amenities (name, cost, description)
VALUES
('All You Can Eat Shrimp', 26, 'Enjoy all you can eat shrimp! Price is calculated per 24-hour cycle. Must choose ammount prior to departure date.'),
('Private Bedroom', 35000, 'Enjoy privacy in a custom-built compartment providing the maximum level of comfort for a single individual.'),
('Pilot in Command Flight Experience', 140000, 'Sit as the "Pilot in Command" of your spacecraft for an entire shift! A certified flight instructor will sit next to you every step of the way, but you will be in command of your journey! Requires pre-flight training session.'),
('Influencer Package', 80000, 'A professional photographer/videographer will join your mission and document the entire story visually, making you the star of an adventure that you will be sharing for the rest of your life!'),
('Upgraded Personal Items', 7500, 'This package provides an additional compartment of storage space for your personal belongings for the entirity of the trip.'),
();

INSERT INTO companies (name)
VALUES
 ('Blue Origin'),
 ('SpaceX'),
 ('United Launch Alliance');

INSERT INTO countries (name, refIDRocket)
VALUES
(),
();

INSERT INTO flights (refIDCompany, refIDRocket, destination, arrivalTimeEst, totalCost, includedAmenities, flightNumber, timestamp)
VALUES
(),
(),
(),
();

INSERT INTO launchedSites (name, location, refIdOperatedBy) 
VALUES
('Cape Canaveral, Florida', [lon,lat], 'NASA'),
('Cape Canaveral Air Force Station', [lon, lat], 'USAF'),
('Vandenburg Air Force Base', [lon, lat], 'USAF');

--Planets Model
INSERT INTO planets (name, distance)
VALUES
('The Sun', 93000000000),
('Mercury', 57000000000),
('Venus', 25800000000),
('Earth', 0),
('Mars', 48600000000),
('Jupiter', 390600000),
('Saturn', 777000000),
('Uranus', 1690000000),
('Neptune', 2700000000);

-- Rockets Model 
INSERT INTO rockets (modelName, passengers, range, cruisingSpeed, launchCost, refIdCompany) VALUES
('Atlas V', 2, 50000000000, 45000, 100000, 'ULA'),
('Delta IV', 4, 100000000000, 47000, 150000, 'ULA'),
('Delta V', 4, 500000000000, 50000, 200000, 'ULA'),
('Delta V Heavy', 5, 777000000000, 55000, 450000, 'ULA'),
('Falcon IX', 4, 900000000000, 60000, 250000, 'SpaceX'),
('Falcon IX Heavy', 5, 1690000000000, 65000, 450000, 'SpaceX'),
('Falcon X', 8, 1000000000000, 60000, 500000, 'SpaceX'),
('Falcon X Heavy', 8, 2700000000000, 65000, 750000, 'SpaceX'),
('Falcon XX', 10, 2000000000000, 75000, 1250000, 'SpaceX'),
('New Glenn 2 Stage', 3, 40000000000, 26000, 350000, 'Blue Origin'),
('New Glenn 3 Stage', 5, 150000000, 30000, 550000, 'Blue Origin');
