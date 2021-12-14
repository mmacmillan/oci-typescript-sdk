/**
 * Oracle Cloud VMware Solution API
 * Use the Oracle Cloud VMware API to create SDDCs and manage ESXi hosts and software. 
For more information, see [Oracle Cloud VMware Solution](/iaas/Content/VMware/Concepts/ocvsoverview.htm).

 * OpenAPI spec version: 20200501
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as ActionTypes from "./action-types";
export import ActionTypes = ActionTypes.ActionTypes;
import * as ChangeSddcCompartmentDetails from "./change-sddc-compartment-details";
export import ChangeSddcCompartmentDetails = ChangeSddcCompartmentDetails.ChangeSddcCompartmentDetails;
import * as CreateEsxiHostDetails from "./create-esxi-host-details";
export import CreateEsxiHostDetails = CreateEsxiHostDetails.CreateEsxiHostDetails;
import * as CreateSddcDetails from "./create-sddc-details";
export import CreateSddcDetails = CreateSddcDetails.CreateSddcDetails;
import * as DowngradeHcxDetails from "./downgrade-hcx-details";
export import DowngradeHcxDetails = DowngradeHcxDetails.DowngradeHcxDetails;
import * as EsxiHost from "./esxi-host";
export import EsxiHost = EsxiHost.EsxiHost;
import * as EsxiHostCollection from "./esxi-host-collection";
export import EsxiHostCollection = EsxiHostCollection.EsxiHostCollection;
import * as EsxiHostSummary from "./esxi-host-summary";
export import EsxiHostSummary = EsxiHostSummary.EsxiHostSummary;
import * as HcxLicenseStatus from "./hcx-license-status";
export import HcxLicenseStatus = HcxLicenseStatus.HcxLicenseStatus;
import * as HcxLicenseSummary from "./hcx-license-summary";
export import HcxLicenseSummary = HcxLicenseSummary.HcxLicenseSummary;
import * as LifecycleStates from "./lifecycle-states";
export import LifecycleStates = LifecycleStates.LifecycleStates;
import * as OperationStatus from "./operation-status";
export import OperationStatus = OperationStatus.OperationStatus;
import * as OperationTypes from "./operation-types";
export import OperationTypes = OperationTypes.OperationTypes;
import * as Sddc from "./sddc";
export import Sddc = Sddc.Sddc;
import * as SddcCollection from "./sddc-collection";
export import SddcCollection = SddcCollection.SddcCollection;
import * as SddcSummary from "./sddc-summary";
export import SddcSummary = SddcSummary.SddcSummary;
import * as Sku from "./sku";
export import Sku = Sku.Sku;
import * as SortOrders from "./sort-orders";
export import SortOrders = SortOrders.SortOrders;
import * as SupportedSkuSummary from "./supported-sku-summary";
export import SupportedSkuSummary = SupportedSkuSummary.SupportedSkuSummary;
import * as SupportedSkuSummaryCollection from "./supported-sku-summary-collection";
export import SupportedSkuSummaryCollection = SupportedSkuSummaryCollection.SupportedSkuSummaryCollection;
import * as SupportedVmwareSoftwareVersionCollection from "./supported-vmware-software-version-collection";
export import SupportedVmwareSoftwareVersionCollection = SupportedVmwareSoftwareVersionCollection.SupportedVmwareSoftwareVersionCollection;
import * as SupportedVmwareSoftwareVersionSummary from "./supported-vmware-software-version-summary";
export import SupportedVmwareSoftwareVersionSummary = SupportedVmwareSoftwareVersionSummary.SupportedVmwareSoftwareVersionSummary;
import * as UpdateEsxiHostDetails from "./update-esxi-host-details";
export import UpdateEsxiHostDetails = UpdateEsxiHostDetails.UpdateEsxiHostDetails;
import * as UpdateSddcDetails from "./update-sddc-details";
export import UpdateSddcDetails = UpdateSddcDetails.UpdateSddcDetails;
import * as WorkRequest from "./work-request";
export import WorkRequest = WorkRequest.WorkRequest;
import * as WorkRequestCollection from "./work-request-collection";
export import WorkRequestCollection = WorkRequestCollection.WorkRequestCollection;
import * as WorkRequestError from "./work-request-error";
export import WorkRequestError = WorkRequestError.WorkRequestError;
import * as WorkRequestErrorCollection from "./work-request-error-collection";
export import WorkRequestErrorCollection = WorkRequestErrorCollection.WorkRequestErrorCollection;
import * as WorkRequestLogEntry from "./work-request-log-entry";
export import WorkRequestLogEntry = WorkRequestLogEntry.WorkRequestLogEntry;
import * as WorkRequestLogEntryCollection from "./work-request-log-entry-collection";
export import WorkRequestLogEntryCollection = WorkRequestLogEntryCollection.WorkRequestLogEntryCollection;
import * as WorkRequestResource from "./work-request-resource";
export import WorkRequestResource = WorkRequestResource.WorkRequestResource;
