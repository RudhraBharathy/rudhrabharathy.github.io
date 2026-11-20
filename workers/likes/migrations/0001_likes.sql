CREATE TABLE portfolio_likes (
  visitor_id TEXT PRIMARY KEY
) WITHOUT ROWID;

CREATE TABLE like_total (
  id INTEGER PRIMARY KEY CHECK (id = 1),
  count INTEGER NOT NULL DEFAULT 0 CHECK (count >= 0)
);

INSERT INTO like_total (id, count) VALUES (1, 0);

CREATE TRIGGER increment_like_total AFTER INSERT ON portfolio_likes
BEGIN
  UPDATE like_total SET count = count + 1 WHERE id = 1;
END;
