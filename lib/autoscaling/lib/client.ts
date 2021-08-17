/**
 * Autoscaling API
 * APIs for dynamically scaling Compute resources to meet application requirements. For more information about
autoscaling, see [Autoscaling](/Content/Compute/Tasks/autoscalinginstancepools.htm). For information about the
Compute service, see [Overview of the Compute Service](/Content/Compute/Concepts/computeoverview.htm).

**Note:** Autoscaling is not available in US Government Cloud tenancies. For more information, see
[Oracle Cloud Infrastructure US Government Cloud](/Content/General/Concepts/govoverview.htm).

 * OpenAPI spec version: 20181001
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
import { composeResponse, composeRequest, GenericRetrier } from "oci-common";

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum AutoScalingApiKeys {}

export class AutoScalingClient {
  protected static serviceEndpointTemplate = "https://autoscaling.{region}.oci.{secondLevelDomain}";
  protected "_endpoint": string = "";
  protected "_defaultHeaders": any = {};
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
    this._endpoint = this._endpoint + "/20181001";
    if (this.logger) this.logger.info(`AutoScalingClient endpoint set to ${this._endpoint}`);
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
      AutoScalingClient.serviceEndpointTemplate,
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
      AutoScalingClient.serviceEndpointTemplate,
      regionId
    );
  }

  /**
     * Moves an autoscaling configuration into a different compartment within the same tenancy. For information
* about moving resources between compartments, see
* [Moving Resources to a Different Compartment](https://docs.cloud.oracle.com/iaas/Content/Identity/Tasks/managingcompartments.htm#moveRes).
* <p>
When you move an autoscaling configuration to a different compartment, associated resources such as instance
* pools are not moved.
* 
     * @param ChangeAutoScalingConfigurationCompartmentRequest
     * @return ChangeAutoScalingConfigurationCompartmentResponse
     * @throws OciError when an error occurs
     * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/autoscaling/ChangeAutoScalingConfigurationCompartment.ts.html |here} to see how to use ChangeAutoScalingConfigurationCompartment API.
     */
  public async changeAutoScalingConfigurationCompartment(
    changeAutoScalingConfigurationCompartmentRequest: requests.ChangeAutoScalingConfigurationCompartmentRequest
  ): Promise<responses.ChangeAutoScalingConfigurationCompartmentResponse> {
    if (this.logger)
      this.logger.debug(
        "Calling operation AutoScalingClient#changeAutoScalingConfigurationCompartment."
      );
    const pathParams = {
      "{autoScalingConfigurationId}":
        changeAutoScalingConfigurationCompartmentRequest.autoScalingConfigurationId
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": changeAutoScalingConfigurationCompartmentRequest.opcRequestId,
      "if-match": changeAutoScalingConfigurationCompartmentRequest.ifMatch,
      "opc-retry-token": changeAutoScalingConfigurationCompartmentRequest.opcRetryToken
    };

    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      changeAutoScalingConfigurationCompartmentRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/autoScalingConfigurations/{autoScalingConfigurationId}/actions/changeCompartment",
      method: "POST",
      bodyContent: common.ObjectSerializer.serialize(
        changeAutoScalingConfigurationCompartmentRequest.changeCompartmentDetails,
        "ChangeAutoScalingCompartmentDetails",
        model.ChangeAutoScalingCompartmentDetails.getJsonObj
      ),
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.ChangeAutoScalingConfigurationCompartmentResponse>{},
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
   * Creates an autoscaling configuration.
   * @param CreateAutoScalingConfigurationRequest
   * @return CreateAutoScalingConfigurationResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/autoscaling/CreateAutoScalingConfiguration.ts.html |here} to see how to use CreateAutoScalingConfiguration API.
   */
  public async createAutoScalingConfiguration(
    createAutoScalingConfigurationRequest: requests.CreateAutoScalingConfigurationRequest
  ): Promise<responses.CreateAutoScalingConfigurationResponse> {
    if (this.logger)
      this.logger.debug("Calling operation AutoScalingClient#createAutoScalingConfiguration.");
    const pathParams = {};

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": createAutoScalingConfigurationRequest.opcRequestId,
      "opc-retry-token": createAutoScalingConfigurationRequest.opcRetryToken
    };

    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      createAutoScalingConfigurationRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/autoScalingConfigurations",
      method: "POST",
      bodyContent: common.ObjectSerializer.serialize(
        createAutoScalingConfigurationRequest.createAutoScalingConfigurationDetails,
        "CreateAutoScalingConfigurationDetails",
        model.CreateAutoScalingConfigurationDetails.getJsonObj
      ),
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.CreateAutoScalingConfigurationResponse>{},
        body: await response.json(),
        bodyKey: "autoScalingConfiguration",
        bodyModel: model.AutoScalingConfiguration,
        type: "model.AutoScalingConfiguration",
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
     * Creates an autoscaling policy for the specified autoscaling configuration.
* <p>
You can create the following types of autoscaling policies:
* <p>
- **Schedule-based:** Autoscaling events take place at the specific times that you schedule.
* - **Threshold-based:** An autoscaling action is triggered when a performance metric meets or exceeds a threshold.
* <p>
An autoscaling configuration can either have multiple schedule-based autoscaling policies, or one
* threshold-based autoscaling policy.
* 
     * @param CreateAutoScalingPolicyRequest
     * @return CreateAutoScalingPolicyResponse
     * @throws OciError when an error occurs
     * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/autoscaling/CreateAutoScalingPolicy.ts.html |here} to see how to use CreateAutoScalingPolicy API.
     */
  public async createAutoScalingPolicy(
    createAutoScalingPolicyRequest: requests.CreateAutoScalingPolicyRequest
  ): Promise<responses.CreateAutoScalingPolicyResponse> {
    if (this.logger)
      this.logger.debug("Calling operation AutoScalingClient#createAutoScalingPolicy.");
    const pathParams = {
      "{autoScalingConfigurationId}": createAutoScalingPolicyRequest.autoScalingConfigurationId
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": createAutoScalingPolicyRequest.opcRequestId,
      "opc-retry-token": createAutoScalingPolicyRequest.opcRetryToken
    };

    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      createAutoScalingPolicyRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/autoScalingConfigurations/{autoScalingConfigurationId}/policies",
      method: "POST",
      bodyContent: common.ObjectSerializer.serialize(
        createAutoScalingPolicyRequest.createAutoScalingPolicyDetails,
        "CreateAutoScalingPolicyDetails",
        model.CreateAutoScalingPolicyDetails.getJsonObj
      ),
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.CreateAutoScalingPolicyResponse>{},
        body: await response.json(),
        bodyKey: "autoScalingPolicy",
        bodyModel: model.AutoScalingPolicy,
        type: "model.AutoScalingPolicy",
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
   * Deletes an autoscaling configuration.
   * @param DeleteAutoScalingConfigurationRequest
   * @return DeleteAutoScalingConfigurationResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/autoscaling/DeleteAutoScalingConfiguration.ts.html |here} to see how to use DeleteAutoScalingConfiguration API.
   */
  public async deleteAutoScalingConfiguration(
    deleteAutoScalingConfigurationRequest: requests.DeleteAutoScalingConfigurationRequest
  ): Promise<responses.DeleteAutoScalingConfigurationResponse> {
    if (this.logger)
      this.logger.debug("Calling operation AutoScalingClient#deleteAutoScalingConfiguration.");
    const pathParams = {
      "{autoScalingConfigurationId}":
        deleteAutoScalingConfigurationRequest.autoScalingConfigurationId
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "if-match": deleteAutoScalingConfigurationRequest.ifMatch,
      "opc-request-id": deleteAutoScalingConfigurationRequest.opcRequestId
    };

    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      deleteAutoScalingConfigurationRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/autoScalingConfigurations/{autoScalingConfigurationId}",
      method: "DELETE",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.DeleteAutoScalingConfigurationResponse>{},
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
   * Deletes an autoscaling policy for the specified autoscaling configuration.
   * @param DeleteAutoScalingPolicyRequest
   * @return DeleteAutoScalingPolicyResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/autoscaling/DeleteAutoScalingPolicy.ts.html |here} to see how to use DeleteAutoScalingPolicy API.
   */
  public async deleteAutoScalingPolicy(
    deleteAutoScalingPolicyRequest: requests.DeleteAutoScalingPolicyRequest
  ): Promise<responses.DeleteAutoScalingPolicyResponse> {
    if (this.logger)
      this.logger.debug("Calling operation AutoScalingClient#deleteAutoScalingPolicy.");
    const pathParams = {
      "{autoScalingConfigurationId}": deleteAutoScalingPolicyRequest.autoScalingConfigurationId,
      "{autoScalingPolicyId}": deleteAutoScalingPolicyRequest.autoScalingPolicyId
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "if-match": deleteAutoScalingPolicyRequest.ifMatch,
      "opc-request-id": deleteAutoScalingPolicyRequest.opcRequestId
    };

    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      deleteAutoScalingPolicyRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path:
        "/autoScalingConfigurations/{autoScalingConfigurationId}/policies/{autoScalingPolicyId}",
      method: "DELETE",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.DeleteAutoScalingPolicyResponse>{},
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
   * Gets information about the specified autoscaling configuration.
   * @param GetAutoScalingConfigurationRequest
   * @return GetAutoScalingConfigurationResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/autoscaling/GetAutoScalingConfiguration.ts.html |here} to see how to use GetAutoScalingConfiguration API.
   */
  public async getAutoScalingConfiguration(
    getAutoScalingConfigurationRequest: requests.GetAutoScalingConfigurationRequest
  ): Promise<responses.GetAutoScalingConfigurationResponse> {
    if (this.logger)
      this.logger.debug("Calling operation AutoScalingClient#getAutoScalingConfiguration.");
    const pathParams = {
      "{autoScalingConfigurationId}": getAutoScalingConfigurationRequest.autoScalingConfigurationId
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": getAutoScalingConfigurationRequest.opcRequestId
    };

    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      getAutoScalingConfigurationRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/autoScalingConfigurations/{autoScalingConfigurationId}",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.GetAutoScalingConfigurationResponse>{},
        body: await response.json(),
        bodyKey: "autoScalingConfiguration",
        bodyModel: model.AutoScalingConfiguration,
        type: "model.AutoScalingConfiguration",
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
   * Gets information about the specified autoscaling policy in the specified autoscaling configuration.
   * @param GetAutoScalingPolicyRequest
   * @return GetAutoScalingPolicyResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/autoscaling/GetAutoScalingPolicy.ts.html |here} to see how to use GetAutoScalingPolicy API.
   */
  public async getAutoScalingPolicy(
    getAutoScalingPolicyRequest: requests.GetAutoScalingPolicyRequest
  ): Promise<responses.GetAutoScalingPolicyResponse> {
    if (this.logger) this.logger.debug("Calling operation AutoScalingClient#getAutoScalingPolicy.");
    const pathParams = {
      "{autoScalingConfigurationId}": getAutoScalingPolicyRequest.autoScalingConfigurationId,
      "{autoScalingPolicyId}": getAutoScalingPolicyRequest.autoScalingPolicyId
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": getAutoScalingPolicyRequest.opcRequestId
    };

    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      getAutoScalingPolicyRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path:
        "/autoScalingConfigurations/{autoScalingConfigurationId}/policies/{autoScalingPolicyId}",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.GetAutoScalingPolicyResponse>{},
        body: await response.json(),
        bodyKey: "autoScalingPolicy",
        bodyModel: model.AutoScalingPolicy,
        type: "model.AutoScalingPolicy",
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
   * Lists autoscaling configurations in the specifed compartment.
   *
   * @param ListAutoScalingConfigurationsRequest
   * @return ListAutoScalingConfigurationsResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/autoscaling/ListAutoScalingConfigurations.ts.html |here} to see how to use ListAutoScalingConfigurations API.
   */
  public async listAutoScalingConfigurations(
    listAutoScalingConfigurationsRequest: requests.ListAutoScalingConfigurationsRequest
  ): Promise<responses.ListAutoScalingConfigurationsResponse> {
    if (this.logger)
      this.logger.debug("Calling operation AutoScalingClient#listAutoScalingConfigurations.");
    const pathParams = {};

    const queryParams = {
      "compartmentId": listAutoScalingConfigurationsRequest.compartmentId,
      "displayName": listAutoScalingConfigurationsRequest.displayName,
      "limit": listAutoScalingConfigurationsRequest.limit,
      "page": listAutoScalingConfigurationsRequest.page,
      "sortBy": listAutoScalingConfigurationsRequest.sortBy,
      "sortOrder": listAutoScalingConfigurationsRequest.sortOrder
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": listAutoScalingConfigurationsRequest.opcRequestId
    };

    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      listAutoScalingConfigurationsRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/autoScalingConfigurations",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.ListAutoScalingConfigurationsResponse>{},
        body: await response.json(),
        bodyKey: "items",
        bodyModel: model.AutoScalingConfigurationSummary,
        type: "Array<model.AutoScalingConfigurationSummary>",
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
   * Creates a new async iterator which will iterate over the models.AutoScalingConfigurationSummary objects
   * contained in responses from the listAutoScalingConfigurations operation. This iterator will fetch more data from the
   * server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllAutoScalingConfigurations(
    request: requests.ListAutoScalingConfigurationsRequest
  ): AsyncIterableIterator<model.AutoScalingConfigurationSummary> {
    return paginateRecords(request, req => this.listAutoScalingConfigurations(req));
  }

  /**
   * Creates a new async iterator which will iterate over the responses received from the listAutoScalingConfigurations operation. This iterator
   * will fetch more data from the server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllAutoScalingConfigurationsResponses(
    request: requests.ListAutoScalingConfigurationsRequest
  ): AsyncIterableIterator<responses.ListAutoScalingConfigurationsResponse> {
    return paginateResponses(request, req => this.listAutoScalingConfigurations(req));
  }

  /**
   * Lists the autoscaling policies in the specified autoscaling configuration.
   *
   * @param ListAutoScalingPoliciesRequest
   * @return ListAutoScalingPoliciesResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/autoscaling/ListAutoScalingPolicies.ts.html |here} to see how to use ListAutoScalingPolicies API.
   */
  public async listAutoScalingPolicies(
    listAutoScalingPoliciesRequest: requests.ListAutoScalingPoliciesRequest
  ): Promise<responses.ListAutoScalingPoliciesResponse> {
    if (this.logger)
      this.logger.debug("Calling operation AutoScalingClient#listAutoScalingPolicies.");
    const pathParams = {
      "{autoScalingConfigurationId}": listAutoScalingPoliciesRequest.autoScalingConfigurationId
    };

    const queryParams = {
      "displayName": listAutoScalingPoliciesRequest.displayName,
      "limit": listAutoScalingPoliciesRequest.limit,
      "page": listAutoScalingPoliciesRequest.page,
      "sortBy": listAutoScalingPoliciesRequest.sortBy,
      "sortOrder": listAutoScalingPoliciesRequest.sortOrder
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": listAutoScalingPoliciesRequest.opcRequestId
    };

    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      listAutoScalingPoliciesRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/autoScalingConfigurations/{autoScalingConfigurationId}/policies",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.ListAutoScalingPoliciesResponse>{},
        body: await response.json(),
        bodyKey: "items",
        bodyModel: model.AutoScalingPolicySummary,
        type: "Array<model.AutoScalingPolicySummary>",
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
   * Creates a new async iterator which will iterate over the models.AutoScalingPolicySummary objects
   * contained in responses from the listAutoScalingPolicies operation. This iterator will fetch more data from the
   * server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllAutoScalingPolicies(
    request: requests.ListAutoScalingPoliciesRequest
  ): AsyncIterableIterator<model.AutoScalingPolicySummary> {
    return paginateRecords(request, req => this.listAutoScalingPolicies(req));
  }

  /**
   * Creates a new async iterator which will iterate over the responses received from the listAutoScalingPolicies operation. This iterator
   * will fetch more data from the server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllAutoScalingPoliciesResponses(
    request: requests.ListAutoScalingPoliciesRequest
  ): AsyncIterableIterator<responses.ListAutoScalingPoliciesResponse> {
    return paginateResponses(request, req => this.listAutoScalingPolicies(req));
  }

  /**
   * Updates certain fields on the specified autoscaling configuration, such as the name, the cooldown period,
   * and whether the autoscaling configuration is enabled.
   *
   * @param UpdateAutoScalingConfigurationRequest
   * @return UpdateAutoScalingConfigurationResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/autoscaling/UpdateAutoScalingConfiguration.ts.html |here} to see how to use UpdateAutoScalingConfiguration API.
   */
  public async updateAutoScalingConfiguration(
    updateAutoScalingConfigurationRequest: requests.UpdateAutoScalingConfigurationRequest
  ): Promise<responses.UpdateAutoScalingConfigurationResponse> {
    if (this.logger)
      this.logger.debug("Calling operation AutoScalingClient#updateAutoScalingConfiguration.");
    const pathParams = {
      "{autoScalingConfigurationId}":
        updateAutoScalingConfigurationRequest.autoScalingConfigurationId
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "if-match": updateAutoScalingConfigurationRequest.ifMatch,
      "opc-request-id": updateAutoScalingConfigurationRequest.opcRequestId,
      "opc-retry-token": updateAutoScalingConfigurationRequest.opcRetryToken
    };

    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      updateAutoScalingConfigurationRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/autoScalingConfigurations/{autoScalingConfigurationId}",
      method: "PUT",
      bodyContent: common.ObjectSerializer.serialize(
        updateAutoScalingConfigurationRequest.updateAutoScalingConfigurationDetails,
        "UpdateAutoScalingConfigurationDetails",
        model.UpdateAutoScalingConfigurationDetails.getJsonObj
      ),
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.UpdateAutoScalingConfigurationResponse>{},
        body: await response.json(),
        bodyKey: "autoScalingConfiguration",
        bodyModel: model.AutoScalingConfiguration,
        type: "model.AutoScalingConfiguration",
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
   * Updates an autoscaling policy in the specified autoscaling configuration.
   * @param UpdateAutoScalingPolicyRequest
   * @return UpdateAutoScalingPolicyResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/autoscaling/UpdateAutoScalingPolicy.ts.html |here} to see how to use UpdateAutoScalingPolicy API.
   */
  public async updateAutoScalingPolicy(
    updateAutoScalingPolicyRequest: requests.UpdateAutoScalingPolicyRequest
  ): Promise<responses.UpdateAutoScalingPolicyResponse> {
    if (this.logger)
      this.logger.debug("Calling operation AutoScalingClient#updateAutoScalingPolicy.");
    const pathParams = {
      "{autoScalingConfigurationId}": updateAutoScalingPolicyRequest.autoScalingConfigurationId,
      "{autoScalingPolicyId}": updateAutoScalingPolicyRequest.autoScalingPolicyId
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "if-match": updateAutoScalingPolicyRequest.ifMatch,
      "opc-request-id": updateAutoScalingPolicyRequest.opcRequestId,
      "opc-retry-token": updateAutoScalingPolicyRequest.opcRetryToken
    };

    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      updateAutoScalingPolicyRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path:
        "/autoScalingConfigurations/{autoScalingConfigurationId}/policies/{autoScalingPolicyId}",
      method: "PUT",
      bodyContent: common.ObjectSerializer.serialize(
        updateAutoScalingPolicyRequest.updateAutoScalingPolicyDetails,
        "UpdateAutoScalingPolicyDetails",
        model.UpdateAutoScalingPolicyDetails.getJsonObj
      ),
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.UpdateAutoScalingPolicyResponse>{},
        body: await response.json(),
        bodyKey: "autoScalingPolicy",
        bodyModel: model.AutoScalingPolicy,
        type: "model.AutoScalingPolicy",
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
