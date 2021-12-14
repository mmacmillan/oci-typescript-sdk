/**
 * Database Service API
 * The API for the Database Service. Use this API to manage resources such as databases and DB Systems. For more information, see [Overview of the Database Service](/iaas/Content/Database/Concepts/databaseoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: sic_dbaas_cp_us_grp@oracle.com
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * An Oracle Autonomous Database.
 *
 */
export interface AutonomousDatabase {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the Autonomous Database.
   */
  "id": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment.
   */
  "compartmentId": string;
  /**
   * The current state of the Autonomous Database.
   */
  "lifecycleState": AutonomousDatabase.LifecycleState;
  /**
   * Information about the current lifecycle state.
   */
  "lifecycleDetails"?: string;
  /**
   * The OCID of the key container that is used as the master encryption key in database transparent data encryption (TDE) operations.
   */
  "kmsKeyId"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the Oracle Cloud Infrastructure [vault](https://docs.cloud.oracle.com/Content/KeyManagement/Concepts/keyoverview.htm#concepts).
   */
  "vaultId"?: string;
  /**
   * KMS key lifecycle details.
   */
  "kmsKeyLifecycleDetails"?: string;
  /**
   * The OCID of the key container version that is used in database transparent data encryption (TDE) operations KMS Key can have multiple key versions. If none is specified, the current key version (latest) of the Key Id is used for the operation.
   *
   */
  "kmsKeyVersionId"?: string;
  /**
   * The database name.
   */
  "dbName": string;
  /**
   * Indicates if this is an Always Free resource. The default value is false. Note that Always Free Autonomous Databases have 1 CPU and 20GB of memory. For Always Free databases, memory and CPU cannot be scaled.
   *
   */
  "isFreeTier"?: boolean;
  /**
   * System tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
  /**
   * The date and time the Always Free database will be stopped because of inactivity. If this time is reached without any database activity, the database will automatically be put into the STOPPED state.
   *
   */
  "timeReclamationOfFreeAutonomousDatabase"?: Date;
  /**
   * The date and time the Always Free database will be automatically deleted because of inactivity. If the database is in the STOPPED state and without activity until this time, it will be deleted.
   *
   */
  "timeDeletionOfFreeAutonomousDatabase"?: Date;
  "backupConfig"?: model.AutonomousDatabaseBackupConfig;
  /**
   * Key History Entry.
   */
  "keyHistoryEntry"?: Array<model.AutonomousDatabaseKeyHistoryEntry>;
  /**
   * The number of OCPU cores to be made available to the database. For Autonomous Databases on dedicated Exadata infrastructure, the maximum number of cores is determined by the infrastructure shape. See [Characteristics of Infrastructure Shapes](https://www.oracle.com/pls/topic/lookup?ctx=en/cloud/paas/autonomous-database&id=ATPFG-GUID-B0F033C1-CC5A-42F0-B2E7-3CECFEDA1FD1) for shape details.
   * <p>
   **Note:** This parameter cannot be used with the `ocpuCount` parameter.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "cpuCoreCount": number;
  /**
    * The number of OCPU cores to be made available to the database. 
* <p>
The following points apply:
* - For Autonomous Databases on dedicated Exadata infrastructure, to provision less than 1 core, enter a fractional value in an increment of 0.1. For example, you can provision 0.3 or 0.4 cores, but not 0.35 cores. (Note that fractional OCPU values are not supported for Autonomous Databasese on shared Exadata infrastructure.)
* - To provision 1 or more cores, you must enter an integer between 1 and the maximum number of cores available for the infrastructure shape. For example, you can provision 2 cores or 3 cores, but not 2.5 cores. This applies to Autonomous Databases on both shared and dedicated Exadata infrastructure.
* <p>
For Autonomous Databases on dedicated Exadata infrastructure, the maximum number of cores is determined by the infrastructure shape. See [Characteristics of Infrastructure Shapes](https://www.oracle.com/pls/topic/lookup?ctx=en/cloud/paas/autonomous-database&id=ATPFG-GUID-B0F033C1-CC5A-42F0-B2E7-3CECFEDA1FD1) for shape details.
* <p>
**Note:** This parameter cannot be used with the `cpuCoreCount` parameter.
*  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
    */
  "ocpuCount"?: number;
  /**
   * The quantity of data in the database, in terabytes. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "dataStorageSizeInTBs": number;
  /**
   * The quantity of data in the database, in gigabytes. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "dataStorageSizeInGBs"?: number;
  /**
   * The infrastructure type this resource belongs to.
   */
  "infrastructureType"?: AutonomousDatabase.InfrastructureType;
  /**
   * True if the database uses [dedicated Exadata infrastructure](https://docs.cloud.oracle.com/Content/Database/Concepts/adbddoverview.htm).
   *
   */
  "isDedicated"?: boolean;
  /**
   * The Autonomous Container Database [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm).
   */
  "autonomousContainerDatabaseId"?: string;
  /**
   * The date and time the Autonomous Database was created.
   */
  "timeCreated"?: Date;
  /**
   * The user-friendly name for the Autonomous Database. The name does not have to be unique.
   */
  "displayName"?: string;
  /**
   * The URL of the Service Console for the Autonomous Database.
   */
  "serviceConsoleUrl"?: string;
  /**
   * The connection string used to connect to the Autonomous Database. The username for the Service Console is ADMIN. Use the password you entered when creating the Autonomous Database for the password value.
   */
  "connectionStrings"?: model.AutonomousDatabaseConnectionStrings;
  "connectionUrls"?: model.AutonomousDatabaseConnectionUrls;
  /**
   * The Oracle license model that applies to the Oracle Autonomous Database. Bring your own license (BYOL) allows you to apply your current on-premises Oracle software licenses to equivalent, highly automated Oracle PaaS and IaaS services in the cloud.
   * License Included allows you to subscribe to new Oracle Database software licenses and the Database service.
   * Note that when provisioning an Autonomous Database on [dedicated Exadata infrastructure](https://docs.cloud.oracle.com/Content/Database/Concepts/adbddoverview.htm), this attribute must be null because the attribute is already set at the
   * Autonomous Exadata Infrastructure level. When using [shared Exadata infrastructure](https://docs.cloud.oracle.com/Content/Database/Concepts/adboverview.htm#AEI), if a value is not specified, the system will supply the value of `BRING_YOUR_OWN_LICENSE`.
   *
   */
  "licenseModel"?: AutonomousDatabase.LicenseModel;
  /**
   * The amount of storage that has been used, in terabytes. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "usedDataStorageSizeInTBs"?: number;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
    * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the subnet the resource is associated with.
* <p>
**Subnet Restrictions:**
* - For bare metal DB systems and for single node virtual machine DB systems, do not use a subnet that overlaps with 192.168.16.16/28.
* - For Exadata and virtual machine 2-node RAC systems, do not use a subnet that overlaps with 192.168.128.0/20.
* - For Autonomous Database, setting this will disable public secure access to the database.
* <p>
These subnets are used by the Oracle Clusterware private interconnect on the database instance.
* Specifying an overlapping subnet will cause the private interconnect to malfunction.
* This restriction applies to both the client subnet and the backup subnet.
* 
    */
  "subnetId"?: string;
  /**
   * A list of the [OCIDs](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the network security groups (NSGs) that this resource belongs to. Setting this to an empty array after the list is created removes the resource from all NSGs. For more information about NSGs, see [Security Rules](https://docs.cloud.oracle.com/Content/Network/Concepts/securityrules.htm).
   * **NsgIds restrictions:**
   * - Autonomous Databases with private access require at least 1 Network Security Group (NSG). The nsgIds array cannot be empty.
   *
   */
  "nsgIds"?: Array<string>;
  /**
   * The private endpoint for the resource.
   */
  "privateEndpoint"?: string;
  /**
   * The private endpoint label for the resource. Setting this to an empty string, after the private endpoint database gets created, will change the same private endpoint database to the public endpoint database.
   */
  "privateEndpointLabel"?: string;
  /**
   * The private endpoint Ip address for the resource.
   */
  "privateEndpointIp"?: string;
  /**
   * A valid Oracle Database version for Autonomous Database.
   */
  "dbVersion"?: string;
  /**
   * Indicates if the Autonomous Database version is a preview version.
   */
  "isPreview"?: boolean;
  /**
    * The Autonomous Database workload type. The following values are valid:
* <p>
- OLTP - indicates an Autonomous Transaction Processing database
* - DW - indicates an Autonomous Data Warehouse database
* - AJD - indicates an Autonomous JSON Database
* - APEX - indicates an Autonomous Database with the Oracle APEX Application Development workload type.
* 
    */
  "dbWorkload"?: AutonomousDatabase.DbWorkload;
  /**
    * Indicates if the database-level access control is enabled.
* If disabled, database access is defined by the network security rules.
* If enabled, database access is restricted to the IP addresses defined by the rules specified with the `whitelistedIps` property. While specifying `whitelistedIps` rules is optional,
*  if database-level access control is enabled and no rules are specified, the database will become inaccessible. The rules can be added later using the `UpdateAutonomousDatabase` API operation or edit option in console.
* When creating a database clone, the desired access control setting should be specified. By default, database-level access control will be disabled for the clone.
* <p>
This property is applicable only to Autonomous Databases on the Exadata Cloud@Customer platform.
* 
    */
  "isAccessControlEnabled"?: boolean;
  /**
    * The client IP access control list (ACL). This feature is available for autonomous databases on [shared Exadata infrastructure](https://docs.cloud.oracle.com/Content/Database/Concepts/adboverview.htm#AEI) and on Exadata Cloud@Customer.
* Only clients connecting from an IP address included in the ACL may access the Autonomous Database instance.
* <p>
For shared Exadata infrastructure, this is an array of CIDR (Classless Inter-Domain Routing) notations for a subnet or VCN OCID.
* Use a semicolon (;) as a deliminator between the VCN-specific subnets or IPs.
* Example: `[\"1.1.1.1\",\"1.1.1.0/24\",\"ocid1.vcn.oc1.sea.<unique_id>\",\"ocid1.vcn.oc1.sea.<unique_id1>;1.1.1.1\",\"ocid1.vcn.oc1.sea.<unique_id2>;1.1.0.0/16\"]`
* For Exadata Cloud@Customer, this is an array of IP addresses or CIDR (Classless Inter-Domain Routing) notations.
* Example: `[\"1.1.1.1\",\"1.1.1.0/24\",\"1.1.2.25\"]`
* <p>
For an update operation, if you want to delete all the IPs in the ACL, use an array with a single empty string entry.
* 
    */
  "whitelistedIps"?: Array<string>;
  /**
   * This field will be null if the Autonomous Database is not Data Guard enabled or Access Control is disabled.
   * It's value would be `TRUE` if Autonomous Database is Data Guard enabled and Access Control is enabled and if the Autonomous Database uses primary IP access control list (ACL) for standby.
   * It's value would be `FALSE` if Autonomous Database is Data Guard enabled and Access Control is enabled and if the Autonomous Database uses different IP access control list (ACL) for standby compared to primary.
   *
   */
  "arePrimaryWhitelistedIpsUsed"?: boolean;
  /**
    * The client IP access control list (ACL). This feature is available for autonomous databases on [shared Exadata infrastructure](https://docs.cloud.oracle.com/Content/Database/Concepts/adboverview.htm#AEI) and on Exadata Cloud@Customer.
* Only clients connecting from an IP address included in the ACL may access the Autonomous Database instance.
* <p>
For shared Exadata infrastructure, this is an array of CIDR (Classless Inter-Domain Routing) notations for a subnet or VCN OCID.
* Use a semicolon (;) as a deliminator between the VCN-specific subnets or IPs.
* Example: `[\"1.1.1.1\",\"1.1.1.0/24\",\"ocid1.vcn.oc1.sea.<unique_id>\",\"ocid1.vcn.oc1.sea.<unique_id1>;1.1.1.1\",\"ocid1.vcn.oc1.sea.<unique_id2>;1.1.0.0/16\"]`
* For Exadata Cloud@Customer, this is an array of IP addresses or CIDR (Classless Inter-Domain Routing) notations.
* Example: `[\"1.1.1.1\",\"1.1.1.0/24\",\"1.1.2.25\"]`
* <p>
For an update operation, if you want to delete all the IPs in the ACL, use an array with a single empty string entry.
* 
    */
  "standbyWhitelistedIps"?: Array<string>;
  /**
   * Information about Oracle APEX Application Development.
   */
  "apexDetails"?: model.AutonomousDatabaseApex;
  /**
   * Indicates if auto scaling is enabled for the Autonomous Database CPU core count.
   *
   */
  "isAutoScalingEnabled"?: boolean;
  /**
   * Status of the Data Safe registration for this Autonomous Database.
   */
  "dataSafeStatus"?: AutonomousDatabase.DataSafeStatus;
  /**
   * Status of Operations Insights for this Autonomous Database.
   */
  "operationsInsightsStatus"?: AutonomousDatabase.OperationsInsightsStatus;
  /**
   * Status of Database Management for this Autonomous Database.
   */
  "databaseManagementStatus"?: AutonomousDatabase.DatabaseManagementStatus;
  /**
   * The date and time when maintenance will begin.
   */
  "timeMaintenanceBegin"?: Date;
  /**
   * The date and time when maintenance will end.
   */
  "timeMaintenanceEnd"?: Date;
  /**
   * Indicates whether the Autonomous Database is a refreshable clone.
   */
  "isRefreshableClone"?: boolean;
  /**
   * The date and time when last refresh happened.
   */
  "timeOfLastRefresh"?: Date;
  /**
   * The refresh point timestamp (UTC). The refresh point is the time to which the database was most recently refreshed. Data created after the refresh point is not included in the refresh.
   */
  "timeOfLastRefreshPoint"?: Date;
  /**
   * The date and time of next refresh.
   */
  "timeOfNextRefresh"?: Date;
  /**
   * The `DATABASE OPEN` mode. You can open the database in `READ_ONLY` or `READ_WRITE` mode.
   */
  "openMode"?: AutonomousDatabase.OpenMode;
  /**
   * The refresh status of the clone. REFRESHING indicates that the clone is currently being refreshed with data from the source Autonomous Database.
   */
  "refreshableStatus"?: AutonomousDatabase.RefreshableStatus;
  /**
   * The refresh mode of the clone. AUTOMATIC indicates that the clone is automatically being refreshed with data from the source Autonomous Database.
   */
  "refreshableMode"?: AutonomousDatabase.RefreshableMode;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the source Autonomous Database that was cloned to create the current Autonomous Database.
   */
  "sourceId"?: string;
  /**
   * The Autonomous Database permission level. Restricted mode allows access only to admin users.
   */
  "permissionLevel"?: AutonomousDatabase.PermissionLevel;
  /**
   * The timestamp of the last switchover operation for the Autonomous Database.
   */
  "timeOfLastSwitchover"?: Date;
  /**
   * The timestamp of the last failover operation.
   */
  "timeOfLastFailover"?: Date;
  /**
   * Indicates whether the Autonomous Database has Data Guard enabled.
   */
  "isDataGuardEnabled"?: boolean;
  /**
   * Indicates the number of seconds of data loss for a Data Guard failover. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "failedDataRecoveryInSeconds"?: number;
  "standbyDb"?: model.AutonomousDatabaseStandbySummary;
  /**
   * The Data Guard role of the Autonomous Container Database or Autonomous Database, if Autonomous Data Guard is enabled.
   *
   */
  "role"?: AutonomousDatabase.Role;
  /**
   * List of Oracle Database versions available for a database upgrade. If there are no version upgrades available, this list is empty.
   */
  "availableUpgradeVersions"?: Array<string>;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the key store.
   */
  "keyStoreId"?: string;
  /**
   * The wallet name for Oracle Key Vault.
   */
  "keyStoreWalletName"?: string;
  /**
   * The list of regions that support the creation of Autonomous Data Guard standby database.
   */
  "supportedRegionsToCloneTo"?: Array<string>;
  /**
   * Customer Contacts.
   */
  "customerContacts"?: Array<model.CustomerContact>;
  /**
   * The date and time that Autonomous Data Guard was enabled for an Autonomous Database where the standby was provisioned in the same region as the primary database.
   */
  "timeLocalDataGuardEnabled"?: Date;
  /**
   * The Autonomous Data Guard region type of the Autonomous Database. For Autonomous Databases on shared Exadata infrastructure, Data Guard associations have designated primary and standby regions, and these region types do not change when the database changes roles. The standby regions in Data Guard associations can be the same region designated as the primary region, or they can be remote regions. Certain database administrative operations may be available only in the primary region of the Data Guard association, and cannot be performed when the database using the \"primary\" role is operating in a remote Data Guard standby region.```
   */
  "dataguardRegionType"?: AutonomousDatabase.DataguardRegionType;
  /**
   * The date and time the Autonomous Data Guard role was switched for the Autonomous Database. For databases that have standbys in both the primary Data Guard region and a remote Data Guard standby region, this is the latest timestamp of either the database using the \"primary\" role in the primary Data Guard region, or database located in the remote Data Guard standby region.
   */
  "timeDataGuardRoleChanged"?: Date;
  /**
   * The list of [OCIDs](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of standby databases located in Autonomous Data Guard remote regions that are associated with the source database. Note that for shared Exadata infrastructure, standby databases located in the same region as the source primary database do not have OCIDs.
   */
  "peerDbIds"?: Array<string>;
  /**
   * Indicates whether the Autonomous Database requires mTLS connections.
   */
  "isMtlsConnectionRequired"?: boolean;
  /**
   * The maintenance schedule type of the Autonomous Database on shared Exadata infrastructure. The EARLY maintenance schedule of this Autonomous Database
   * follows a schedule that applies patches prior to the REGULAR schedule.The REGULAR maintenance schedule of this Autonomous Database follows the normal cycle.
   *
   */
  "autonomousMaintenanceScheduleType"?: AutonomousDatabase.AutonomousMaintenanceScheduleType;
  /**
   * list of scheduled operations
   */
  "scheduledOperations"?: Array<model.ScheduledOperationDetails>;
}

export namespace AutonomousDatabase {
  export enum LifecycleState {
    Provisioning = "PROVISIONING",
    Available = "AVAILABLE",
    Stopping = "STOPPING",
    Stopped = "STOPPED",
    Starting = "STARTING",
    Terminating = "TERMINATING",
    Terminated = "TERMINATED",
    Unavailable = "UNAVAILABLE",
    RestoreInProgress = "RESTORE_IN_PROGRESS",
    RestoreFailed = "RESTORE_FAILED",
    BackupInProgress = "BACKUP_IN_PROGRESS",
    ScaleInProgress = "SCALE_IN_PROGRESS",
    AvailableNeedsAttention = "AVAILABLE_NEEDS_ATTENTION",
    Updating = "UPDATING",
    MaintenanceInProgress = "MAINTENANCE_IN_PROGRESS",
    Restarting = "RESTARTING",
    Recreating = "RECREATING",
    RoleChangeInProgress = "ROLE_CHANGE_IN_PROGRESS",
    Upgrading = "UPGRADING",
    Inaccessible = "INACCESSIBLE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum InfrastructureType {
    Cloud = "CLOUD",
    CloudAtCustomer = "CLOUD_AT_CUSTOMER",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum LicenseModel {
    LicenseIncluded = "LICENSE_INCLUDED",
    BringYourOwnLicense = "BRING_YOUR_OWN_LICENSE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum DbWorkload {
    Oltp = "OLTP",
    Dw = "DW",
    Ajd = "AJD",
    Apex = "APEX",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum DataSafeStatus {
    Registering = "REGISTERING",
    Registered = "REGISTERED",
    Deregistering = "DEREGISTERING",
    NotRegistered = "NOT_REGISTERED",
    Failed = "FAILED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum OperationsInsightsStatus {
    Enabling = "ENABLING",
    Enabled = "ENABLED",
    Disabling = "DISABLING",
    NotEnabled = "NOT_ENABLED",
    FailedEnabling = "FAILED_ENABLING",
    FailedDisabling = "FAILED_DISABLING",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum DatabaseManagementStatus {
    Enabling = "ENABLING",
    Enabled = "ENABLED",
    Disabling = "DISABLING",
    NotEnabled = "NOT_ENABLED",
    FailedEnabling = "FAILED_ENABLING",
    FailedDisabling = "FAILED_DISABLING",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum OpenMode {
    ReadOnly = "READ_ONLY",
    ReadWrite = "READ_WRITE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum RefreshableStatus {
    Refreshing = "REFRESHING",
    NotRefreshing = "NOT_REFRESHING",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum RefreshableMode {
    Automatic = "AUTOMATIC",
    Manual = "MANUAL",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum PermissionLevel {
    Restricted = "RESTRICTED",
    Unrestricted = "UNRESTRICTED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum Role {
    Primary = "PRIMARY",
    Standby = "STANDBY",
    DisabledStandby = "DISABLED_STANDBY",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum DataguardRegionType {
    PrimaryDgRegion = "PRIMARY_DG_REGION",
    RemoteStandbyDgRegion = "REMOTE_STANDBY_DG_REGION",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum AutonomousMaintenanceScheduleType {
    Early = "EARLY",
    Regular = "REGULAR",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: AutonomousDatabase): object {
    const jsonObj = {
      ...obj,
      ...{
        "backupConfig": obj.backupConfig
          ? model.AutonomousDatabaseBackupConfig.getJsonObj(obj.backupConfig)
          : undefined,
        "keyHistoryEntry": obj.keyHistoryEntry
          ? obj.keyHistoryEntry.map(item => {
              return model.AutonomousDatabaseKeyHistoryEntry.getJsonObj(item);
            })
          : undefined,

        "connectionStrings": obj.connectionStrings
          ? model.AutonomousDatabaseConnectionStrings.getJsonObj(obj.connectionStrings)
          : undefined,
        "connectionUrls": obj.connectionUrls
          ? model.AutonomousDatabaseConnectionUrls.getJsonObj(obj.connectionUrls)
          : undefined,

        "apexDetails": obj.apexDetails
          ? model.AutonomousDatabaseApex.getJsonObj(obj.apexDetails)
          : undefined,

        "standbyDb": obj.standbyDb
          ? model.AutonomousDatabaseStandbySummary.getJsonObj(obj.standbyDb)
          : undefined,

        "customerContacts": obj.customerContacts
          ? obj.customerContacts.map(item => {
              return model.CustomerContact.getJsonObj(item);
            })
          : undefined,

        "scheduledOperations": obj.scheduledOperations
          ? obj.scheduledOperations.map(item => {
              return model.ScheduledOperationDetails.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AutonomousDatabase): object {
    const jsonObj = {
      ...obj,
      ...{
        "backupConfig": obj.backupConfig
          ? model.AutonomousDatabaseBackupConfig.getDeserializedJsonObj(obj.backupConfig)
          : undefined,
        "keyHistoryEntry": obj.keyHistoryEntry
          ? obj.keyHistoryEntry.map(item => {
              return model.AutonomousDatabaseKeyHistoryEntry.getDeserializedJsonObj(item);
            })
          : undefined,

        "connectionStrings": obj.connectionStrings
          ? model.AutonomousDatabaseConnectionStrings.getDeserializedJsonObj(obj.connectionStrings)
          : undefined,
        "connectionUrls": obj.connectionUrls
          ? model.AutonomousDatabaseConnectionUrls.getDeserializedJsonObj(obj.connectionUrls)
          : undefined,

        "apexDetails": obj.apexDetails
          ? model.AutonomousDatabaseApex.getDeserializedJsonObj(obj.apexDetails)
          : undefined,

        "standbyDb": obj.standbyDb
          ? model.AutonomousDatabaseStandbySummary.getDeserializedJsonObj(obj.standbyDb)
          : undefined,

        "customerContacts": obj.customerContacts
          ? obj.customerContacts.map(item => {
              return model.CustomerContact.getDeserializedJsonObj(item);
            })
          : undefined,

        "scheduledOperations": obj.scheduledOperations
          ? obj.scheduledOperations.map(item => {
              return model.ScheduledOperationDetails.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
