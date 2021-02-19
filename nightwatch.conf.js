
module.exports = {

  test_settings: {
    default: {
      selenium_port : 90,
      selenium_host  : "https://lambdatest.com",
      silent: false,

      selenium : {
        start_process : false,
        server_path : "",
        log_path : "",
        host: "hub.lambdatest.com",
        port: 80,
        cli_args: {
          "webdriver.chrome.driver" : "",
          "webdriver.ie.driver" : "",
          "webdriver.firefox.profile" : ""
        }
      },

          screenshots : {
            enabled : true,
            path : ""
          },
          username : "haritagr16",
          access_key : 'KhRUhWBtSMg06DfGkKDY1khYNJm95695WV42HfaYPot7nqQfw6',
          skip_testcases_on_fail: false,
     
          desiredCapabilities: {
            build:"Nightwatch-Cucumber-Test",
            platform : "Windows 10",
            browserName : "chrome",
            version : "87.0",
            selenium_version: "3.13.0",
            visual:true,
             video:true,
             console:true,
             geoLocation: "IN",
             network:true
            }  
         },
     chrome: {
     desiredCapabilities: {
         platform: "Windows 10",
         browserName: "chrome",
         version: "87.0"
     }
     },
     safari : {
     desiredCapabilities: {
         platform: "macos 10.13",
         browserName: "safari",
         version: "11.0"
     }
     },
     firefox : {
     desiredCapabilities: {
         platform: "win10",
         browserName: "firefox",
         version: "60"
     }
     }   
  }  
};