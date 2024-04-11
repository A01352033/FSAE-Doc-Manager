package handlers

import (
    "fmt"
    "io/ioutil"
    "net/http"
    "github.com/gorilla/mux"
    "my-go-backend/storage" 
    //"my-go-backend/config" 
)

func UploadHandler(storageService *storage.AzureStorageService) http.HandlerFunc {
    return func(w http.ResponseWriter, r *http.Request) {
        if r.Method != "POST" {
            http.Error(w, "Only POST method is accepted", http.StatusMethodNotAllowed)
            return
        }

        file, _, err := r.FormFile("file")
        if err != nil {
            http.Error(w, "Invalid file", http.StatusBadRequest)
            return
        }
        defer file.Close()

        fileBytes, err := ioutil.ReadAll(file)
        if err != nil {
            http.Error(w, "Error reading file", http.StatusInternalServerError)
            return
        }

        blobName := r.FormValue("blobName")
        if err := storageService.UploadFile(r.Context(), blobName, fileBytes); err != nil {
            http.Error(w, "Failed to upload to Azure Blob Storage: "+err.Error(), http.StatusInternalServerError)
            return
        }

        fmt.Fprintf(w, "File uploaded successfully")
    }
}

// This function would be set up to handle HTTP requests for file downloads.
func DownloadVersionHandler(storageService *storage.AzureStorageService) http.HandlerFunc {
    return func(w http.ResponseWriter, r *http.Request) {
        vars := mux.Vars(r)
        blobName := vars["blobName"]
        versionID := vars["versionID"]
        
        //ctx := r.Context()

        //w.Header().Set("Content-Disposition", "attachment; filename=\""+blobName+"\"")
        //w.Header().Set("Content-Type", "application/octet-stream")

        err := storageService.DownloadFileVersion(r.Context(), blobName, versionID, w)
        if err != nil {
            // Log the error and send an appropriate HTTP error response.
            // Adjust logging and error handling as necessary.
            http.Error(w, "Failed to download file version2", http.StatusInternalServerError)
            return
        }
        // If there's no error, the file content has been streamed to the client and the download should start automatically.
    }
}

   
/*

func ListBlobVersionsHandler(storageService *storage.AzureStorageService) http.HandlerFunc {
    return func(w http.ResponseWriter, r *http.Request) {
        blobName := r.URL.Query().Get("name")
        if blobName == "" {
            http.Error(w, "Blob name is required", http.StatusBadRequest)
            return
        }

        ctx := r.Context()
        versions, err := storageService.ListBlobVersions(ctx, blobName)
        if err != nil {
            http.Error(w, "Failed to list blob versions: "+err.Error(), http.StatusInternalServerError)
            return
        }

        // Simplify the response if necessary, or directly return the versions
        jsonResponse, err := json.Marshal(versions)
        if err != nil {
            http.Error(w, "Failed to encode versions: "+err.Error(), http.StatusInternalServerError)
            return
        }

        w.Header().Set("Content-Type", "application/json")
        w.Write(jsonResponse)
    }
}
*/