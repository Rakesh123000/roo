 
 
 Feature:  Free CRM Login Feature

  
  Scenario Outline: Free CRM Login Test Scenario
  
    Given User is already on login plge
    When title of login page is free CRM
     Then User Enter "<username>" and "<password>"
     Then user click on login button
    Then user close the window
    
    
    Examples: 
    						| username               | password |
    						
    						|rajsharma12300@gmail.com|9371199183|
    						|roo                     |Rooo      |
    						
    