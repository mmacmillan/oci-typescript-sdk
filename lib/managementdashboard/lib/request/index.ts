/**
 * ManagementDashboard API
 * Management Dashboard micro-service provides a set of CRUD, import, export, and compartment related APIs (such as change compartment)   to support dashboard and saved search metadata preservation.  These APIs are mainly for client UIs, for various UI activities such as get list of all saved searches in a compartment, create a dashboard, open a saved search, etc.  Use export to retrieve  dashboards and their saved searches, then edit the Json if necessary (for example change compartmentIds), then import the result to  destination dashboard service.
APIs validate all required properties to ensure properties are present and have correct type and values.
    

 * OpenAPI spec version: 20200901
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as ChangeManagementDashboardsCompartmentRequest from "./change-management-dashboards-compartment-request";
export import ChangeManagementDashboardsCompartmentRequest = ChangeManagementDashboardsCompartmentRequest.ChangeManagementDashboardsCompartmentRequest;
import * as ChangeManagementSavedSearchesCompartmentRequest from "./change-management-saved-searches-compartment-request";
export import ChangeManagementSavedSearchesCompartmentRequest = ChangeManagementSavedSearchesCompartmentRequest.ChangeManagementSavedSearchesCompartmentRequest;
import * as CreateManagementDashboardRequest from "./create-management-dashboard-request";
export import CreateManagementDashboardRequest = CreateManagementDashboardRequest.CreateManagementDashboardRequest;
import * as CreateManagementSavedSearchRequest from "./create-management-saved-search-request";
export import CreateManagementSavedSearchRequest = CreateManagementSavedSearchRequest.CreateManagementSavedSearchRequest;
import * as DeleteManagementDashboardRequest from "./delete-management-dashboard-request";
export import DeleteManagementDashboardRequest = DeleteManagementDashboardRequest.DeleteManagementDashboardRequest;
import * as DeleteManagementSavedSearchRequest from "./delete-management-saved-search-request";
export import DeleteManagementSavedSearchRequest = DeleteManagementSavedSearchRequest.DeleteManagementSavedSearchRequest;
import * as ExportDashboardRequest from "./export-dashboard-request";
export import ExportDashboardRequest = ExportDashboardRequest.ExportDashboardRequest;
import * as GetManagementDashboardRequest from "./get-management-dashboard-request";
export import GetManagementDashboardRequest = GetManagementDashboardRequest.GetManagementDashboardRequest;
import * as GetManagementSavedSearchRequest from "./get-management-saved-search-request";
export import GetManagementSavedSearchRequest = GetManagementSavedSearchRequest.GetManagementSavedSearchRequest;
import * as ImportDashboardRequest from "./import-dashboard-request";
export import ImportDashboardRequest = ImportDashboardRequest.ImportDashboardRequest;
import * as ListManagementDashboardsRequest from "./list-management-dashboards-request";
export import ListManagementDashboardsRequest = ListManagementDashboardsRequest.ListManagementDashboardsRequest;
import * as ListManagementSavedSearchesRequest from "./list-management-saved-searches-request";
export import ListManagementSavedSearchesRequest = ListManagementSavedSearchesRequest.ListManagementSavedSearchesRequest;
import * as UpdateManagementDashboardRequest from "./update-management-dashboard-request";
export import UpdateManagementDashboardRequest = UpdateManagementDashboardRequest.UpdateManagementDashboardRequest;
import * as UpdateManagementSavedSearchRequest from "./update-management-saved-search-request";
export import UpdateManagementSavedSearchRequest = UpdateManagementSavedSearchRequest.UpdateManagementSavedSearchRequest;
