/**
 * Digital Assistant Service Instance API
 * API to create and maintain Oracle Digital Assistant service instances.
 * OpenAPI spec version: 20190506
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import common = require("oci-common");
import * as requests from "./request";
import * as models from "./model";
import * as responses from "./response";
import { paginateRecords, paginateResponses } from "oci-common";
import { OdaWaiter } from "./oda-waiter";
import { composeResponse, composeRequest, GenericRetrier } from "oci-common";

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum OdaApiKeys {}

export class OdaClient {
  protected static serviceEndpointTemplate =
    "https://digitalassistant-api.{region}.oci.{secondLevelDomain}";
  protected "_endpoint": string = "";
  protected "_defaultHeaders": any = {};
  protected "_waiters": OdaWaiter;
  protected "_clientConfiguration": common.ClientConfiguration;

  protected _httpClient: common.HttpClient;

  constructor(params: common.AuthParams) {
    const requestSigner = params.authenticationDetailsProvider
      ? new common.DefaultRequestSigner(params.authenticationDetailsProvider)
      : null;
    this._httpClient = params.httpClient || new common.FetchHttpClient(requestSigner);

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
    this._endpoint = this._endpoint + "/20190506";
    if (this.logger) this.logger.info(`OdaClient endpoint set to ${this._endpoint}`);
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
      OdaClient.serviceEndpointTemplate,
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
      OdaClient.serviceEndpointTemplate,
      regionId
    );
  }

  /**
   * Creates a new OdaWaiter for resources for this service.
   *
   * @param config The waiter configuration for termination and delay strategy
   * @return The service waiters.
   */
  public createWaiters(config?: common.WaiterConfiguration): OdaWaiter {
    this._waiters = new OdaWaiter(this, config);
    return this._waiters;
  }

  /**
   * Gets the waiters available for resources for this service.
   *
   * @return The service waiters.
   */
  public getWaiters(): OdaWaiter {
    if (this._waiters) {
      return this._waiters;
    }
    throw Error("Waiters do not exist. Please create waiters.");
  }

  /**
   * Sets the client configuration for the client
   */
  public set clientConfiguration(clientConfiguration: common.ClientConfiguration) {
    this._clientConfiguration = clientConfiguration;
  }

  /**
   * Moves an Digital Assistant instance into a different compartment. When provided, If-Match is checked against
   * ETag values of the resource.
   *
   * @param ChangeOdaInstanceCompartmentRequest
   * @return ChangeOdaInstanceCompartmentResponse
   * @throws OciError when an error occurs
   */
  public async changeOdaInstanceCompartment(
    changeOdaInstanceCompartmentRequest: requests.ChangeOdaInstanceCompartmentRequest
  ): Promise<responses.ChangeOdaInstanceCompartmentResponse> {
    if (this.logger) this.logger.debug("Calling operation OdaClient#changeOdaInstanceCompartment.");
    const pathParams = {
      "{odaInstanceId}": changeOdaInstanceCompartmentRequest.odaInstanceId
    };

    const queryParams = {};

    let headerParams = {
      "if-match": changeOdaInstanceCompartmentRequest.ifMatch,
      "opc-request-id": changeOdaInstanceCompartmentRequest.opcRequestId,
      "opc-retry-token": changeOdaInstanceCompartmentRequest.opcRetryToken
    };

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/odaInstances/{odaInstanceId}/actions/changeCompartment",
      method: "POST",
      bodyContent: common.ObjectSerializer.serialize(
        changeOdaInstanceCompartmentRequest.changeOdaInstanceCompartmentDetails,
        "ChangeOdaInstanceCompartmentDetails",
        models.ChangeOdaInstanceCompartmentDetails.getJsonObj
      ),
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      changeOdaInstanceCompartmentRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.ChangeOdaInstanceCompartmentResponse>{},
        responseHeaders: [
          {
            value: response.headers.get("opc-work-request-id"),
            key: "opcWorkRequestId",
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
     * Starts an asynchronous job to create a Digital Assistant instance.
* <p>
To monitor the status of the job, take the `opc-work-request-id` response
* header value and use it to call `GET /workRequests/{workRequestID}`.
* 
     * @param CreateOdaInstanceRequest
     * @return CreateOdaInstanceResponse
     * @throws OciError when an error occurs
     */
  public async createOdaInstance(
    createOdaInstanceRequest: requests.CreateOdaInstanceRequest
  ): Promise<responses.CreateOdaInstanceResponse> {
    if (this.logger) this.logger.debug("Calling operation OdaClient#createOdaInstance.");
    const pathParams = {};

    const queryParams = {};

    let headerParams = {
      "opc-request-id": createOdaInstanceRequest.opcRequestId,
      "opc-retry-token": createOdaInstanceRequest.opcRetryToken
    };

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/odaInstances",
      method: "POST",
      bodyContent: common.ObjectSerializer.serialize(
        createOdaInstanceRequest.createOdaInstanceDetails,
        "CreateOdaInstanceDetails",
        models.CreateOdaInstanceDetails.getJsonObj
      ),
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      createOdaInstanceRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.CreateOdaInstanceResponse>{},
        body: await response.json(),
        bodyKey: "odaInstance",
        bodyModel: "model.OdaInstance",
        responseHeaders: [
          {
            value: response.headers.get("Location"),
            key: "location",
            dataType: "string"
          },
          {
            value: response.headers.get("etag"),
            key: "etag",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-work-request-id"),
            key: "opcWorkRequestId",
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
   * Starts an asynchronous job to delete the specified Digital Assistant instance.
   * To monitor the status of the job, take the `opc-work-request-id` response header value and use it to call `GET /workRequests/{workRequestID}`.
   * @param DeleteOdaInstanceRequest
   * @return DeleteOdaInstanceResponse
   * @throws OciError when an error occurs
   */
  public async deleteOdaInstance(
    deleteOdaInstanceRequest: requests.DeleteOdaInstanceRequest
  ): Promise<responses.DeleteOdaInstanceResponse> {
    if (this.logger) this.logger.debug("Calling operation OdaClient#deleteOdaInstance.");
    const pathParams = {
      "{odaInstanceId}": deleteOdaInstanceRequest.odaInstanceId
    };

    const queryParams = {};

    let headerParams = {
      "if-match": deleteOdaInstanceRequest.ifMatch,
      "opc-request-id": deleteOdaInstanceRequest.opcRequestId
    };

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/odaInstances/{odaInstanceId}",
      method: "DELETE",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      deleteOdaInstanceRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.DeleteOdaInstanceResponse>{},
        responseHeaders: [
          {
            value: response.headers.get("opc-work-request-id"),
            key: "opcWorkRequestId",
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
   * Gets the specified Digital Assistant instance.
   * @param GetOdaInstanceRequest
   * @return GetOdaInstanceResponse
   * @throws OciError when an error occurs
   */
  public async getOdaInstance(
    getOdaInstanceRequest: requests.GetOdaInstanceRequest
  ): Promise<responses.GetOdaInstanceResponse> {
    if (this.logger) this.logger.debug("Calling operation OdaClient#getOdaInstance.");
    const pathParams = {
      "{odaInstanceId}": getOdaInstanceRequest.odaInstanceId
    };

    const queryParams = {};

    let headerParams = {
      "opc-request-id": getOdaInstanceRequest.opcRequestId
    };

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/odaInstances/{odaInstanceId}",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      getOdaInstanceRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.GetOdaInstanceResponse>{},
        body: await response.json(),
        bodyKey: "odaInstance",
        bodyModel: "model.OdaInstance",
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
     * Gets information about the work request with the specified ID, including its status.
* <p>
You can use this operation to monitor the status of jobs that you
* requested to create, delete, and update instances.
* 
     * @param GetWorkRequestRequest
     * @return GetWorkRequestResponse
     * @throws OciError when an error occurs
     */
  public async getWorkRequest(
    getWorkRequestRequest: requests.GetWorkRequestRequest
  ): Promise<responses.GetWorkRequestResponse> {
    if (this.logger) this.logger.debug("Calling operation OdaClient#getWorkRequest.");
    const pathParams = {
      "{workRequestId}": getWorkRequestRequest.workRequestId
    };

    const queryParams = {};

    let headerParams = {
      "opc-request-id": getWorkRequestRequest.opcRequestId
    };

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/workRequests/{workRequestId}",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      getWorkRequestRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.GetWorkRequestResponse>{},
        body: await response.json(),
        bodyKey: "workRequest",
        bodyModel: "model.WorkRequest",
        responseHeaders: [
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          },
          {
            value: response.headers.get("retry-after"),
            key: "retryAfter",
            dataType: "number"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
     * Returns a page of Digital Assistant instances that belong to the specified
* compartment.
* <p>
If the `opc-next-page` header appears in the response, then
* there are more items to retrieve. To get the next page in the subsequent
* GET request, include the header's value as the `page` query parameter.
* 
     * @param ListOdaInstancesRequest
     * @return ListOdaInstancesResponse
     * @throws OciError when an error occurs
     */
  public async listOdaInstances(
    listOdaInstancesRequest: requests.ListOdaInstancesRequest
  ): Promise<responses.ListOdaInstancesResponse> {
    if (this.logger) this.logger.debug("Calling operation OdaClient#listOdaInstances.");
    const pathParams = {};

    const queryParams = {
      "compartmentId": listOdaInstancesRequest.compartmentId,
      "displayName": listOdaInstancesRequest.displayName,
      "lifecycleState": listOdaInstancesRequest.lifecycleState,
      "limit": listOdaInstancesRequest.limit,
      "page": listOdaInstancesRequest.page,
      "sortOrder": listOdaInstancesRequest.sortOrder,
      "sortBy": listOdaInstancesRequest.sortBy
    };

    let headerParams = {
      "opc-request-id": listOdaInstancesRequest.opcRequestId
    };

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/odaInstances",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      listOdaInstancesRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.ListOdaInstancesResponse>{},
        body: await response.json(),
        bodyKey: "items",
        bodyModel: "OdaInstanceSummary[]",
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
   * Creates a new async iterator which will iterate over the models.OdaInstanceSummary objects
   * contained in responses from the listOdaInstances operation. This iterator will fetch more data from the
   * server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllOdaInstances(
    request: requests.ListOdaInstancesRequest
  ): AsyncIterableIterator<models.OdaInstanceSummary> {
    return paginateRecords(request, req => this.listOdaInstances(req));
  }

  /**
   * Creates a new async iterator which will iterate over the responses received from the listOdaInstances operation. This iterator
   * will fetch more data from the server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllOdaInstancesResponses(
    request: requests.ListOdaInstancesRequest
  ): AsyncIterableIterator<responses.ListOdaInstancesResponse> {
    return paginateResponses(request, req => this.listOdaInstances(req));
  }

  /**
     * Returns a page of errors for the specified work request.
* <p>
If the `opc-next-page` header appears in the response, then
* there are more items to retrieve. To get the next page in the subsequent
* GET request, include the header's value as the `page` query parameter.
* 
     * @param ListWorkRequestErrorsRequest
     * @return ListWorkRequestErrorsResponse
     * @throws OciError when an error occurs
     */
  public async listWorkRequestErrors(
    listWorkRequestErrorsRequest: requests.ListWorkRequestErrorsRequest
  ): Promise<responses.ListWorkRequestErrorsResponse> {
    if (this.logger) this.logger.debug("Calling operation OdaClient#listWorkRequestErrors.");
    const pathParams = {
      "{workRequestId}": listWorkRequestErrorsRequest.workRequestId
    };

    const queryParams = {
      "page": listWorkRequestErrorsRequest.page,
      "limit": listWorkRequestErrorsRequest.limit,
      "sortBy": listWorkRequestErrorsRequest.sortBy,
      "sortOrder": listWorkRequestErrorsRequest.sortOrder
    };

    let headerParams = {
      "opc-request-id": listWorkRequestErrorsRequest.opcRequestId
    };

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/workRequests/{workRequestId}/errors",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      listWorkRequestErrorsRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.ListWorkRequestErrorsResponse>{},
        body: await response.json(),
        bodyKey: "items",
        bodyModel: "WorkRequestError[]",
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
   * Creates a new async iterator which will iterate over the models.WorkRequestError objects
   * contained in responses from the listWorkRequestErrors operation. This iterator will fetch more data from the
   * server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllWorkRequestErrors(
    request: requests.ListWorkRequestErrorsRequest
  ): AsyncIterableIterator<models.WorkRequestError> {
    return paginateRecords(request, req => this.listWorkRequestErrors(req));
  }

  /**
   * Creates a new async iterator which will iterate over the responses received from the listWorkRequestErrors operation. This iterator
   * will fetch more data from the server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllWorkRequestErrorsResponses(
    request: requests.ListWorkRequestErrorsRequest
  ): AsyncIterableIterator<responses.ListWorkRequestErrorsResponse> {
    return paginateResponses(request, req => this.listWorkRequestErrors(req));
  }

  /**
     * Returns a page of of log messages for a given work request.
* <p>
If the `opc-next-page` header appears in the response, then
* there are more items to retrieve. To get the next page in the subsequent
* GET request, include the header's value as the `page` query parameter.
* 
     * @param ListWorkRequestLogsRequest
     * @return ListWorkRequestLogsResponse
     * @throws OciError when an error occurs
     */
  public async listWorkRequestLogs(
    listWorkRequestLogsRequest: requests.ListWorkRequestLogsRequest
  ): Promise<responses.ListWorkRequestLogsResponse> {
    if (this.logger) this.logger.debug("Calling operation OdaClient#listWorkRequestLogs.");
    const pathParams = {
      "{workRequestId}": listWorkRequestLogsRequest.workRequestId
    };

    const queryParams = {
      "page": listWorkRequestLogsRequest.page,
      "limit": listWorkRequestLogsRequest.limit,
      "sortBy": listWorkRequestLogsRequest.sortBy,
      "sortOrder": listWorkRequestLogsRequest.sortOrder
    };

    let headerParams = {
      "opc-request-id": listWorkRequestLogsRequest.opcRequestId
    };

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/workRequests/{workRequestId}/logs",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      listWorkRequestLogsRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.ListWorkRequestLogsResponse>{},
        body: await response.json(),
        bodyKey: "items",
        bodyModel: "WorkRequestLogEntry[]",
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
   * Creates a new async iterator which will iterate over the models.WorkRequestLogEntry objects
   * contained in responses from the listWorkRequestLogs operation. This iterator will fetch more data from the
   * server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllWorkRequestLogs(
    request: requests.ListWorkRequestLogsRequest
  ): AsyncIterableIterator<models.WorkRequestLogEntry> {
    return paginateRecords(request, req => this.listWorkRequestLogs(req));
  }

  /**
   * Creates a new async iterator which will iterate over the responses received from the listWorkRequestLogs operation. This iterator
   * will fetch more data from the server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllWorkRequestLogsResponses(
    request: requests.ListWorkRequestLogsRequest
  ): AsyncIterableIterator<responses.ListWorkRequestLogsResponse> {
    return paginateResponses(request, req => this.listWorkRequestLogs(req));
  }

  /**
     * Returns a page of work requests for the specified compartment.
* <p>
If the `opc-next-page` header appears in the response, then
* there are more items to retrieve. To get the next page in the subsequent
* GET request, include the header's value as the `page` query parameter.
* 
     * @param ListWorkRequestsRequest
     * @return ListWorkRequestsResponse
     * @throws OciError when an error occurs
     */
  public async listWorkRequests(
    listWorkRequestsRequest: requests.ListWorkRequestsRequest
  ): Promise<responses.ListWorkRequestsResponse> {
    if (this.logger) this.logger.debug("Calling operation OdaClient#listWorkRequests.");
    const pathParams = {};

    const queryParams = {
      "compartmentId": listWorkRequestsRequest.compartmentId,
      "odaInstanceId": listWorkRequestsRequest.odaInstanceId,
      "page": listWorkRequestsRequest.page,
      "limit": listWorkRequestsRequest.limit,
      "sortBy": listWorkRequestsRequest.sortBy,
      "sortOrder": listWorkRequestsRequest.sortOrder
    };

    let headerParams = {
      "opc-request-id": listWorkRequestsRequest.opcRequestId
    };

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/workRequests",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      listWorkRequestsRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.ListWorkRequestsResponse>{},
        body: await response.json(),
        bodyKey: "items",
        bodyModel: "WorkRequestSummary[]",
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
   * Creates a new async iterator which will iterate over the models.WorkRequestSummary objects
   * contained in responses from the listWorkRequests operation. This iterator will fetch more data from the
   * server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllWorkRequests(
    request: requests.ListWorkRequestsRequest
  ): AsyncIterableIterator<models.WorkRequestSummary> {
    return paginateRecords(request, req => this.listWorkRequests(req));
  }

  /**
   * Creates a new async iterator which will iterate over the responses received from the listWorkRequests operation. This iterator
   * will fetch more data from the server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllWorkRequestsResponses(
    request: requests.ListWorkRequestsRequest
  ): AsyncIterableIterator<responses.ListWorkRequestsResponse> {
    return paginateResponses(request, req => this.listWorkRequests(req));
  }

  /**
   * Starts an inactive Digital Assistant instance. Once active, the instance will be accessible and metering
   * of requests will be started again.
   *
   * @param StartOdaInstanceRequest
   * @return StartOdaInstanceResponse
   * @throws OciError when an error occurs
   */
  public async startOdaInstance(
    startOdaInstanceRequest: requests.StartOdaInstanceRequest
  ): Promise<responses.StartOdaInstanceResponse> {
    if (this.logger) this.logger.debug("Calling operation OdaClient#startOdaInstance.");
    const pathParams = {
      "{odaInstanceId}": startOdaInstanceRequest.odaInstanceId
    };

    const queryParams = {};

    let headerParams = {
      "opc-request-id": startOdaInstanceRequest.opcRequestId,
      "if-match": startOdaInstanceRequest.ifMatch,
      "opc-retry-token": startOdaInstanceRequest.opcRetryToken
    };

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/odaInstances/{odaInstanceId}/actions/start",
      method: "POST",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      startOdaInstanceRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.StartOdaInstanceResponse>{},
        responseHeaders: [
          {
            value: response.headers.get("opc-work-request-id"),
            key: "opcWorkRequestId",
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
   * Stops an active Digital Assistant instance. Once inactive, the instance will not be accessible and metering
   * of requests will be stopped until the instance is started again. Data associated with the instance
   * is not affected.
   *
   * @param StopOdaInstanceRequest
   * @return StopOdaInstanceResponse
   * @throws OciError when an error occurs
   */
  public async stopOdaInstance(
    stopOdaInstanceRequest: requests.StopOdaInstanceRequest
  ): Promise<responses.StopOdaInstanceResponse> {
    if (this.logger) this.logger.debug("Calling operation OdaClient#stopOdaInstance.");
    const pathParams = {
      "{odaInstanceId}": stopOdaInstanceRequest.odaInstanceId
    };

    const queryParams = {};

    let headerParams = {
      "opc-request-id": stopOdaInstanceRequest.opcRequestId,
      "if-match": stopOdaInstanceRequest.ifMatch,
      "opc-retry-token": stopOdaInstanceRequest.opcRetryToken
    };

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/odaInstances/{odaInstanceId}/actions/stop",
      method: "POST",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      stopOdaInstanceRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.StopOdaInstanceResponse>{},
        responseHeaders: [
          {
            value: response.headers.get("opc-work-request-id"),
            key: "opcWorkRequestId",
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
   * Updates the specified Digital Assistant instance with the information in the request body.
   * @param UpdateOdaInstanceRequest
   * @return UpdateOdaInstanceResponse
   * @throws OciError when an error occurs
   */
  public async updateOdaInstance(
    updateOdaInstanceRequest: requests.UpdateOdaInstanceRequest
  ): Promise<responses.UpdateOdaInstanceResponse> {
    if (this.logger) this.logger.debug("Calling operation OdaClient#updateOdaInstance.");
    const pathParams = {
      "{odaInstanceId}": updateOdaInstanceRequest.odaInstanceId
    };

    const queryParams = {};

    let headerParams = {
      "if-match": updateOdaInstanceRequest.ifMatch,
      "opc-request-id": updateOdaInstanceRequest.opcRequestId
    };

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/odaInstances/{odaInstanceId}",
      method: "PUT",
      bodyContent: common.ObjectSerializer.serialize(
        updateOdaInstanceRequest.updateOdaInstanceDetails,
        "UpdateOdaInstanceDetails",
        models.UpdateOdaInstanceDetails.getJsonObj
      ),
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      updateOdaInstanceRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.UpdateOdaInstanceResponse>{},
        body: await response.json(),
        bodyKey: "odaInstance",
        bodyModel: "model.OdaInstance",
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
