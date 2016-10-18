/**
 * Created by Mortoni on 19/11/13.
 *
 * configuration data
 */
module.exports = {
  port: 3001,
  feedNo: 0,
  feed :  [
      {
        url: 'http://localhost:3001/data.json',
        db:"test",
        polltime: 10
    },
    {
        url: 'http://orig-stage-elections.news.sky.com/query/elections/15/region/overview.json',
        db:"dbelection",
        polltime: 5
    }
    ]
};