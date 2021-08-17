/**
 * Secrets Management API
 * API for managing secrets.
 * OpenAPI spec version: 20180608
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import common = require("oci-common");
import * as requests from "./request";
import * as model from "./model";
import * as responses from "./response";
import { paginateRecords, paginateResponses } from "oci-common";
import { VaultsWaiter } from "./vaults-waiter";
import { composeResponse, composeRequest, GenericRetrier } from "oci-common";

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum VaultsApiKeys {}

export class VaultsClient {
  protected static serviceEndpointTemplate = "https://vaults.{region}.oci.{secondLevelDomain}";
  protected "_endpoint": string = "";
  protected "_defaultHeaders": any = {};
  protected "_waiters": VaultsWaiter;
  protected "_clientConfiguration": common.ClientConfiguration;
  protected _circuitBreaker = null;

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
    }
    this._httpClient =
      params.httpClient || new common.FetchHttpClient(requestSigner, this._circuitBreaker);

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
    this._endpoint = this._endpoint + "/20180608";
    if (this.logger) this.logger.info(`VaultsClient endpoint set to ${this._endpoint}`);
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
      VaultsClient.serviceEndpointTemplate,
      region
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
      VaultsClient.serviceEndpointTemplate,
      regionId
    );
  }

  /**
   * Creates a new VaultsWaiter for resources for this service.
   *
   * @param config The waiter configuration for termination and delay strategy
   * @return The service waiters.
   */
  public createWaiters(config?: common.WaiterConfiguration): VaultsWaiter {
    this._waiters = new VaultsWaiter(this, config);
    return this._waiters;
  }

  /**
   * Gets the waiters available for resources for this service.
   *
   * @return The service waiters.
   */
  public getWaiters(): VaultsWaiter {
    if (this._waiters) {
      return this._waiters;
    }
    throw Error("Waiters do not exist. Please create waiters.");
  }

  /**
   * Cancels the pending deletion of the specified secret. Canceling
   * a scheduled deletion restores the secret's lifecycle state to what
   * it was before you scheduled the secret for deletion.
   *
   * @param CancelSecretDeletionRequest
   * @return CancelSecretDeletionResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/vault/CancelSecretDeletion.ts.html |here} to see how to use CancelSecretDeletion API.
   */
  public async cancelSecretDeletion(
    cancelSecretDeletionRequest: requests.CancelSecretDeletionRequest
  ): Promise<responses.CancelSecretDeletionResponse> {
    if (this.logger) this.logger.debug("Calling operation VaultsClient#cancelSecretDeletion.");
    const pathParams = {
      "{secretId}": cancelSecretDeletionRequest.secretId
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "if-match": cancelSecretDeletionRequest.ifMatch,
      "opc-request-id": cancelSecretDeletionRequest.opcRequestId
    };

    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      cancelSecretDeletionRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/secrets/{secretId}/actions/cancelDeletion",
      method: "POST",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.CancelSecretDeletionResponse>{},
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
   * Cancels the scheduled deletion of a secret version.
   * @param CancelSecretVersionDeletionRequest
   * @return CancelSecretVersionDeletionResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/vault/CancelSecretVersionDeletion.ts.html |here} to see how to use CancelSecretVersionDeletion API.
   */
  public async cancelSecretVersionDeletion(
    cancelSecretVersionDeletionRequest: requests.CancelSecretVersionDeletionRequest
  ): Promise<responses.CancelSecretVersionDeletionResponse> {
    if (this.logger)
      this.logger.debug("Calling operation VaultsClient#cancelSecretVersionDeletion.");
    const pathParams = {
      "{secretId}": cancelSecretVersionDeletionRequest.secretId,
      "{secretVersionNumber}": cancelSecretVersionDeletionRequest.secretVersionNumber
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "if-match": cancelSecretVersionDeletionRequest.ifMatch,
      "opc-request-id": cancelSecretVersionDeletionRequest.opcRequestId
    };

    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      cancelSecretVersionDeletionRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/secrets/{secretId}/version/{secretVersionNumber}/actions/cancelDeletion",
      method: "POST",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.CancelSecretVersionDeletionResponse>{},
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
     * Moves a secret into a different compartment within the same tenancy. For information about
* moving resources between compartments, see [Moving Resources to a Different Compartment](https://docs.cloud.oracle.com/iaas/Content/Identity/Tasks/managingcompartments.htm#moveRes).
* <p>
When provided, if-match is checked against the ETag values of the secret.
* 
     * @param ChangeSecretCompartmentRequest
     * @return ChangeSecretCompartmentResponse
     * @throws OciError when an error occurs
     * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/vault/ChangeSecretCompartment.ts.html |here} to see how to use ChangeSecretCompartment API.
     */
  public async changeSecretCompartment(
    changeSecretCompartmentRequest: requests.ChangeSecretCompartmentRequest
  ): Promise<responses.ChangeSecretCompartmentResponse> {
    if (this.logger) this.logger.debug("Calling operation VaultsClient#changeSecretCompartment.");
    const pathParams = {
      "{secretId}": changeSecretCompartmentRequest.secretId
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "if-match": changeSecretCompartmentRequest.ifMatch,
      "opc-request-id": changeSecretCompartmentRequest.opcRequestId,
      "opc-retry-token": changeSecretCompartmentRequest.opcRetryToken
    };

    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      changeSecretCompartmentRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/secrets/{secretId}/actions/changeCompartment",
      method: "POST",
      bodyContent: common.ObjectSerializer.serialize(
        changeSecretCompartmentRequest.changeSecretCompartmentDetails,
        "ChangeSecretCompartmentDetails",
        model.ChangeSecretCompartmentDetails.getJsonObj
      ),
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.ChangeSecretCompartmentResponse>{},
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
     * Creates a new secret according to the details of the request.
* <p>
This operation is not supported by the Oracle Cloud Infrastructure Terraform Provider.
* 
     * @param CreateSecretRequest
     * @return CreateSecretResponse
     * @throws OciError when an error occurs
     * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/vault/CreateSecret.ts.html |here} to see how to use CreateSecret API.
     */
  public async createSecret(
    createSecretRequest: requests.CreateSecretRequest
  ): Promise<responses.CreateSecretResponse> {
    if (this.logger) this.logger.debug("Calling operation VaultsClient#createSecret.");
    const pathParams = {};

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": createSecretRequest.opcRequestId,
      "opc-retry-token": createSecretRequest.opcRetryToken
    };

    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      createSecretRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/secrets",
      method: "POST",
      bodyContent: common.ObjectSerializer.serialize(
        createSecretRequest.createSecretDetails,
        "CreateSecretDetails",
        model.CreateSecretDetails.getJsonObj
      ),
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.CreateSecretResponse>{},
        body: await response.json(),
        bodyKey: "secret",
        bodyModel: model.Secret,
        type: "model.Secret",
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
   * Gets information about the specified secret.
   * @param GetSecretRequest
   * @return GetSecretResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/vault/GetSecret.ts.html |here} to see how to use GetSecret API.
   */
  public async getSecret(
    getSecretRequest: requests.GetSecretRequest
  ): Promise<responses.GetSecretResponse> {
    if (this.logger) this.logger.debug("Calling operation VaultsClient#getSecret.");
    const pathParams = {
      "{secretId}": getSecretRequest.secretId
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": getSecretRequest.opcRequestId
    };

    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      getSecretRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/secrets/{secretId}",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.GetSecretResponse>{},
        body: await response.json(),
        bodyKey: "secret",
        bodyModel: model.Secret,
        type: "model.Secret",
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
   * Gets information about the specified version of a secret.
   *
   * @param GetSecretVersionRequest
   * @return GetSecretVersionResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/vault/GetSecretVersion.ts.html |here} to see how to use GetSecretVersion API.
   */
  public async getSecretVersion(
    getSecretVersionRequest: requests.GetSecretVersionRequest
  ): Promise<responses.GetSecretVersionResponse> {
    if (this.logger) this.logger.debug("Calling operation VaultsClient#getSecretVersion.");
    const pathParams = {
      "{secretId}": getSecretVersionRequest.secretId,
      "{secretVersionNumber}": getSecretVersionRequest.secretVersionNumber
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": getSecretVersionRequest.opcRequestId
    };

    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      getSecretVersionRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/secrets/{secretId}/version/{secretVersionNumber}",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.GetSecretVersionResponse>{},
        body: await response.json(),
        bodyKey: "secretVersion",
        bodyModel: model.SecretVersion,
        type: "model.SecretVersion",
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
   * Lists all secret versions for the specified secret.
   * @param ListSecretVersionsRequest
   * @return ListSecretVersionsResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/vault/ListSecretVersions.ts.html |here} to see how to use ListSecretVersions API.
   */
  public async listSecretVersions(
    listSecretVersionsRequest: requests.ListSecretVersionsRequest
  ): Promise<responses.ListSecretVersionsResponse> {
    if (this.logger) this.logger.debug("Calling operation VaultsClient#listSecretVersions.");
    const pathParams = {
      "{secretId}": listSecretVersionsRequest.secretId
    };

    const queryParams = {
      "limit": listSecretVersionsRequest.limit,
      "page": listSecretVersionsRequest.page,
      "sortBy": listSecretVersionsRequest.sortBy,
      "sortOrder": listSecretVersionsRequest.sortOrder
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": listSecretVersionsRequest.opcRequestId
    };

    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      listSecretVersionsRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/secrets/{secretId}/versions",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.ListSecretVersionsResponse>{},
        body: await response.json(),
        bodyKey: "items",
        bodyModel: model.SecretVersionSummary,
        type: "Array<model.SecretVersionSummary>",
        responseHeaders: [
          {
            value: response.headers.get("opc-next-page"),
            key: "opcNextPage",
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
   * Creates a new async iterator which will iterate over the models.SecretVersionSummary objects
   * contained in responses from the listSecretVersions operation. This iterator will fetch more data from the
   * server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllSecretVersions(
    request: requests.ListSecretVersionsRequest
  ): AsyncIterableIterator<model.SecretVersionSummary> {
    return paginateRecords(request, req => this.listSecretVersions(req));
  }

  /**
   * Creates a new async iterator which will iterate over the responses received from the listSecretVersions operation. This iterator
   * will fetch more data from the server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllSecretVersionsResponses(
    request: requests.ListSecretVersionsRequest
  ): AsyncIterableIterator<responses.ListSecretVersionsResponse> {
    return paginateResponses(request, req => this.listSecretVersions(req));
  }

  /**
   * Lists all secrets in the specified vault and compartment.
   * @param ListSecretsRequest
   * @return ListSecretsResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/vault/ListSecrets.ts.html |here} to see how to use ListSecrets API.
   */
  public async listSecrets(
    listSecretsRequest: requests.ListSecretsRequest
  ): Promise<responses.ListSecretsResponse> {
    if (this.logger) this.logger.debug("Calling operation VaultsClient#listSecrets.");
    const pathParams = {};

    const queryParams = {
      "compartmentId": listSecretsRequest.compartmentId,
      "name": listSecretsRequest.name,
      "limit": listSecretsRequest.limit,
      "page": listSecretsRequest.page,
      "sortBy": listSecretsRequest.sortBy,
      "sortOrder": listSecretsRequest.sortOrder,
      "vaultId": listSecretsRequest.vaultId,
      "lifecycleState": listSecretsRequest.lifecycleState
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": listSecretsRequest.opcRequestId
    };

    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      listSecretsRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/secrets",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.ListSecretsResponse>{},
        body: await response.json(),
        bodyKey: "items",
        bodyModel: model.SecretSummary,
        type: "Array<model.SecretSummary>",
        responseHeaders: [
          {
            value: response.headers.get("opc-next-page"),
            key: "opcNextPage",
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
   * Creates a new async iterator which will iterate over the models.SecretSummary objects
   * contained in responses from the listSecrets operation. This iterator will fetch more data from the
   * server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllSecrets(
    request: requests.ListSecretsRequest
  ): AsyncIterableIterator<model.SecretSummary> {
    return paginateRecords(request, req => this.listSecrets(req));
  }

  /**
   * Creates a new async iterator which will iterate over the responses received from the listSecrets operation. This iterator
   * will fetch more data from the server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllSecretsResponses(
    request: requests.ListSecretsRequest
  ): AsyncIterableIterator<responses.ListSecretsResponse> {
    return paginateResponses(request, req => this.listSecrets(req));
  }

  /**
   * Schedules the deletion of the specified secret. This sets the lifecycle state of the secret
   * to `PENDING_DELETION` and then deletes it after the specified retention period ends.
   *
   * @param ScheduleSecretDeletionRequest
   * @return ScheduleSecretDeletionResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/vault/ScheduleSecretDeletion.ts.html |here} to see how to use ScheduleSecretDeletion API.
   */
  public async scheduleSecretDeletion(
    scheduleSecretDeletionRequest: requests.ScheduleSecretDeletionRequest
  ): Promise<responses.ScheduleSecretDeletionResponse> {
    if (this.logger) this.logger.debug("Calling operation VaultsClient#scheduleSecretDeletion.");
    const pathParams = {
      "{secretId}": scheduleSecretDeletionRequest.secretId
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "if-match": scheduleSecretDeletionRequest.ifMatch,
      "opc-request-id": scheduleSecretDeletionRequest.opcRequestId
    };

    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      scheduleSecretDeletionRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/secrets/{secretId}/actions/scheduleDeletion",
      method: "POST",
      bodyContent: common.ObjectSerializer.serialize(
        scheduleSecretDeletionRequest.scheduleSecretDeletionDetails,
        "ScheduleSecretDeletionDetails",
        model.ScheduleSecretDeletionDetails.getJsonObj
      ),
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.ScheduleSecretDeletionResponse>{},
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
   * Schedules the deletion of the specified secret version. This deletes it after the specified retention period ends. You can only
   * delete a secret version if the secret version rotation state is marked as `DEPRECATED`.
   *
   * @param ScheduleSecretVersionDeletionRequest
   * @return ScheduleSecretVersionDeletionResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/vault/ScheduleSecretVersionDeletion.ts.html |here} to see how to use ScheduleSecretVersionDeletion API.
   */
  public async scheduleSecretVersionDeletion(
    scheduleSecretVersionDeletionRequest: requests.ScheduleSecretVersionDeletionRequest
  ): Promise<responses.ScheduleSecretVersionDeletionResponse> {
    if (this.logger)
      this.logger.debug("Calling operation VaultsClient#scheduleSecretVersionDeletion.");
    const pathParams = {
      "{secretId}": scheduleSecretVersionDeletionRequest.secretId,
      "{secretVersionNumber}": scheduleSecretVersionDeletionRequest.secretVersionNumber
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "if-match": scheduleSecretVersionDeletionRequest.ifMatch,
      "opc-request-id": scheduleSecretVersionDeletionRequest.opcRequestId
    };

    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      scheduleSecretVersionDeletionRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/secrets/{secretId}/version/{secretVersionNumber}/actions/scheduleDeletion",
      method: "POST",
      bodyContent: common.ObjectSerializer.serialize(
        scheduleSecretVersionDeletionRequest.scheduleSecretVersionDeletionDetails,
        "ScheduleSecretVersionDeletionDetails",
        model.ScheduleSecretVersionDeletionDetails.getJsonObj
      ),
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.ScheduleSecretVersionDeletionResponse>{},
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
     * Updates the properties of a secret. Specifically, you can update the version number of the secret to make
* that version number the current version. You can also update a secret's description, its free-form or defined tags, rules
* and the secret contents. Updating the secret content automatically creates a new secret version. You cannot, however, update the current secret version number and the secret contents and the rules at the
* same time. Furthermore, the secret must in an `ACTIVE` lifecycle state to be updated.
* <p>
This operation is not supported by the Oracle Cloud Infrastructure Terraform Provider.
* 
     * @param UpdateSecretRequest
     * @return UpdateSecretResponse
     * @throws OciError when an error occurs
     * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/vault/UpdateSecret.ts.html |here} to see how to use UpdateSecret API.
     */
  public async updateSecret(
    updateSecretRequest: requests.UpdateSecretRequest
  ): Promise<responses.UpdateSecretResponse> {
    if (this.logger) this.logger.debug("Calling operation VaultsClient#updateSecret.");
    const pathParams = {
      "{secretId}": updateSecretRequest.secretId
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "if-match": updateSecretRequest.ifMatch,
      "opc-request-id": updateSecretRequest.opcRequestId
    };

    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      updateSecretRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/secrets/{secretId}",
      method: "PUT",
      bodyContent: common.ObjectSerializer.serialize(
        updateSecretRequest.updateSecretDetails,
        "UpdateSecretDetails",
        model.UpdateSecretDetails.getJsonObj
      ),
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.UpdateSecretResponse>{},
        body: await response.json(),
        bodyKey: "secret",
        bodyModel: model.Secret,
        type: "model.Secret",
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
}
