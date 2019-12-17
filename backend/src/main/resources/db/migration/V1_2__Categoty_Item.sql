ALTER TABLE t_user ADD COLUMN role character varying(128) NOT NULL default 'user';

CREATE TABLE t_category (
  id bigserial PRIMARY KEY NOT NULL,
  name character varying(128) NOT NULL,
  description character varying(512)
);

ALTER TABLE t_category OWNER TO postgres;

CREATE TABLE t_item (
  id bigserial PRIMARY KEY NOT NULL,
  category_id character varying(128) NOT NULL,
  name character varying(128) NOT NULL,
  description character varying(1024),
  price real NOT NULL,
  discount real NOT NULL,
  in_stock boolean NOT NULL,
  amount real NOT NULL,
  image_id character varying(256)
);

ALTER TABLE t_item OWNER TO postgres;

