package step_defination;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class login_step_defination {

WebDriver driver = new FirefoxDriver() ;
	

		@Given("^User is already on login plge$")
		public void user_alreadyon_login_pager() {
		driver.get("https://www.facebook.com");}
	
		
		@When("^title of login page is free CRM$")
		public void title_of_loginpage() { 
		String title = driver.getTitle();
		System.out.println(title);}
		
		@Then("^User Enter \"(.*)\" and \"(.*)\"$")
		public void user_Enter_username_and_password(String username , String password) {
		driver.findElement(By.name("email")).sendKeys(username);
		driver.findElement(By.name("pass")).sendKeys(password);}
	
		@Then("^user click on login button$")
		public void user_click_on_login_button() throws Throwable  {
		   driver.findElement(By.id("loginbutton")).click();
		   Thread.sleep(2000);}

		@Then("^user close the window$")
		public void user_close_the_window(){
		    driver.quit();
		}

		
		
}

