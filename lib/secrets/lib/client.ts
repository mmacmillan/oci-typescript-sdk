/**
 * Vault Secret Retrieval API
 * Use the Secret Retrieval API to retrieve secrets and secret versions from vaults. For more information, see [Managing Secrets](/Content/KeyManagement/Tasks/managingsecrets.htm).
 * OpenAPI spec version: 20190301
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import common = require("oci-common");
import * as requests from "./request";
import * as model from "./model";
import * as responses from "./response";
import { paginateRecords, paginateResponses } from "oci-common";
import { composeResponse, composeRequest, GenericRetrier } from "oci-common";

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum SecretsApiKeys {}
/**
 * This service client uses {@link common.CircuitBreaker.DefaultConfiguration} for all the operations by default if no circuit breaker configuration is defined by the user.
 */
export class SecretsClient {
  protected static serviceEndpointTemplate =
    "https://secrets.vaults.{region}.oci.{secondLevelDomain}";
  protected static endpointServiceName = "";
  protected "_endpoint": string = "";
  protected "_defaultHeaders": any = {};
  protected "_clientConfiguration": common.ClientConfiguration;
  protected _circuitBreaker = null;
  protected _httpOptions: any = undefined;

  protected _httpClient: common.HttpClient;

  constructor(params: common.AuthParams, clientConfiguration?: common.ClientConfiguration) {
    const requestSigner = params.authenticationDetailsProvider
      ? new common.DefaultRequestSigner(params.authenticationDetailsProvider)
      : null;
    if (clientConfiguration) {
      this._clientConfiguration = clientConfiguration;
      this._circuitBreaker = clientConfiguration.circuitBreaker
        ? clientConfiguration.circuitBreaker!.circuit
        : null;
      this._httpOptions = clientConfiguration.httpOptions
        ? clientConfiguration.httpOptions
        : undefined;
    }
    // if circuit breaker is not created, check if circuit breaker system is enabled to use default circuit breaker
    const specCircuitBreakerEnabled = true;
    if (
      !this._circuitBreaker &&
      common.utils.isCircuitBreakerSystemEnabled(clientConfiguration!) &&
      (specCircuitBreakerEnabled || common.CircuitBreaker.DefaultCircuitBreakerOverriden)
    ) {
      this._circuitBreaker = new common.CircuitBreaker().circuit;
    }
    this._httpClient =
      params.httpClient ||
      new common.FetchHttpClient(requestSigner, this._circuitBreaker, this._httpOptions);

    if (
      params.authenticationDetailsProvider &&
      common.isRegionProvider(params.authenticationDetailsProvider)
    ) {
      const provider: common.RegionProvider = params.authenticationDetailsProvider;
      if (provider.getRegion()) {
        this.region = provider.getRegion();
      }
    }
  }

  /**
   * Get the endpoint that is being used to call (ex, https://www.example.com).
   */
  public get endpoint() {
    return this._endpoint;
  }

  /**
   * Sets the endpoint to call (ex, https://www.example.com).
   * @param endpoint The endpoint of the service.
   */
  public set endpoint(endpoint: string) {
    this._endpoint = endpoint;
    this._endpoint = this._endpoint + "/20190301";
    if (this.logger) this.logger.info(`SecretsClient endpoint set to ${this._endpoint}`);
  }

  public get logger() {
    return common.LOG.logger;
  }

  /**
   * Sets the region to call (ex, Region.US_PHOENIX_1).
   * Note, this will call {@link #endpoint(String) endpoint} after resolving the endpoint.
   * @param region The region of the service.
   */
  public set region(region: common.Region) {
    this.endpoint = common.EndpointBuilder.createEndpointFromRegion(
      SecretsClient.serviceEndpointTemplate,
      region,
      SecretsClient.endpointServiceName
    );
  }

  /**
   * Sets the regionId to call (ex, 'us-phoenix-1').
   *
   * Note, this will first try to map the region ID to a known Region and call {@link #region(Region) region}.
   * If no known Region could be determined, it will create an endpoint assuming its in default Realm OC1
   * and then call {@link #endpoint(String) endpoint}.
   * @param regionId The public region ID.
   */
  public set regionId(regionId: string) {
    this.endpoint = common.EndpointBuilder.createEndpointFromRegionId(
      SecretsClient.serviceEndpointTemplate,
      regionId,
      SecretsClient.endpointServiceName
    );
  }

  /**
   * Gets a secret bundle that matches either the specified `stage`, `secretVersionName`, or `versionNumber` parameter.
   * If none of these parameters are provided, the bundle for the secret version marked as `CURRENT` will be returned.
   *
   * This operation uses {@link common.OciSdkDefaultRetryConfiguration} by default if no retry configuration is defined by the user.
   * @param GetSecretBundleRequest
   * @return GetSecretBundleResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/secrets/GetSecretBundle.ts.html |here} to see how to use GetSecretBundle API.
   */
  public async getSecretBundle(
    getSecretBundleRequest: requests.GetSecretBundleRequest
  ): Promise<responses.GetSecretBundleResponse> {
    if (this.logger) this.logger.debug("Calling operation SecretsClient#getSecretBundle.");
    const pathParams = {
      "{secretId}": getSecretBundleRequest.secretId
    };

    const queryParams = {
      "versionNumber": getSecretBundleRequest.versionNumber,
      "secretVersionName": getSecretBundleRequest.secretVersionName,
      "stage": getSecretBundleRequest.stage
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": getSecretBundleRequest.opcRequestId
    };

    const specRetryConfiguration = common.OciSdkDefaultRetryConfiguration;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      getSecretBundleRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/secretbundles/{secretId}",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.GetSecretBundleResponse>{},
        body: await response.json(),
        bodyKey: "secretBundle",
        bodyModel: model.SecretBundle,
        type: "model.SecretBundle",
        responseHeaders: [
          {
            value: response.headers.get("etag"),
            key: "etag",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Gets a secret bundle by secret name and vault ID, and secret version that matches either the specified `stage`, `secretVersionName`, or `versionNumber` parameter.
   * If none of these parameters are provided, the bundle for the secret version marked as `CURRENT` is returned.
   *
   * This operation uses {@link common.OciSdkDefaultRetryConfiguration} by default if no retry configuration is defined by the user.
   * @param GetSecretBundleByNameRequest
   * @return GetSecretBundleByNameResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/secrets/GetSecretBundleByName.ts.html |here} to see how to use GetSecretBundleByName API.
   */
  public async getSecretBundleByName(
    getSecretBundleByNameRequest: requests.GetSecretBundleByNameRequest
  ): Promise<responses.GetSecretBundleByNameResponse> {
    if (this.logger) this.logger.debug("Calling operation SecretsClient#getSecretBundleByName.");
    const pathParams = {};

    const queryParams = {
      "secretName": getSecretBundleByNameRequest.secretName,
      "vaultId": getSecretBundleByNameRequest.vaultId,
      "versionNumber": getSecretBundleByNameRequest.versionNumber,
      "secretVersionName": getSecretBundleByNameRequest.secretVersionName,
      "stage": getSecretBundleByNameRequest.stage
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": getSecretBundleByNameRequest.opcRequestId
    };

    const specRetryConfiguration = common.OciSdkDefaultRetryConfiguration;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      getSecretBundleByNameRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/secretbundles/actions/getByName",
      method: "POST",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.GetSecretBundleByNameResponse>{},
        body: await response.json(),
        bodyKey: "secretBundle",
        bodyModel: model.SecretBundle,
        type: "model.SecretBundle",
        responseHeaders: [
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Lists all secret bundle versions for the specified secret.
   * This operation uses {@link common.OciSdkDefaultRetryConfiguration} by default if no retry configuration is defined by the user.
   * @param ListSecretBundleVersionsRequest
   * @return ListSecretBundleVersionsResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/secrets/ListSecretBundleVersions.ts.html |here} to see how to use ListSecretBundleVersions API.
   */
  public async listSecretBundleVersions(
    listSecretBundleVersionsRequest: requests.ListSecretBundleVersionsRequest
  ): Promise<responses.ListSecretBundleVersionsResponse> {
    if (this.logger) this.logger.debug("Calling operation SecretsClient#listSecretBundleVersions.");
    const pathParams = {
      "{secretId}": listSecretBundleVersionsRequest.secretId
    };

    const queryParams = {
      "limit": listSecretBundleVersionsRequest.limit,
      "page": listSecretBundleVersionsRequest.page,
      "sortBy": listSecretBundleVersionsRequest.sortBy,
      "sortOrder": listSecretBundleVersionsRequest.sortOrder
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": listSecretBundleVersionsRequest.opcRequestId
    };

    const specRetryConfiguration = common.OciSdkDefaultRetryConfiguration;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      listSecretBundleVersionsRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/secretbundles/{secretId}/versions",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.ListSecretBundleVersionsResponse>{},
        body: await response.json(),
        bodyKey: "items",
        bodyModel: model.SecretBundleVersionSummary,
        type: "Array<model.SecretBundleVersionSummary>",
        responseHeaders: [
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-next-page"),
            key: "opcNextPage",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * NOTE: This function is deprecated in favor of listSecretBundleVersionsRecordIterator function.
   * Creates a new async iterator which will iterate over the models.SecretBundleVersionSummary objects
   * contained in responses from the listSecretBundleVersions operation. This iterator will fetch more data from the
   * server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllSecretBundleVersions(
    request: requests.ListSecretBundleVersionsRequest
  ): AsyncIterableIterator<model.SecretBundleVersionSummary> {
    return paginateRecords(request, req => this.listSecretBundleVersions(req));
  }

  /**
   * NOTE: This function is deprecated in favor of listSecretBundleVersionsResponseIterator function.
   * Creates a new async iterator which will iterate over the responses received from the listSecretBundleVersions operation. This iterator
   * will fetch more data from the server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllSecretBundleVersionsResponses(
    request: requests.ListSecretBundleVersionsRequest
  ): AsyncIterableIterator<responses.ListSecretBundleVersionsResponse> {
    return paginateResponses(request, req => this.listSecretBundleVersions(req));
  }

  /**
   * Creates a new async iterator which will iterate over the models.SecretBundleVersionSummary objects
   * contained in responses from the listSecretBundleVersions operation. This iterator will fetch more data from the
   * server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listSecretBundleVersionsRecordIterator(
    request: requests.ListSecretBundleVersionsRequest
  ): AsyncIterableIterator<model.SecretBundleVersionSummary> {
    return paginateRecords(request, req => this.listSecretBundleVersions(req));
  }

  /**
   * Creates a new async iterator which will iterate over the responses received from the listSecretBundleVersions operation. This iterator
   * will fetch more data from the server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listSecretBundleVersionsResponseIterator(
    request: requests.ListSecretBundleVersionsRequest
  ): AsyncIterableIterator<responses.ListSecretBundleVersionsResponse> {
    return paginateResponses(request, req => this.listSecretBundleVersions(req));
  }
}
