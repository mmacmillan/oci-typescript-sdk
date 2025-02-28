/**
 * OS Management Hub API
 * Use the OS Management Hub API to manage and monitor updates and patches for the operating system environments in your private data centers through a single management console. For more information, see [Overview of OS Management Hub](https://docs.cloud.oracle.com/iaas/osmh/doc/overview.htm).

 * OpenAPI spec version: 20220901
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as AttachManagedInstancesToLifecycleStageResponse from "./attach-managed-instances-to-lifecycle-stage-response";
export import AttachManagedInstancesToLifecycleStageResponse = AttachManagedInstancesToLifecycleStageResponse.AttachManagedInstancesToLifecycleStageResponse;
import * as CreateLifecycleEnvironmentResponse from "./create-lifecycle-environment-response";
export import CreateLifecycleEnvironmentResponse = CreateLifecycleEnvironmentResponse.CreateLifecycleEnvironmentResponse;
import * as DeleteLifecycleEnvironmentResponse from "./delete-lifecycle-environment-response";
export import DeleteLifecycleEnvironmentResponse = DeleteLifecycleEnvironmentResponse.DeleteLifecycleEnvironmentResponse;
import * as DetachManagedInstancesFromLifecycleStageResponse from "./detach-managed-instances-from-lifecycle-stage-response";
export import DetachManagedInstancesFromLifecycleStageResponse = DetachManagedInstancesFromLifecycleStageResponse.DetachManagedInstancesFromLifecycleStageResponse;
import * as GetLifecycleEnvironmentResponse from "./get-lifecycle-environment-response";
export import GetLifecycleEnvironmentResponse = GetLifecycleEnvironmentResponse.GetLifecycleEnvironmentResponse;
import * as GetLifecycleStageResponse from "./get-lifecycle-stage-response";
export import GetLifecycleStageResponse = GetLifecycleStageResponse.GetLifecycleStageResponse;
import * as ListLifecycleEnvironmentsResponse from "./list-lifecycle-environments-response";
export import ListLifecycleEnvironmentsResponse = ListLifecycleEnvironmentsResponse.ListLifecycleEnvironmentsResponse;
import * as ListLifecycleStageInstalledPackagesResponse from "./list-lifecycle-stage-installed-packages-response";
export import ListLifecycleStageInstalledPackagesResponse = ListLifecycleStageInstalledPackagesResponse.ListLifecycleStageInstalledPackagesResponse;
import * as ListLifecycleStagesResponse from "./list-lifecycle-stages-response";
export import ListLifecycleStagesResponse = ListLifecycleStagesResponse.ListLifecycleStagesResponse;
import * as PromoteSoftwareSourceToLifecycleStageResponse from "./promote-software-source-to-lifecycle-stage-response";
export import PromoteSoftwareSourceToLifecycleStageResponse = PromoteSoftwareSourceToLifecycleStageResponse.PromoteSoftwareSourceToLifecycleStageResponse;
import * as UpdateLifecycleEnvironmentResponse from "./update-lifecycle-environment-response";
export import UpdateLifecycleEnvironmentResponse = UpdateLifecycleEnvironmentResponse.UpdateLifecycleEnvironmentResponse;
import * as AttachSoftwareSourcesToManagedInstanceResponse from "./attach-software-sources-to-managed-instance-response";
export import AttachSoftwareSourcesToManagedInstanceResponse = AttachSoftwareSourcesToManagedInstanceResponse.AttachSoftwareSourcesToManagedInstanceResponse;
import * as DetachSoftwareSourcesFromManagedInstanceResponse from "./detach-software-sources-from-managed-instance-response";
export import DetachSoftwareSourcesFromManagedInstanceResponse = DetachSoftwareSourcesFromManagedInstanceResponse.DetachSoftwareSourcesFromManagedInstanceResponse;
import * as DisableModuleStreamOnManagedInstanceResponse from "./disable-module-stream-on-managed-instance-response";
export import DisableModuleStreamOnManagedInstanceResponse = DisableModuleStreamOnManagedInstanceResponse.DisableModuleStreamOnManagedInstanceResponse;
import * as EnableModuleStreamOnManagedInstanceResponse from "./enable-module-stream-on-managed-instance-response";
export import EnableModuleStreamOnManagedInstanceResponse = EnableModuleStreamOnManagedInstanceResponse.EnableModuleStreamOnManagedInstanceResponse;
import * as GetManagedInstanceResponse from "./get-managed-instance-response";
export import GetManagedInstanceResponse = GetManagedInstanceResponse.GetManagedInstanceResponse;
import * as InstallModuleStreamProfileOnManagedInstanceResponse from "./install-module-stream-profile-on-managed-instance-response";
export import InstallModuleStreamProfileOnManagedInstanceResponse = InstallModuleStreamProfileOnManagedInstanceResponse.InstallModuleStreamProfileOnManagedInstanceResponse;
import * as InstallPackagesOnManagedInstanceResponse from "./install-packages-on-managed-instance-response";
export import InstallPackagesOnManagedInstanceResponse = InstallPackagesOnManagedInstanceResponse.InstallPackagesOnManagedInstanceResponse;
import * as ListManagedInstanceAvailablePackagesResponse from "./list-managed-instance-available-packages-response";
export import ListManagedInstanceAvailablePackagesResponse = ListManagedInstanceAvailablePackagesResponse.ListManagedInstanceAvailablePackagesResponse;
import * as ListManagedInstanceAvailableSoftwareSourcesResponse from "./list-managed-instance-available-software-sources-response";
export import ListManagedInstanceAvailableSoftwareSourcesResponse = ListManagedInstanceAvailableSoftwareSourcesResponse.ListManagedInstanceAvailableSoftwareSourcesResponse;
import * as ListManagedInstanceErrataResponse from "./list-managed-instance-errata-response";
export import ListManagedInstanceErrataResponse = ListManagedInstanceErrataResponse.ListManagedInstanceErrataResponse;
import * as ListManagedInstanceInstalledPackagesResponse from "./list-managed-instance-installed-packages-response";
export import ListManagedInstanceInstalledPackagesResponse = ListManagedInstanceInstalledPackagesResponse.ListManagedInstanceInstalledPackagesResponse;
import * as ListManagedInstanceModulesResponse from "./list-managed-instance-modules-response";
export import ListManagedInstanceModulesResponse = ListManagedInstanceModulesResponse.ListManagedInstanceModulesResponse;
import * as ListManagedInstanceUpdatablePackagesResponse from "./list-managed-instance-updatable-packages-response";
export import ListManagedInstanceUpdatablePackagesResponse = ListManagedInstanceUpdatablePackagesResponse.ListManagedInstanceUpdatablePackagesResponse;
import * as ListManagedInstancesResponse from "./list-managed-instances-response";
export import ListManagedInstancesResponse = ListManagedInstancesResponse.ListManagedInstancesResponse;
import * as ManageModuleStreamsOnManagedInstanceResponse from "./manage-module-streams-on-managed-instance-response";
export import ManageModuleStreamsOnManagedInstanceResponse = ManageModuleStreamsOnManagedInstanceResponse.ManageModuleStreamsOnManagedInstanceResponse;
import * as RefreshSoftwareOnManagedInstanceResponse from "./refresh-software-on-managed-instance-response";
export import RefreshSoftwareOnManagedInstanceResponse = RefreshSoftwareOnManagedInstanceResponse.RefreshSoftwareOnManagedInstanceResponse;
import * as RemoveModuleStreamProfileFromManagedInstanceResponse from "./remove-module-stream-profile-from-managed-instance-response";
export import RemoveModuleStreamProfileFromManagedInstanceResponse = RemoveModuleStreamProfileFromManagedInstanceResponse.RemoveModuleStreamProfileFromManagedInstanceResponse;
import * as RemovePackagesFromManagedInstanceResponse from "./remove-packages-from-managed-instance-response";
export import RemovePackagesFromManagedInstanceResponse = RemovePackagesFromManagedInstanceResponse.RemovePackagesFromManagedInstanceResponse;
import * as SwitchModuleStreamOnManagedInstanceResponse from "./switch-module-stream-on-managed-instance-response";
export import SwitchModuleStreamOnManagedInstanceResponse = SwitchModuleStreamOnManagedInstanceResponse.SwitchModuleStreamOnManagedInstanceResponse;
import * as UpdateAllPackagesOnManagedInstancesInCompartmentResponse from "./update-all-packages-on-managed-instances-in-compartment-response";
export import UpdateAllPackagesOnManagedInstancesInCompartmentResponse = UpdateAllPackagesOnManagedInstancesInCompartmentResponse.UpdateAllPackagesOnManagedInstancesInCompartmentResponse;
import * as UpdateManagedInstanceResponse from "./update-managed-instance-response";
export import UpdateManagedInstanceResponse = UpdateManagedInstanceResponse.UpdateManagedInstanceResponse;
import * as UpdatePackagesOnManagedInstanceResponse from "./update-packages-on-managed-instance-response";
export import UpdatePackagesOnManagedInstanceResponse = UpdatePackagesOnManagedInstanceResponse.UpdatePackagesOnManagedInstanceResponse;
import * as AttachManagedInstancesToManagedInstanceGroupResponse from "./attach-managed-instances-to-managed-instance-group-response";
export import AttachManagedInstancesToManagedInstanceGroupResponse = AttachManagedInstancesToManagedInstanceGroupResponse.AttachManagedInstancesToManagedInstanceGroupResponse;
import * as AttachSoftwareSourcesToManagedInstanceGroupResponse from "./attach-software-sources-to-managed-instance-group-response";
export import AttachSoftwareSourcesToManagedInstanceGroupResponse = AttachSoftwareSourcesToManagedInstanceGroupResponse.AttachSoftwareSourcesToManagedInstanceGroupResponse;
import * as CreateManagedInstanceGroupResponse from "./create-managed-instance-group-response";
export import CreateManagedInstanceGroupResponse = CreateManagedInstanceGroupResponse.CreateManagedInstanceGroupResponse;
import * as DeleteManagedInstanceGroupResponse from "./delete-managed-instance-group-response";
export import DeleteManagedInstanceGroupResponse = DeleteManagedInstanceGroupResponse.DeleteManagedInstanceGroupResponse;
import * as DetachManagedInstancesFromManagedInstanceGroupResponse from "./detach-managed-instances-from-managed-instance-group-response";
export import DetachManagedInstancesFromManagedInstanceGroupResponse = DetachManagedInstancesFromManagedInstanceGroupResponse.DetachManagedInstancesFromManagedInstanceGroupResponse;
import * as DetachSoftwareSourcesFromManagedInstanceGroupResponse from "./detach-software-sources-from-managed-instance-group-response";
export import DetachSoftwareSourcesFromManagedInstanceGroupResponse = DetachSoftwareSourcesFromManagedInstanceGroupResponse.DetachSoftwareSourcesFromManagedInstanceGroupResponse;
import * as DisableModuleStreamOnManagedInstanceGroupResponse from "./disable-module-stream-on-managed-instance-group-response";
export import DisableModuleStreamOnManagedInstanceGroupResponse = DisableModuleStreamOnManagedInstanceGroupResponse.DisableModuleStreamOnManagedInstanceGroupResponse;
import * as EnableModuleStreamOnManagedInstanceGroupResponse from "./enable-module-stream-on-managed-instance-group-response";
export import EnableModuleStreamOnManagedInstanceGroupResponse = EnableModuleStreamOnManagedInstanceGroupResponse.EnableModuleStreamOnManagedInstanceGroupResponse;
import * as GetManagedInstanceGroupResponse from "./get-managed-instance-group-response";
export import GetManagedInstanceGroupResponse = GetManagedInstanceGroupResponse.GetManagedInstanceGroupResponse;
import * as InstallModuleStreamProfileOnManagedInstanceGroupResponse from "./install-module-stream-profile-on-managed-instance-group-response";
export import InstallModuleStreamProfileOnManagedInstanceGroupResponse = InstallModuleStreamProfileOnManagedInstanceGroupResponse.InstallModuleStreamProfileOnManagedInstanceGroupResponse;
import * as InstallPackagesOnManagedInstanceGroupResponse from "./install-packages-on-managed-instance-group-response";
export import InstallPackagesOnManagedInstanceGroupResponse = InstallPackagesOnManagedInstanceGroupResponse.InstallPackagesOnManagedInstanceGroupResponse;
import * as ListManagedInstanceGroupAvailableModulesResponse from "./list-managed-instance-group-available-modules-response";
export import ListManagedInstanceGroupAvailableModulesResponse = ListManagedInstanceGroupAvailableModulesResponse.ListManagedInstanceGroupAvailableModulesResponse;
import * as ListManagedInstanceGroupAvailablePackagesResponse from "./list-managed-instance-group-available-packages-response";
export import ListManagedInstanceGroupAvailablePackagesResponse = ListManagedInstanceGroupAvailablePackagesResponse.ListManagedInstanceGroupAvailablePackagesResponse;
import * as ListManagedInstanceGroupAvailableSoftwareSourcesResponse from "./list-managed-instance-group-available-software-sources-response";
export import ListManagedInstanceGroupAvailableSoftwareSourcesResponse = ListManagedInstanceGroupAvailableSoftwareSourcesResponse.ListManagedInstanceGroupAvailableSoftwareSourcesResponse;
import * as ListManagedInstanceGroupInstalledPackagesResponse from "./list-managed-instance-group-installed-packages-response";
export import ListManagedInstanceGroupInstalledPackagesResponse = ListManagedInstanceGroupInstalledPackagesResponse.ListManagedInstanceGroupInstalledPackagesResponse;
import * as ListManagedInstanceGroupModulesResponse from "./list-managed-instance-group-modules-response";
export import ListManagedInstanceGroupModulesResponse = ListManagedInstanceGroupModulesResponse.ListManagedInstanceGroupModulesResponse;
import * as ListManagedInstanceGroupsResponse from "./list-managed-instance-groups-response";
export import ListManagedInstanceGroupsResponse = ListManagedInstanceGroupsResponse.ListManagedInstanceGroupsResponse;
import * as ManageModuleStreamsOnManagedInstanceGroupResponse from "./manage-module-streams-on-managed-instance-group-response";
export import ManageModuleStreamsOnManagedInstanceGroupResponse = ManageModuleStreamsOnManagedInstanceGroupResponse.ManageModuleStreamsOnManagedInstanceGroupResponse;
import * as RemoveModuleStreamProfileFromManagedInstanceGroupResponse from "./remove-module-stream-profile-from-managed-instance-group-response";
export import RemoveModuleStreamProfileFromManagedInstanceGroupResponse = RemoveModuleStreamProfileFromManagedInstanceGroupResponse.RemoveModuleStreamProfileFromManagedInstanceGroupResponse;
import * as RemovePackagesFromManagedInstanceGroupResponse from "./remove-packages-from-managed-instance-group-response";
export import RemovePackagesFromManagedInstanceGroupResponse = RemovePackagesFromManagedInstanceGroupResponse.RemovePackagesFromManagedInstanceGroupResponse;
import * as UpdateAllPackagesOnManagedInstanceGroupResponse from "./update-all-packages-on-managed-instance-group-response";
export import UpdateAllPackagesOnManagedInstanceGroupResponse = UpdateAllPackagesOnManagedInstanceGroupResponse.UpdateAllPackagesOnManagedInstanceGroupResponse;
import * as UpdateManagedInstanceGroupResponse from "./update-managed-instance-group-response";
export import UpdateManagedInstanceGroupResponse = UpdateManagedInstanceGroupResponse.UpdateManagedInstanceGroupResponse;
import * as CreateManagementStationResponse from "./create-management-station-response";
export import CreateManagementStationResponse = CreateManagementStationResponse.CreateManagementStationResponse;
import * as DeleteManagementStationResponse from "./delete-management-station-response";
export import DeleteManagementStationResponse = DeleteManagementStationResponse.DeleteManagementStationResponse;
import * as GetManagementStationResponse from "./get-management-station-response";
export import GetManagementStationResponse = GetManagementStationResponse.GetManagementStationResponse;
import * as ListManagementStationsResponse from "./list-management-stations-response";
export import ListManagementStationsResponse = ListManagementStationsResponse.ListManagementStationsResponse;
import * as ListMirrorsResponse from "./list-mirrors-response";
export import ListMirrorsResponse = ListMirrorsResponse.ListMirrorsResponse;
import * as SynchronizeMirrorsResponse from "./synchronize-mirrors-response";
export import SynchronizeMirrorsResponse = SynchronizeMirrorsResponse.SynchronizeMirrorsResponse;
import * as SynchronizeSingleMirrorsResponse from "./synchronize-single-mirrors-response";
export import SynchronizeSingleMirrorsResponse = SynchronizeSingleMirrorsResponse.SynchronizeSingleMirrorsResponse;
import * as UpdateManagementStationResponse from "./update-management-station-response";
export import UpdateManagementStationResponse = UpdateManagementStationResponse.UpdateManagementStationResponse;
import * as CreateProfileResponse from "./create-profile-response";
export import CreateProfileResponse = CreateProfileResponse.CreateProfileResponse;
import * as DeleteProfileResponse from "./delete-profile-response";
export import DeleteProfileResponse = DeleteProfileResponse.DeleteProfileResponse;
import * as GetProfileResponse from "./get-profile-response";
export import GetProfileResponse = GetProfileResponse.GetProfileResponse;
import * as ListProfilesResponse from "./list-profiles-response";
export import ListProfilesResponse = ListProfilesResponse.ListProfilesResponse;
import * as UpdateProfileResponse from "./update-profile-response";
export import UpdateProfileResponse = UpdateProfileResponse.UpdateProfileResponse;
import * as GetManagedInstanceAnalyticContentResponse from "./get-managed-instance-analytic-content-response";
export import GetManagedInstanceAnalyticContentResponse = GetManagedInstanceAnalyticContentResponse.GetManagedInstanceAnalyticContentResponse;
import * as GetManagedInstanceContentResponse from "./get-managed-instance-content-response";
export import GetManagedInstanceContentResponse = GetManagedInstanceContentResponse.GetManagedInstanceContentResponse;
import * as SummarizeManagedInstanceAnalyticsResponse from "./summarize-managed-instance-analytics-response";
export import SummarizeManagedInstanceAnalyticsResponse = SummarizeManagedInstanceAnalyticsResponse.SummarizeManagedInstanceAnalyticsResponse;
import * as CreateScheduledJobResponse from "./create-scheduled-job-response";
export import CreateScheduledJobResponse = CreateScheduledJobResponse.CreateScheduledJobResponse;
import * as DeleteScheduledJobResponse from "./delete-scheduled-job-response";
export import DeleteScheduledJobResponse = DeleteScheduledJobResponse.DeleteScheduledJobResponse;
import * as GetScheduledJobResponse from "./get-scheduled-job-response";
export import GetScheduledJobResponse = GetScheduledJobResponse.GetScheduledJobResponse;
import * as ListScheduledJobsResponse from "./list-scheduled-jobs-response";
export import ListScheduledJobsResponse = ListScheduledJobsResponse.ListScheduledJobsResponse;
import * as RunScheduledJobNowResponse from "./run-scheduled-job-now-response";
export import RunScheduledJobNowResponse = RunScheduledJobNowResponse.RunScheduledJobNowResponse;
import * as UpdateScheduledJobResponse from "./update-scheduled-job-response";
export import UpdateScheduledJobResponse = UpdateScheduledJobResponse.UpdateScheduledJobResponse;
import * as ChangeAvailabilityOfSoftwareSourcesResponse from "./change-availability-of-software-sources-response";
export import ChangeAvailabilityOfSoftwareSourcesResponse = ChangeAvailabilityOfSoftwareSourcesResponse.ChangeAvailabilityOfSoftwareSourcesResponse;
import * as CreateEntitlementResponse from "./create-entitlement-response";
export import CreateEntitlementResponse = CreateEntitlementResponse.CreateEntitlementResponse;
import * as CreateSoftwareSourceResponse from "./create-software-source-response";
export import CreateSoftwareSourceResponse = CreateSoftwareSourceResponse.CreateSoftwareSourceResponse;
import * as DeleteSoftwareSourceResponse from "./delete-software-source-response";
export import DeleteSoftwareSourceResponse = DeleteSoftwareSourceResponse.DeleteSoftwareSourceResponse;
import * as GetErratumResponse from "./get-erratum-response";
export import GetErratumResponse = GetErratumResponse.GetErratumResponse;
import * as GetModuleStreamResponse from "./get-module-stream-response";
export import GetModuleStreamResponse = GetModuleStreamResponse.GetModuleStreamResponse;
import * as GetModuleStreamProfileResponse from "./get-module-stream-profile-response";
export import GetModuleStreamProfileResponse = GetModuleStreamProfileResponse.GetModuleStreamProfileResponse;
import * as GetPackageGroupResponse from "./get-package-group-response";
export import GetPackageGroupResponse = GetPackageGroupResponse.GetPackageGroupResponse;
import * as GetSoftwarePackageResponse from "./get-software-package-response";
export import GetSoftwarePackageResponse = GetSoftwarePackageResponse.GetSoftwarePackageResponse;
import * as GetSoftwareSourceResponse from "./get-software-source-response";
export import GetSoftwareSourceResponse = GetSoftwareSourceResponse.GetSoftwareSourceResponse;
import * as ListEntitlementsResponse from "./list-entitlements-response";
export import ListEntitlementsResponse = ListEntitlementsResponse.ListEntitlementsResponse;
import * as ListErrataResponse from "./list-errata-response";
export import ListErrataResponse = ListErrataResponse.ListErrataResponse;
import * as ListModuleStreamProfilesResponse from "./list-module-stream-profiles-response";
export import ListModuleStreamProfilesResponse = ListModuleStreamProfilesResponse.ListModuleStreamProfilesResponse;
import * as ListModuleStreamsResponse from "./list-module-streams-response";
export import ListModuleStreamsResponse = ListModuleStreamsResponse.ListModuleStreamsResponse;
import * as ListPackageGroupsResponse from "./list-package-groups-response";
export import ListPackageGroupsResponse = ListPackageGroupsResponse.ListPackageGroupsResponse;
import * as ListSoftwarePackagesResponse from "./list-software-packages-response";
export import ListSoftwarePackagesResponse = ListSoftwarePackagesResponse.ListSoftwarePackagesResponse;
import * as ListSoftwareSourceVendorsResponse from "./list-software-source-vendors-response";
export import ListSoftwareSourceVendorsResponse = ListSoftwareSourceVendorsResponse.ListSoftwareSourceVendorsResponse;
import * as ListSoftwareSourcesResponse from "./list-software-sources-response";
export import ListSoftwareSourcesResponse = ListSoftwareSourcesResponse.ListSoftwareSourcesResponse;
import * as SearchSoftwareSourceModuleStreamsResponse from "./search-software-source-module-streams-response";
export import SearchSoftwareSourceModuleStreamsResponse = SearchSoftwareSourceModuleStreamsResponse.SearchSoftwareSourceModuleStreamsResponse;
import * as SearchSoftwareSourceModulesResponse from "./search-software-source-modules-response";
export import SearchSoftwareSourceModulesResponse = SearchSoftwareSourceModulesResponse.SearchSoftwareSourceModulesResponse;
import * as SearchSoftwareSourcePackageGroupsResponse from "./search-software-source-package-groups-response";
export import SearchSoftwareSourcePackageGroupsResponse = SearchSoftwareSourcePackageGroupsResponse.SearchSoftwareSourcePackageGroupsResponse;
import * as UpdateSoftwareSourceResponse from "./update-software-source-response";
export import UpdateSoftwareSourceResponse = UpdateSoftwareSourceResponse.UpdateSoftwareSourceResponse;
import * as GetWorkRequestResponse from "./get-work-request-response";
export import GetWorkRequestResponse = GetWorkRequestResponse.GetWorkRequestResponse;
import * as ListWorkRequestErrorsResponse from "./list-work-request-errors-response";
export import ListWorkRequestErrorsResponse = ListWorkRequestErrorsResponse.ListWorkRequestErrorsResponse;
import * as ListWorkRequestLogsResponse from "./list-work-request-logs-response";
export import ListWorkRequestLogsResponse = ListWorkRequestLogsResponse.ListWorkRequestLogsResponse;
import * as ListWorkRequestsResponse from "./list-work-requests-response";
export import ListWorkRequestsResponse = ListWorkRequestsResponse.ListWorkRequestsResponse;
