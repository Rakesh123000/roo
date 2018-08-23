package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "C:\\Users\\Rakesh\\eclipse-workspace12\\FreeCrmbddFramwork\\src\\main\\java\\feature\\login.feature",
		glue = {"step_defination"},
		monochrome = true,
		strict = true,
		dryRun = false,
		format = {"pretty","html:test_output"}
		)

public class TestRunner {

}
