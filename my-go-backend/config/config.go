

package config

import (
    "log"

    "github.com/joho/godotenv"
)

type Config struct {
    StorageConnectionString string
    ContainerName           string
}



func LoadConfig() *Config {
    err := godotenv.Load()
    if err != nil {
        log.Fatal("Error loading .env file")
    }

    // For simplicity, directly assigning values. In a real app, use os.Getenv to get environment variables.
    return &Config{
        StorageConnectionString: "",
        ContainerName:           "blobtechtitans",
    }
}
