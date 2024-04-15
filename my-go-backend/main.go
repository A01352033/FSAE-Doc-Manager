package main

import (
    "fmt"
    "net/http"
    "my-go-backend/config"      // Update with your actual module path
    "my-go-backend/handlers"    // Update with your actual module path
    "my-go-backend/storage"     // Update with your actual module path
    "github.com/gorilla/mux"
)

func enableCORS(next http.Handler) http.Handler {
    return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
        // Set CORS headers
        w.Header().Set("Access-Control-Allow-Origin", "*")
        
        // If it's a preflight (OPTIONS) request, send a simple response
        if r.Method == "OPTIONS" {
            w.Header().Set("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
            w.Header().Set("Access-Control-Allow-Headers", "Authorization, Content-Type")
            w.WriteHeader(http.StatusOK)
            return
        }
        
        // Otherwise, serve the next handler
        next.ServeHTTP(w, r)
    })
}

func main() {

    
    cfg := config.LoadConfig()

    r := mux.NewRouter()
    r.Use(enableCORS)


    storageService := storage.NewAzureStorageService(cfg.StorageConnectionString, cfg.ContainerName)

    r.HandleFunc("/upload", handlers.UploadHandler(storageService))
    r.HandleFunc("/downloadblobversion/{blobName}/{versionID}", handlers.DownloadVersionHandler(storageService)).Methods("GET")


    //http.HandleFunc("/list-versions", handlers.ListBlobVersionsHandler(storageService))
    fmt.Println("Server listening on port 3000")
    if err := http.ListenAndServe(":3000", r); err != nil {
        fmt.Println(err)
    }
}
