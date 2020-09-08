/**
 * Management Agent API
 * API for Management Agent Cloud Service
 * OpenAPI spec version: 20200202
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as serviceRequests from "./request";
import * as serviceResponses from "./response";
import * as models from "./model";
import { ManagementAgentClient } from "./client";
import { genericWaiter, genericTerminalConditionWaiter, WaiterConfiguration } from "oci-common";

export class ManagementAgentWaiter {
  public constructor(
    private client: ManagementAgentClient,
    private readonly config?: WaiterConfiguration
  ) {}

  /**
   * Waits forManagementAgent till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetManagementAgentResponse | null (null in case of 404 response)
   */
  public async forManagementAgent(
    request: serviceRequests.GetManagementAgentRequest,
    ...targetStates: models.LifecycleStates[]
  ): Promise<serviceResponses.GetManagementAgentResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getManagementAgent(request),
      response => targetStates.exists(response.managementAgent.lifecycleState),
      targetStates.includes(models.LifecycleStates.Terminated)
    );
  }

  /**
   * Waits forManagementAgentInstallKey till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetManagementAgentInstallKeyResponse | null (null in case of 404 response)
   */
  public async forManagementAgentInstallKey(
    request: serviceRequests.GetManagementAgentInstallKeyRequest,
    ...targetStates: models.LifecycleStates[]
  ): Promise<serviceResponses.GetManagementAgentInstallKeyResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getManagementAgentInstallKey(request),
      response => targetStates.exists(response.managementAgentInstallKey.lifecycleState),
      targetStates.includes(models.LifecycleStates.Terminated)
    );
  }

  /**
   * Waits forWorkRequest
   *
   * @param request the request to send
   * @return response returns GetWorkRequestResponse
   */
  public async forWorkRequest(
    request: serviceRequests.GetWorkRequestRequest
  ): Promise<serviceResponses.GetWorkRequestResponse> {
    return genericWaiter(
      this.config,
      () => this.client.getWorkRequest(request),
      response => (response.workRequest.timeFinished ? true : false)
    );
  }
}
