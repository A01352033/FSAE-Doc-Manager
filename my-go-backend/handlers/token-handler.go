package handlers

import (
	"bytes"
	"encoding/base64"
	"encoding/json"
	"fmt"
	"net/http"
	"time"
)

type TokenResponse struct {
	AccessToken string `json:"access_token"`
	ExpiresIn   int    `json:"expires_in"`
}

var tokenResponse TokenResponse
var expirationTime time.Time

func GetTokenHandler(w http.ResponseWriter, r *http.Request) {
	// Check if the token is empty or expired
	if tokenResponse.AccessToken == "" || time.Now().After(expirationTime) {
		// Credentials
		username := "_05_2TmOjobg1RAIYKjHrA.."
		password := "UTD2zC5FI8Gsvb_9o4TufQ.."
		credentials := username + ":" + password
		encodedCredentials := base64.StdEncoding.EncodeToString([]byte(credentials))

		// Request data
		requestData := []byte("grant_type=client_credentials")

		// URL
		url := "https://gb9eb75e0859bf4-techtitansdb.adb.mx-monterrey-1.oraclecloudapps.com/ords/admin/oauth/token"

		// Create request
		req, err := http.NewRequest("POST", url, bytes.NewBuffer(requestData))
		if err != nil {
			fmt.Println("Error creating request:", err)
			http.Error(w, "Failed to create request", http.StatusInternalServerError)
			return
		}

		// Set headers
		req.Header.Set("Authorization", "Basic "+encodedCredentials)
		req.Header.Set("Content-Type", "application/x-www-form-urlencoded")

		// Send request
		client := &http.Client{}
		resp, err := client.Do(req)
		if err != nil {
			fmt.Println("Error sending request:", err)
			http.Error(w, "Failed to send request", http.StatusInternalServerError)
			return
		}
		defer resp.Body.Close()

		// Parse response
		if err := json.NewDecoder(resp.Body).Decode(&tokenResponse); err != nil {
			fmt.Println("Error decoding response:", err)
			http.Error(w, "Failed to decode token response", http.StatusInternalServerError)
			return
		}

		// Calculate expiration time
		expirationTime = time.Now().Add(time.Duration(tokenResponse.ExpiresIn) * time.Second)
	}

	// Calculate remaining time until expiration
	remainingSeconds := int(expirationTime.Sub(time.Now()).Seconds())

	// Respond with token and expiration time
	w.Header().Set("Content-Type", "application/json")
	fmt.Fprintf(w, `{"access_token": "%s", "expires_in": %d}`, tokenResponse.AccessToken, remainingSeconds)
}
