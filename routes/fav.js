var express = require("express");
var router = express.Router();

var pg = require("pg");

var config = { database: "gif-favorite" };

var pool = new pg.Pool(config);
router.get("/", function(req, res) {
console.log('router.get check');
  pool.connect(function(err, client, done) {
    if (err) {
      console.log("Error connecting to DB", err);
      res.sendStatus(500);
      done();
    } else {
      client.query("SELECT * FROM gifs ORDER BY gif_url;", function(err, result) {
        done();
        if (err) {
          console.log("Error querying DB", err);
          res.sendStatus(500);
        } else {
          console.log("Got info from DB", result.rows);
          res.send(result.rows);
        }
      });
    }
  });
});

router.post("/", function(req, res) {
  pool.connect(function(err, client, done) {
    if (err) {
      console.log("Error connecting to DB", err);
      res.sendStatus(500);
      done();
    } else {
      console.log(req.body);
      client.query(
        "INSERT INTO gifs (gif_url, comment) VALUES ($1, $2) RETURNING *;",
        [ req.body.imageUrl, req.body.comment],
        function(err, result) {
          done();
          if (err) {
            console.log("Error querying DB", err);
            res.sendStatus(500);
          } else {
            console.log("Got info from DB", result.rows);
            res.send(result.rows);
          }
        }
      );
    }
  });
});

router.put('/:id', function(req, res){
  pool.connect(function(err, client, done){
    if (err) {
      console.log('Error connecting to DB', err);
      res.sendStatus(500);
      done();
    } else {
      client.query('UPDATE gifs SET gif_url=$2, comment=$3 WHERE id = $1 RETURNING *',
                   [req.params.id, req.body.gif_url, req.body.comment],
                   function(err, result){
                     done();
                     if (err) {
                       console.log('Error updating gif', err);
                       res.sendStatus(500);
                     } else {
                       res.send(result.rows);
                     }
                   });
    }
  });
});
module.exports =router;
