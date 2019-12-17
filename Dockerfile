FROM java:8
EXPOSE 8080
ADD backend/target/sefel.jar sefel.jar
ENTRYPOINT ["java","-jar","sefel.jar"]