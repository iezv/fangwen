CREATE TABLE t_user (
  id bigserial PRIMARY KEY NOT NULL,
  first_name character varying(128) NOT NULL,
  last_name character varying(128) NOT NULL,
  password character varying(128) NOT NULL,
  email character varying(128) NOT NULL,
  phone character varying(128) NOT NULL,
  is_subscribe boolean NOT NULL
);


ALTER TABLE t_user OWNER TO postgres;
