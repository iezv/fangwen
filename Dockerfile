FROM java:8
EXPOSE 8989
ADD backend/target/cefa-smart.jar cefa-smart.jar
ENTRYPOINT ["java","-jar","cefa-smart.jar"]