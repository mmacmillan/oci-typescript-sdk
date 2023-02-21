/**
 * Database Management API
 * Use the Database Management API to perform tasks such as obtaining performance and resource usage metrics
for a fleet of Managed Databases or a specific Managed Database, creating Managed Database Groups, and
running a SQL job on a Managed Database or Managed Database Group.

 * OpenAPI spec version: 20201101
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as serviceRequests from "./request";
import * as serviceResponses from "./response";
import * as models from "./model";
import { DbManagementClient } from "./client";
import { genericWaiter, genericTerminalConditionWaiter, WaiterConfiguration } from "oci-common";

export class DbManagementWaiter {
  public constructor(
    private client: DbManagementClient,
    private readonly config?: WaiterConfiguration
  ) {}

  /**
   * Waits forDbManagementPrivateEndpoint till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetDbManagementPrivateEndpointResponse | null (null in case of 404 response)
   */
  public async forDbManagementPrivateEndpoint(
    request: serviceRequests.GetDbManagementPrivateEndpointRequest,
    ...targetStates: models.LifecycleStates[]
  ): Promise<serviceResponses.GetDbManagementPrivateEndpointResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getDbManagementPrivateEndpoint(request),
      response => targetStates.includes(response.dbManagementPrivateEndpoint.lifecycleState!),
      targetStates.includes(models.LifecycleStates.Deleted)
    );
  }

  /**
   * Waits forExternalAsm till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetExternalAsmResponse | null (null in case of 404 response)
   */
  public async forExternalAsm(
    request: serviceRequests.GetExternalAsmRequest,
    ...targetStates: models.ExternalAsm.LifecycleState[]
  ): Promise<serviceResponses.GetExternalAsmResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getExternalAsm(request),
      response => targetStates.includes(response.externalAsm.lifecycleState!),
      targetStates.includes(models.ExternalAsm.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forExternalAsmInstance till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetExternalAsmInstanceResponse | null (null in case of 404 response)
   */
  public async forExternalAsmInstance(
    request: serviceRequests.GetExternalAsmInstanceRequest,
    ...targetStates: models.ExternalAsmInstance.LifecycleState[]
  ): Promise<serviceResponses.GetExternalAsmInstanceResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getExternalAsmInstance(request),
      response => targetStates.includes(response.externalAsmInstance.lifecycleState!),
      targetStates.includes(models.ExternalAsmInstance.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forExternalCluster till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetExternalClusterResponse | null (null in case of 404 response)
   */
  public async forExternalCluster(
    request: serviceRequests.GetExternalClusterRequest,
    ...targetStates: models.ExternalCluster.LifecycleState[]
  ): Promise<serviceResponses.GetExternalClusterResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getExternalCluster(request),
      response => targetStates.includes(response.externalCluster.lifecycleState!),
      targetStates.includes(models.ExternalCluster.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forExternalClusterInstance till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetExternalClusterInstanceResponse | null (null in case of 404 response)
   */
  public async forExternalClusterInstance(
    request: serviceRequests.GetExternalClusterInstanceRequest,
    ...targetStates: models.ExternalClusterInstance.LifecycleState[]
  ): Promise<serviceResponses.GetExternalClusterInstanceResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getExternalClusterInstance(request),
      response => targetStates.includes(response.externalClusterInstance.lifecycleState!),
      targetStates.includes(models.ExternalClusterInstance.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forExternalDbHome till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetExternalDbHomeResponse | null (null in case of 404 response)
   */
  public async forExternalDbHome(
    request: serviceRequests.GetExternalDbHomeRequest,
    ...targetStates: models.ExternalDbHome.LifecycleState[]
  ): Promise<serviceResponses.GetExternalDbHomeResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getExternalDbHome(request),
      response => targetStates.includes(response.externalDbHome.lifecycleState!),
      targetStates.includes(models.ExternalDbHome.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forExternalDbNode till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetExternalDbNodeResponse | null (null in case of 404 response)
   */
  public async forExternalDbNode(
    request: serviceRequests.GetExternalDbNodeRequest,
    ...targetStates: models.ExternalDbNode.LifecycleState[]
  ): Promise<serviceResponses.GetExternalDbNodeResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getExternalDbNode(request),
      response => targetStates.includes(response.externalDbNode.lifecycleState!),
      targetStates.includes(models.ExternalDbNode.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forExternalDbSystem till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetExternalDbSystemResponse | null (null in case of 404 response)
   */
  public async forExternalDbSystem(
    request: serviceRequests.GetExternalDbSystemRequest,
    ...targetStates: models.ExternalDbSystem.LifecycleState[]
  ): Promise<serviceResponses.GetExternalDbSystemResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getExternalDbSystem(request),
      response => targetStates.includes(response.externalDbSystem.lifecycleState!),
      targetStates.includes(models.ExternalDbSystem.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forExternalDbSystemConnector till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetExternalDbSystemConnectorResponse | null (null in case of 404 response)
   */
  public async forExternalDbSystemConnector(
    request: serviceRequests.GetExternalDbSystemConnectorRequest,
    ...targetStates: models.ExternalDbSystemConnector.LifecycleState[]
  ): Promise<serviceResponses.GetExternalDbSystemConnectorResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getExternalDbSystemConnector(request),
      response => targetStates.includes(response.externalDbSystemConnector.lifecycleState!),
      targetStates.includes(models.ExternalDbSystemConnector.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forExternalDbSystemDiscovery till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetExternalDbSystemDiscoveryResponse | null (null in case of 404 response)
   */
  public async forExternalDbSystemDiscovery(
    request: serviceRequests.GetExternalDbSystemDiscoveryRequest,
    ...targetStates: models.ExternalDbSystemDiscovery.LifecycleState[]
  ): Promise<serviceResponses.GetExternalDbSystemDiscoveryResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getExternalDbSystemDiscovery(request),
      response => targetStates.includes(response.externalDbSystemDiscovery.lifecycleState!),
      targetStates.includes(models.ExternalDbSystemDiscovery.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forExternalListener till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetExternalListenerResponse | null (null in case of 404 response)
   */
  public async forExternalListener(
    request: serviceRequests.GetExternalListenerRequest,
    ...targetStates: models.ExternalListener.LifecycleState[]
  ): Promise<serviceResponses.GetExternalListenerResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getExternalListener(request),
      response => targetStates.includes(response.externalListener.lifecycleState!),
      targetStates.includes(models.ExternalListener.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forJob till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetJobResponse
   */
  public async forJob(
    request: serviceRequests.GetJobRequest,
    ...targetStates: models.Job.LifecycleState[]
  ): Promise<serviceResponses.GetJobResponse> {
    return genericWaiter(
      this.config,
      () => this.client.getJob(request),
      response => targetStates.includes(response.job.lifecycleState!)
    );
  }

  /**
   * Waits forManagedDatabaseGroup till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetManagedDatabaseGroupResponse | null (null in case of 404 response)
   */
  public async forManagedDatabaseGroup(
    request: serviceRequests.GetManagedDatabaseGroupRequest,
    ...targetStates: models.LifecycleStates[]
  ): Promise<serviceResponses.GetManagedDatabaseGroupResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getManagedDatabaseGroup(request),
      response => targetStates.includes(response.managedDatabaseGroup.lifecycleState!),
      targetStates.includes(models.LifecycleStates.Deleted)
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
