CREATE TABLE assassin
(
	id int not null primary key,
	name character varying(50),
	strength character varying(50),
	points int
);

CREATE TABLE titan
(
	id int not null primary key,
	name character varying(50),
	strength character varying(50),
	points int
);

CREATE TABLE gunslinger
(
	id int not null primary key,
	name character varying(50),
	strength character varying(50),
	points int
);

CREATE TABLE mage
(
	id int not null primary key,
	name character varying(50),
	strength character varying(50),
	points int
);

INSERT INTO assassin
VALUES
(1, 'theandre2131', 'mobility', 150),
(2, 'niagrara', 'recovery', 120)
;

INSERT INTO gunslinger
VALUES
(1, 'lanxion', 'patk', 150),
(2, 'lanx.-', 'matk', 115)
;

INSERT INTO titan
VALUES
(1, 'lanxeon', 'defence', 175),
(2, 'bladeX', 'maxHP', 210)
;

INSERT INTO mage
VALUES
(1, 'sevireldan', 'matk', 165),
(2, 'kalaieden', 'recovery', 160)
;