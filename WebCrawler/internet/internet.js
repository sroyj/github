//## Test Data


//### Internet 1
//```json
const internet1 = 
{
  "pages": [
    {
      "address":"http://foo.bar.com/p1",
      "links": ["http://foo.bar.com/p2", "http://foo.bar.com/p3", "http://foo.bar.com/p4"]
    },
    {
      "address":"http://foo.bar.com/p2",
      "links": ["http://foo.bar.com/p2", "http://foo.bar.com/p4"]
    },
    {
      "address":"http://foo.bar.com/p4",
      "links": ["http://foo.bar.com/p5", "http://foo.bar.com/p1", "http://foo.bar.com/p6"]
    },
    {
      "address":"http://foo.bar.com/p5",
      "links": []
    },
    {
      "address":"http://foo.bar.com/p6",
      "links": ["http://foo.bar.com/p7", "http://foo.bar.com/p4", "http://foo.bar.com/p5"]
    }
  ]
}





//### Internet 2
//```json
const internet2 =
{
    "pages": [
        {
        "address":"http://foo.bar.com/p1",
        "links": ["http://foo.bar.com/p2"]
      },
      {
        "address":"http://foo.bar.com/p2",
        "links": ["http://foo.bar.com/p3"]
      },
      {
        "address":"http://foo.bar.com/p3",
        "links": ["http://foo.bar.com/p4"]
      },
      {
        "address":"http://foo.bar.com/p4",
        "links": ["http://foo.bar.com/p5"]
      },
      {
        "address":"http://foo.bar.com/p5",
        "links": ["http://foo.bar.com/p1"]
      },
      {
        "address":"http://foo.bar.com/p6",
        "links": ["http://foo.bar.com/p1"]
      }
    ]
  }


