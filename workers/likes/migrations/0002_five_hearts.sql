ALTER TABLE portfolio_likes ADD COLUMN likes INTEGER NOT NULL DEFAULT 1
  CHECK (likes BETWEEN 1 AND 5);

DROP TRIGGER increment_like_total;

CREATE TRIGGER increment_like_total AFTER INSERT ON portfolio_likes
BEGIN
  UPDATE like_total SET count = count + NEW.likes WHERE id = 1;
END;

CREATE TRIGGER update_like_total AFTER UPDATE OF likes ON portfolio_likes
BEGIN
  UPDATE like_total SET count = count + NEW.likes - OLD.likes WHERE id = 1;
END;
