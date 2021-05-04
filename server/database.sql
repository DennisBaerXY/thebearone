

CREATE TABLE GUESTBOOK(
   id serial  primary key    ,
   name           TEXT    NOT NULL,
   date           TEXT     NOT NULL,
   entry          TEXT    NOT NULL
   
);

--insert fake guestbook entrys
insert into guestbook (name,date,entry) values ('Dennis', '2.5.2021','Heute ist doch ein schöner tag');