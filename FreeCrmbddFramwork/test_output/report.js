$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Rakesh/eclipse-workspace12/FreeCrmbddFramwork/src/main/java/feature/login.feature");
formatter.feature({
  "line": 3,
  "name": "Free CRM Login Feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "User is already on login plge",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "title of login page is free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User Enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user close the window",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 16,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;1"
    },
    {
      "cells": [
        "rajsharma12300@gmail.com",
        "9371199183"
      ],
      "line": 18,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;2"
    },
    {
      "cells": [
        "roo",
        "Rooo"
      ],
      "line": 19,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 18,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "User is already on login plge",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "title of login page is free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User Enter \"rajsharma12300@gmail.com\" and \"9371199183\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user close the window",
  "keyword": "Then "
});
formatter.match({
  "location": "login_step_defination.user_alreadyon_login_pager()"
});
formatter.result({
  "duration": 11487990549,
  "status": "passed"
});
formatter.match({
  "location": "login_step_defination.title_of_loginpage()"
});
formatter.result({
  "duration": 13897441,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rajsharma12300@gmail.com",
      "offset": 12
    },
    {
      "val": "9371199183",
      "offset": 43
    }
  ],
  "location": "login_step_defination.user_Enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 1000948358,
  "status": "passed"
});
formatter.match({
  "location": "login_step_defination.user_click_on_login_button()"
});
formatter.result({
  "duration": 5036163319,
  "status": "passed"
});
formatter.match({
  "location": "login_step_defination.user_close_the_window()"
});
formatter.result({
  "duration": 728433588,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "User is already on login plge",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "title of login page is free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User Enter \"roo\" and \"Rooo\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user close the window",
  "keyword": "Then "
});
formatter.match({
  "location": "login_step_defination.user_alreadyon_login_pager()"
});
formatter.result({
  "duration": 11183266004,
  "status": "passed"
});
formatter.match({
  "location": "login_step_defination.title_of_loginpage()"
});
formatter.result({
  "duration": 29792695,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "roo",
      "offset": 12
    },
    {
      "val": "Rooo",
      "offset": 22
    }
  ],
  "location": "login_step_defination.user_Enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 281539563,
  "status": "passed"
});
formatter.match({
  "location": "login_step_defination.user_click_on_login_button()"
});
formatter.result({
  "duration": 33243465673,
  "status": "passed"
});
formatter.match({
  "location": "login_step_defination.user_close_the_window()"
});
formatter.result({
  "duration": 419056035,
  "status": "passed"
});
});