CREATE SCHEMA shinra;

create table shinra.cats
(
	id serial not null
		constraint "PK_f0d6d40437ec6987ac419f39ac8"
			primary key,
	name varchar(120) not null,
	age varchar(120),
	breed varchar(120),
	"createdAt" timestamp default CURRENT_TIMESTAMP not null
);

alter table shinra.cats owner to user_dev;