package com.cefa.smart.config;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.autoconfigure.jdbc.DataSourceBuilder;
import org.springframework.boot.autoconfigure.orm.jpa.JpaProperties;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.orm.jpa.EntityManagerFactoryBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.sql.DataSource;

@Configuration
@EnableTransactionManagement
@EnableJpaRepositories (
        entityManagerFactoryRef = "ENTITY_MANAGER_FACTORY",
        transactionManagerRef = "PLATFORM_TX_MANAGER",
        basePackages = {"com.cefa.smart.dao"})
public class DataSourceConfig {
    private static final String JPA_PROPS = "jpa";
    private static final String DATASOURCE = "spring.datasource";
    private static final String PERSISTENCE_UNIT = "PERSISTENCE_UNIT";
    private static final String ENTITY_MANAGER = "ENTITY_MANAGER";
    private static final String ENTITY_MANAGER_FACTORY = "ENTITY_MANAGER_FACTORY";
    private static final String PLATFORM_TX_MANAGER = "PLATFORM_TX_MANAGER";

    @Bean(name = JPA_PROPS)
    @Primary
    @ConfigurationProperties(JPA_PROPS)
    public JpaProperties jpaProperties() {
        return new JpaProperties();
    }

    @Bean(name = DATASOURCE)
    @Primary
    @ConfigurationProperties(prefix = DATASOURCE)
    public DataSource dataSource() {
        return DataSourceBuilder.create().build();
    }

    @Bean(name = ENTITY_MANAGER)
    @Primary
    public EntityManager pentityManager(
            @Qualifier(ENTITY_MANAGER_FACTORY) EntityManagerFactory entityManagerFactory) {
        return entityManagerFactory.createEntityManager();
    }

    @Bean(name = ENTITY_MANAGER_FACTORY)
    @Primary
    public LocalContainerEntityManagerFactoryBean entityManagerFactory(EntityManagerFactoryBuilder builder) {
        return builder
                .dataSource(dataSource())
                .packages("com.cefa.smart.domain")
                .persistenceUnit(PERSISTENCE_UNIT)
                .properties(jpaProperties().getHibernateProperties(dataSource()))
                .build();
    }

    @Bean(name = PLATFORM_TX_MANAGER)
    @Primary
    public PlatformTransactionManager platformTransactionManager(@Qualifier(ENTITY_MANAGER_FACTORY)
            EntityManagerFactory entityManagerFactory) {
        return new JpaTransactionManager(entityManagerFactory);
    }

}
