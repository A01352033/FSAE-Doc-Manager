package storage

import (
    "context"
    "net/http"
    "github.com/Azure/azure-sdk-for-go/sdk/storage/azblob"
    "bytes"
    "fmt"
)

type AzureStorageService struct {
    ConnectionString string
    ContainerName    string
}

func NewAzureStorageService(connectionString, containerName string) *AzureStorageService {
    return &AzureStorageService{
        ConnectionString: connectionString,
        ContainerName:    containerName,
    }
}

func (s *AzureStorageService) UploadFile(ctx context.Context, blobName string, fileBytes []byte) error {
    serviceClient, err := azblob.NewClientFromConnectionString(s.ConnectionString, nil)
    if err != nil {
        return err
    }

    _, err = serviceClient.UploadBuffer(ctx, s.ContainerName, blobName, fileBytes, &azblob.UploadBufferOptions{})
    return err
}

func (s *AzureStorageService) DownloadFileVersion(ctx context.Context, blobName, versionID string, w http.ResponseWriter) error {
    client, err := azblob.NewClientFromConnectionString(s.ConnectionString, nil)
    serviceClient := client.ServiceClient()
    fmt.Println("DOWNLOADING...")
    if err != nil {
        return err
    }

    containerClient := serviceClient.NewContainerClient(s.ContainerName)
    blobversionclient, err := containerClient.NewBlobClient(blobName).WithVersionID(versionID)
    if err != nil { 
        return err
    }

    get, err := blobversionclient.DownloadStream(ctx, nil)
	if err != nil {
        return err
    }

    downloadedData := bytes.Buffer{}
    retryReader := get.NewRetryReader(ctx, &azblob.RetryReaderOptions{})
    _, err = downloadedData.ReadFrom(retryReader)
    
    

    

    err = retryReader.Close()
    if err != nil {
        return  err
    }

    // Stream the blob content to the response writer directly.
    
    w.Header().Set("Content-Disposition", "attachment; filename="+blobName)
    _, err = w.Write(downloadedData.Bytes()) // Write downloaded data to response
    fmt.Println("DOWNLOAD SUCCESSFULL...")
    return err // Return any error during writing

}


/*
func (s *AzureStorageService) ListBlobVersions(ctx context.Context, blobName string) ([]azblob.BlobItemInternal, error) {
    serviceClient, err := azblob.NewClientFromConnectionString(s.ConnectionString, nil)
    if err != nil {
        return nil, err
    }

    containerClient := serviceClient.NewContainerClient(s.ContainerName)
    pager := containerClient.NewListBlobsFlatPager(&azblob.ContainerListBlobsFlatOptions{
        Include: []azblob.ListBlobsIncludeItem{azblob.ListBlobsIncludeItemVersions},
        Prefix:  blobName, // Ensure this matches your blob naming structure
    })

    var versions []azblob.BlobItemInternal
    for pager.More() {
        page, err := pager.NextPage(ctx)
        if err != nil {
            return nil, err
        }

        for _, blob := range page.Segment.BlobItems {
            if blob.Name == blobName {
                versions = append(versions, blob)
            }
        }
    }

    return versions, nil
}
*/