const OT_API_KEY = "100";
const OT_SESSION_ID = "1_MX4xMDB-fjE0OTc0NjU2MjU5MjZ-bGtWdUtMaFpCU1BEbUJ5TG9kOXYwc3Myfn4";
const OT_TOKEN = "T1==cGFydG5lcl9pZD0xMDAmc2RrX3ZlcnNpb249dGJwaHAtdjAuOTEuMjAxMS0wNy0wNSZzaWc9NTNlMzQwYzhmMjU5MTYwOTU4ZDhlOTYxOGYyNDMxOWUxNTZhYmFmYjpzZXNzaW9uX2lkPTFfTVg0eE1EQi1makUwT1RjME5qVTJNalU1TWpaLWJHdFdkVXRNYUZwQ1UxQkViVUo1VEc5a09YWXdjM015Zm40JmNyZWF0ZV90aW1lPTE0OTc0NjU2MjYmcm9sZT1tb2RlcmF0b3Imbm9uY2U9MTQ5NzQ2NTYyNi4wNjk0MzYzNzAyODYwJmV4cGlyZV90aW1lPTE1MDAwNTc2MjY=";


const session = OT.initSession(OT_API_KEY, OT_SESSION_ID);
session.on('streamCreated', function (event) {
  session.subscribe(event.stream, function (err) {
    if (err) alert(err.message);
  });
});

var publisher = OT.initPublisher("myPublisher", function(err) {
  if (err) {
    alert('OT.initPublisher error: ', err);
  }
});

session.connect(OT_TOKEN, function(err) {
  if (!err) {
    session.publish(publisher);
  } else {
    alert(err.message);
  }
});
