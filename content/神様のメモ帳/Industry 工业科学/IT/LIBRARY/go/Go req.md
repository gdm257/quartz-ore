---
tags:
  - flag/LANGUAGE/Go
  - flag/Library/DataAccessLayer/Implement__/IO/Network
  - Label/Industry-工业科学/IT/Library/3rdLibrary
aliases:
  - req
go: github.com/imroc/req/v3
---

- Pro
    - 自动 3XX 重定向

```go
import (
    "github.com/imroc/req/v3"
)

func reqDocs() {
    var url = "https://xiaogd.net"

	// Request URL through Client object and Request object
	var client *req.Client
	var request *req.Request
	var resp *req.Response

	client = req.NewClient()
	client = req.C()
	client = req.C().DevMode() // Only use when debug
	client = req.DevMode()
	client. // Setting Client
		// Debug
		DevMode().
		DisableDumpAll().
		EnableDumpAll().
		EnableDumpAllWithoutRequest().
		EnableDumpAllWithoutResponse().
		EnableDumpAllWithoutHeader().
		EnableDumpAllWithoutBody().
		EnableDumpAllWithoutRequestBody().
		EnableDumpAllWithoutResponseBody().
		EnableDebugLog().
		EnableInsecureSkipVerify().
		// Connection
		EnableAutoReadResponse(). // Default
		DisableAutoReadResponse().
		EnableForceHTTP1().
		EnableForceHTTP2().
		DisableCompression().
		DisableKeepAlives().
		SetProxyURL("http://127.0.0.1:7890").
		SetBaseURL("api"). // Set the default base URL, will be used if request URL is a relative URL
		SetTimeout(5 * time.Second).
		SetCommonRetryCount(3).
		// Parameter & Header & Cookie & Body & Form & Proxy
		SetCommonQueryParam("user", "loli").
		SetCommonQueryParam("id", "123"). // Append a parameter (overwrite if same name parameter exists)
		AddCommonQueryParam("param01", "value01").
		AddCommonQueryParam("param01", "value02"). // Append a value to the parameter
		SetCommonQueryParams(map[string]string{ // Append parameters (overwrite if same name parameter exists)
			"a": "0",
			"b": "0",
		}).
		SetCommonPathParam("user", "imcroc"). // Set a variable which can be used in URL by {var_name} when send request E.g. request.Get("https://api.github.com/users/{user}")
		SetCommonPathParams(map[string]string{
			"user": "imcroc",
		}).
		SetCommonHeader("User-Agent", "okhttp"). // Append a header (overwrite if same name header exists)
		SetCommonHeader("Keep-Alive", "false").
		SetCommonHeaders(map[string]string{ // Append headers (overwrite if same name header exists)
			"User-Agent": "okhttp",
			"Keep-Alive": "true",
		}).
		SetCommonCookies(&http.Cookie{ // Append a cookie
			Name:  "id",
			Value: "123",
		}).
		SetCommonCookies(&http.Cookie{
			Name:  "passwd",
			Value: "123456",
		}).
		SetCommonFormData(map[string]string{})

	request = req.NewRequest() // Create Request by default Client
	request = req.R()
	request = client.NewRequest() // Create Request by specific Client
	request = client.R()
	request. // Setting Request
		// Debug
		EnableDump().
		EnableDumpWithoutRequest().
		EnableDumpWithoutResponse().
		EnableDumpWithoutHeader().
		EnableDumpWithoutBody().
		EnableDumpWithoutRequestBody().
		EnableDumpWithoutResponseBody().
		// Connection
		SetRetryCount(3).
		// Parameter & Header & Cookie & Body & Form
		SetQueryParam("user", "loli"). // Append a parameter (Overwrite if same name parameter exists)
		SetQueryParam("id", "123").
		SetQueryParams(map[string]string{ // Append parameters (Overwrite if same name parameter exists)
			"a": "0",
			"b": "0",
		}).
		AddQueryParam("param01", "value"). // Append a value to parameter
		AddQueryParam("param02", "value").
		SetPathParam("user", "imroc"). // Set a variable which can be used in URL by {var_name} when send request E.g. request.Get("https://api.github.com/users/{user}")
		SetPathParams(map[string]string{
			"user": "imcroc",
		}).
		SetHeader("User-Agent", "okhttp"). // Append a header (overwrite if same name header exists)
		SetHeader("Keep-Alive", "false").
		SetHeaders(map[string]string{
			"User-Agent": "okhttp",
			"Keep-Alive": "true",
		}).
		SetCookies(&http.Cookie{ // Append a cookie
			Name:  "id_hash",
			Value: "skdljfn",
		}).
		SetCookies(&http.Cookie{
			Name:  "password",
			Value: "slkdfjdl",
		}).
		SetBasicAuth("username", "passwd").
		SetBearerAuthToken("token").
		SetBody([]interface{}{}).
		SetFormData(map[string]string{})

	resp = request.MustGet(url)
	resp = request.MustPost(url)
	resp = request.MustPut(url)
	resp = request.MustDelete(url)
	resp = request.MustHead(url)
	resp = request.MustOptions(url)
	var err error

	resp, err = request.Get(url)
	if err != nil {
		log.Fatal(err)
	}
	if resp.IsSuccess() {
		// req API
		log.Info(resp.Dump())
		log.Info(resp.GetContentType())
		log.Info(resp.IsSuccess())
		log.Info(resp.IsError())
		log.Info(resp.TotalTime())
		err := resp.Unmarshal(&struct{}{})
		if err != nil {
			log.Fatal(err)
		}
		bodyString, err := resp.ToString() // read body as string if has not been read
		if err != nil {
			log.Fatal(err)
		}
		log.Info(bodyString)
		bodyBytes, err := resp.ToBytes() // // read body as bytes if has not been read
		if err != nil {
			log.Fatal(err)
		}
		log.Info(bodyBytes)
		log.Info(resp.Bytes())  // bytes of response body that has been read
		log.Info(resp.String()) // string of response body that has been read

		// net/http.Response API
		log.Info(resp.Status)
		log.Info(resp.Header)
		log.Info(resp.ContentLength)
		log.Info(resp.Body) // Only can be used when `Client.DisableAutoReadResponse()` is called (Default NOT call)
		log.Info(resp.Cookies())
		respUrl, err := resp.Location()
		if err != nil {
			log.Fatal(err)
		}
		log.Info(respUrl)
	}

	// Request URL through global function
	resp02, err := req.Get(url)
	if err != nil {
		log.Fatal(err)
	}
	if resp02.IsSuccess() {
		log.Info(resp02.Status)
	}
}

1. 创建 Client
2. 设置 Client (可选)
3. 创建 Request
4. 设置 Request (可选)
5. 获取 Response

`Client` 和 `Request` 是 req 最核心的 2 个 struct，其次是 `Response`

req 提供了很多全局函数，可以无需显式创建 Client 和 Request——拥有 Python requests 般的体验。这是因为 `req.Get()` etc 全局函数使用了 default client 和 default request 这两个实例，全局函数其实就是调用了 default client 和 default request 的 method，全局函数与 struct method 基本是一一对应且同名的。

每个 Request 实例必须绑定一个 Client，如果没显式地从特定 Client 创建 Request，如 `req.R()`，那么 request 会绑定 default client。

Parameter、Header、Cookie、Body、表单 可在 request 中设置，也能在 client 设置。


```
