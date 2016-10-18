/**
 * Created by Mortoni on 19/11/13.
 *
 * configuration data
 */
module.exports = {
  port: 3001,
  feedNo: 1,
  feed :  [
      {
        url: 'http://localhost:8080/data/rydercup.xml',
        polltime: 10
    },{
        url: 'http://orig-stage-elections.news.sky.com/query/elections/15/region/overview.json',
        polltime: 5
    }
    ]
};