ALTER TABLE t_item DROP COLUMN category_id;
ALTER TABLE t_item ADD COLUMN category_id bigserial;
