package com.cefa.smart.config;

import org.flywaydb.core.Flyway;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;


@Configuration
@ConfigurationProperties(prefix = "spring.datasource")
public class FlywayInitializer implements InitializingBean {

    private String url;
    private String username;
    private String password;

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public void afterPropertiesSet() {
        final Flyway flyway = new Flyway();
        flyway.setDataSource(url, username, password);
        flyway.setBaselineOnMigrate(true);
        flyway.setValidateOnMigrate(false);
        flyway.setCleanOnValidationError(false);
        flyway.setTable("schema_version");
        flyway.migrate();

    }
}
