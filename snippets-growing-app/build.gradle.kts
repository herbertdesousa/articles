plugins {
    kotlin("jvm") version "1.9.22"
}

group = "org.example"
version = "1.0-SNAPSHOT"

repositories {
    mavenCentral()
}

tasks.test {
    useJUnitPlatform()
}

kotlin {
    jvmToolchain(20)
}

dependencies {
    testImplementation("org.jetbrains.kotlin:kotlin-test")

    testImplementation(kotlin("test"))
}
