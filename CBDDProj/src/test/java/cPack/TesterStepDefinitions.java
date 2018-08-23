package cPack;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class TesterStepDefinitions {
	
	@Given("^I am a \"([a-zA-Z]{1,})\" tester$")
	public void I_am_a_bad_tester(String testerType) {
		
		System.out.println("@Given - I am a "+testerType+" tester");
		WebDriver driver = new FirefoxDriver();
		driver.get("http://www.facebook.com");
		driver.close();
		
	}
	
	@When("^I go to work$")
	public void I_go_to_work() {
		
		System.out.println("@When - I go to work");
		WebDriver driver = new FirefoxDriver();
		driver.get("http://www.msn.com");
		driver.close();
		
	}
	
	@And("^I \"([a-zA-Z]{1,})\" with it$")
	public void I_mess_with_it(String workType) {
		
		System.out.println("@And - I "+workType+" with it");
		WebDriver driver = new FirefoxDriver();
		driver.get("http://www.gmail.com");
		driver.close();
	}
	
	@Then("^My boss \"([a-zA-Z]{1,})\" me$")
	public void My_boss_fires_me(String bossAction) {
		
		System.out.println("@Then - My boss "+bossAction+" me");
		WebDriver driver = new FirefoxDriver();
		driver.get("http://www.yahoo.com");
		driver.close();
		System.out.println("----------------------");
		
	}
	
	
	

}
