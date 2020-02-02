CREATE TABLE monsters(
    mid serial,
    mname varchar(50),
    personality varchar(50),
    PRIMARY KEY(mid)
);

CREATE TABLE habitats(
    hid serial,
    hname varchar(50),
    climate varchar(50),
    temp int,
    primary key(hid)
);

create table lives(
    mid int,
    hid int,
    FOREIGN KEY(mid) REFERENCES monsters(mid),
    FOREIGN KEY(hid) REFERENCES habitats(hid)
);

insert into monsters(mname, personality)
VALUES
('Fluffy', 'aggressive'),
('Noodles','impatient'),
('Rusty','passionate');

insert into habitats(hname, climate, temp) VALUES
('desert','dry',100),
('forest','haunted',70),
('mountain','icy',30);

insert into lives VALUES
(1,1), (2,2), (3,3);