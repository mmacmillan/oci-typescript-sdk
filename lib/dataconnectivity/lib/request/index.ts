/**
 * Data Connectivity Management API
 * Use the DCMS APIs to perform Metadata/Data operations.
 * OpenAPI spec version: 20210217
 * Contact: di_dcms_dev_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as ChangeEndpointCompartmentRequest from "./change-endpoint-compartment-request";
export import ChangeEndpointCompartmentRequest = ChangeEndpointCompartmentRequest.ChangeEndpointCompartmentRequest;
import * as ChangeRegistryCompartmentRequest from "./change-registry-compartment-request";
export import ChangeRegistryCompartmentRequest = ChangeRegistryCompartmentRequest.ChangeRegistryCompartmentRequest;
import * as CreateAttachDataAssetRequest from "./create-attach-data-asset-request";
export import CreateAttachDataAssetRequest = CreateAttachDataAssetRequest.CreateAttachDataAssetRequest;
import * as CreateConnectionRequest from "./create-connection-request";
export import CreateConnectionRequest = CreateConnectionRequest.CreateConnectionRequest;
import * as CreateConnectionValidationRequest from "./create-connection-validation-request";
export import CreateConnectionValidationRequest = CreateConnectionValidationRequest.CreateConnectionValidationRequest;
import * as CreateConnectivityValidationRequest from "./create-connectivity-validation-request";
export import CreateConnectivityValidationRequest = CreateConnectivityValidationRequest.CreateConnectivityValidationRequest;
import * as CreateDataAssetRequest from "./create-data-asset-request";
export import CreateDataAssetRequest = CreateDataAssetRequest.CreateDataAssetRequest;
import * as CreateDataPreviewRequest from "./create-data-preview-request";
export import CreateDataPreviewRequest = CreateDataPreviewRequest.CreateDataPreviewRequest;
import * as CreateDataProfileRequest from "./create-data-profile-request";
export import CreateDataProfileRequest = CreateDataProfileRequest.CreateDataProfileRequest;
import * as CreateDeReferenceArtifactRequest from "./create-de-reference-artifact-request";
export import CreateDeReferenceArtifactRequest = CreateDeReferenceArtifactRequest.CreateDeReferenceArtifactRequest;
import * as CreateDetachDataAssetRequest from "./create-detach-data-asset-request";
export import CreateDetachDataAssetRequest = CreateDetachDataAssetRequest.CreateDetachDataAssetRequest;
import * as CreateEndpointRequest from "./create-endpoint-request";
export import CreateEndpointRequest = CreateEndpointRequest.CreateEndpointRequest;
import * as CreateEntityShapeRequest from "./create-entity-shape-request";
export import CreateEntityShapeRequest = CreateEntityShapeRequest.CreateEntityShapeRequest;
import * as CreateExecuteOperationJobRequest from "./create-execute-operation-job-request";
export import CreateExecuteOperationJobRequest = CreateExecuteOperationJobRequest.CreateExecuteOperationJobRequest;
import * as CreateFolderRequest from "./create-folder-request";
export import CreateFolderRequest = CreateFolderRequest.CreateFolderRequest;
import * as CreateFullPushDownTaskRequest from "./create-full-push-down-task-request";
export import CreateFullPushDownTaskRequest = CreateFullPushDownTaskRequest.CreateFullPushDownTaskRequest;
import * as CreateReferenceArtifactRequest from "./create-reference-artifact-request";
export import CreateReferenceArtifactRequest = CreateReferenceArtifactRequest.CreateReferenceArtifactRequest;
import * as CreateRegistryRequest from "./create-registry-request";
export import CreateRegistryRequest = CreateRegistryRequest.CreateRegistryRequest;
import * as CreateTestNetworkConnectivityRequest from "./create-test-network-connectivity-request";
export import CreateTestNetworkConnectivityRequest = CreateTestNetworkConnectivityRequest.CreateTestNetworkConnectivityRequest;
import * as DeleteConnectionRequest from "./delete-connection-request";
export import DeleteConnectionRequest = DeleteConnectionRequest.DeleteConnectionRequest;
import * as DeleteConnectionValidationRequest from "./delete-connection-validation-request";
export import DeleteConnectionValidationRequest = DeleteConnectionValidationRequest.DeleteConnectionValidationRequest;
import * as DeleteDataAssetRequest from "./delete-data-asset-request";
export import DeleteDataAssetRequest = DeleteDataAssetRequest.DeleteDataAssetRequest;
import * as DeleteEndpointRequest from "./delete-endpoint-request";
export import DeleteEndpointRequest = DeleteEndpointRequest.DeleteEndpointRequest;
import * as DeleteFolderRequest from "./delete-folder-request";
export import DeleteFolderRequest = DeleteFolderRequest.DeleteFolderRequest;
import * as DeleteNetworkConnectivityStatusRequest from "./delete-network-connectivity-status-request";
export import DeleteNetworkConnectivityStatusRequest = DeleteNetworkConnectivityStatusRequest.DeleteNetworkConnectivityStatusRequest;
import * as DeleteRegistryRequest from "./delete-registry-request";
export import DeleteRegistryRequest = DeleteRegistryRequest.DeleteRegistryRequest;
import * as GetConnectionRequest from "./get-connection-request";
export import GetConnectionRequest = GetConnectionRequest.GetConnectionRequest;
import * as GetConnectionValidationRequest from "./get-connection-validation-request";
export import GetConnectionValidationRequest = GetConnectionValidationRequest.GetConnectionValidationRequest;
import * as GetDataAssetRequest from "./get-data-asset-request";
export import GetDataAssetRequest = GetDataAssetRequest.GetDataAssetRequest;
import * as GetDataEntityRequest from "./get-data-entity-request";
export import GetDataEntityRequest = GetDataEntityRequest.GetDataEntityRequest;
import * as GetEndpointRequest from "./get-endpoint-request";
export import GetEndpointRequest = GetEndpointRequest.GetEndpointRequest;
import * as GetExecuteOperationJobRequest from "./get-execute-operation-job-request";
export import GetExecuteOperationJobRequest = GetExecuteOperationJobRequest.GetExecuteOperationJobRequest;
import * as GetFolderRequest from "./get-folder-request";
export import GetFolderRequest = GetFolderRequest.GetFolderRequest;
import * as GetNetworkConnectivityStatusRequest from "./get-network-connectivity-status-request";
export import GetNetworkConnectivityStatusRequest = GetNetworkConnectivityStatusRequest.GetNetworkConnectivityStatusRequest;
import * as GetOperationRequest from "./get-operation-request";
export import GetOperationRequest = GetOperationRequest.GetOperationRequest;
import * as GetRegistryRequest from "./get-registry-request";
export import GetRegistryRequest = GetRegistryRequest.GetRegistryRequest;
import * as GetSchemaRequest from "./get-schema-request";
export import GetSchemaRequest = GetSchemaRequest.GetSchemaRequest;
import * as GetTypeRequest from "./get-type-request";
export import GetTypeRequest = GetTypeRequest.GetTypeRequest;
import * as GetWorkRequestRequest from "./get-work-request-request";
export import GetWorkRequestRequest = GetWorkRequestRequest.GetWorkRequestRequest;
import * as ListConnectionValidationsRequest from "./list-connection-validations-request";
export import ListConnectionValidationsRequest = ListConnectionValidationsRequest.ListConnectionValidationsRequest;
import * as ListConnectionsRequest from "./list-connections-request";
export import ListConnectionsRequest = ListConnectionsRequest.ListConnectionsRequest;
import * as ListDataAssetsRequest from "./list-data-assets-request";
export import ListDataAssetsRequest = ListDataAssetsRequest.ListDataAssetsRequest;
import * as ListDataEntitiesRequest from "./list-data-entities-request";
export import ListDataEntitiesRequest = ListDataEntitiesRequest.ListDataEntitiesRequest;
import * as ListEndpointsRequest from "./list-endpoints-request";
export import ListEndpointsRequest = ListEndpointsRequest.ListEndpointsRequest;
import * as ListFoldersRequest from "./list-folders-request";
export import ListFoldersRequest = ListFoldersRequest.ListFoldersRequest;
import * as ListOperationsRequest from "./list-operations-request";
export import ListOperationsRequest = ListOperationsRequest.ListOperationsRequest;
import * as ListReferenceArtifactsRequest from "./list-reference-artifacts-request";
export import ListReferenceArtifactsRequest = ListReferenceArtifactsRequest.ListReferenceArtifactsRequest;
import * as ListRegistriesRequest from "./list-registries-request";
export import ListRegistriesRequest = ListRegistriesRequest.ListRegistriesRequest;
import * as ListSchemasRequest from "./list-schemas-request";
export import ListSchemasRequest = ListSchemasRequest.ListSchemasRequest;
import * as ListTypesRequest from "./list-types-request";
export import ListTypesRequest = ListTypesRequest.ListTypesRequest;
import * as ListWorkRequestErrorsRequest from "./list-work-request-errors-request";
export import ListWorkRequestErrorsRequest = ListWorkRequestErrorsRequest.ListWorkRequestErrorsRequest;
import * as ListWorkRequestLogsRequest from "./list-work-request-logs-request";
export import ListWorkRequestLogsRequest = ListWorkRequestLogsRequest.ListWorkRequestLogsRequest;
import * as ListWorkRequestsRequest from "./list-work-requests-request";
export import ListWorkRequestsRequest = ListWorkRequestsRequest.ListWorkRequestsRequest;
import * as UpdateConnectionRequest from "./update-connection-request";
export import UpdateConnectionRequest = UpdateConnectionRequest.UpdateConnectionRequest;
import * as UpdateDataAssetRequest from "./update-data-asset-request";
export import UpdateDataAssetRequest = UpdateDataAssetRequest.UpdateDataAssetRequest;
import * as UpdateEndpointRequest from "./update-endpoint-request";
export import UpdateEndpointRequest = UpdateEndpointRequest.UpdateEndpointRequest;
import * as UpdateFolderRequest from "./update-folder-request";
export import UpdateFolderRequest = UpdateFolderRequest.UpdateFolderRequest;
import * as UpdateRegistryRequest from "./update-registry-request";
export import UpdateRegistryRequest = UpdateRegistryRequest.UpdateRegistryRequest;
import * as ValidateDataAssetNetworkReachablityRequest from "./validate-data-asset-network-reachablity-request";
export import ValidateDataAssetNetworkReachablityRequest = ValidateDataAssetNetworkReachablityRequest.ValidateDataAssetNetworkReachablityRequest;
import * as GetNetworkConnectivityStatusCollectionRequest from "./get-network-connectivity-status-collection-request";
export import GetNetworkConnectivityStatusCollectionRequest = GetNetworkConnectivityStatusCollectionRequest.GetNetworkConnectivityStatusCollectionRequest;
