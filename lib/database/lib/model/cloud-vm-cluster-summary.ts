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
 * Details of the cloud VM cluster. Applies to Exadata Cloud Service instances only.
 *
 */
export interface CloudVmClusterSummary {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the cloud VM cluster.
   */
  "id": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment.
   */
  "compartmentId": string;
  /**
   * The name of the availability domain that the cloud Exadata infrastructure resource is located in.
   */
  "availabilityDomain": string;
  /**
    * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the subnet associated with the cloud VM cluster.
* <p>
**Subnet Restrictions:**
* - For Exadata and virtual machine 2-node RAC systems, do not use a subnet that overlaps with 192.168.128.0/20.
* <p>
These subnets are used by the Oracle Clusterware private interconnect on the database instance.
* Specifying an overlapping subnet will cause the private interconnect to malfunction.
* This restriction applies to both the client subnet and backup subnet.
* 
    */
  "subnetId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the backup network subnet associated with the cloud VM cluster.
   * <p>
   **Subnet Restriction:** See the subnet restrictions information for **subnetId**.
   *
   */
  "backupSubnetId"?: string;
  /**
   * A list of the [OCIDs](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the network security groups (NSGs) that this resource belongs to. Setting this to an empty array after the list is created removes the resource from all NSGs. For more information about NSGs, see [Security Rules](https://docs.cloud.oracle.com/Content/Network/Concepts/securityrules.htm).
   * **NsgIds restrictions:**
   * - Autonomous Databases with private access require at least 1 Network Security Group (NSG). The nsgIds array cannot be empty.
   *
   */
  "nsgIds"?: Array<string>;
  /**
   * A list of the [OCIDs](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the network security groups (NSGs) that the backup network of this DB system belongs to. Setting this to an empty array after the list is created removes the resource from all NSGs. For more information about NSGs, see [Security Rules](https://docs.cloud.oracle.com/Content/Network/Concepts/securityrules.htm). Applicable only to Exadata systems.
   *
   */
  "backupNetworkNsgIds"?: Array<string>;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the last maintenance update history entry. This value is updated when a maintenance update starts.
   */
  "lastUpdateHistoryEntryId"?: string;
  /**
   * The model name of the Exadata hardware running the cloud VM cluster.
   *
   */
  "shape": string;
  /**
   * The port number configured for the listener on the cloud VM cluster. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "listenerPort"?: number;
  /**
   * The current state of the cloud VM cluster.
   */
  "lifecycleState": CloudVmClusterSummary.LifecycleState;
  /**
   * The number of nodes in the cloud VM cluster.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "nodeCount"?: number;
  /**
   * The storage allocation for the disk group, in gigabytes (GB). Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "storageSizeInGBs"?: number;
  /**
   * The user-friendly name for the cloud VM cluster. The name does not need to be unique.
   */
  "displayName": string;
  /**
   * The date and time that the cloud VM cluster was created.
   */
  "timeCreated"?: Date;
  /**
   * Additional information about the current lifecycle state.
   */
  "lifecycleDetails"?: string;
  /**
   * The time zone of the cloud VM cluster. For details, see [Exadata Infrastructure Time Zones](https://docs.cloud.oracle.com/Content/Database/References/timezones.htm).
   */
  "timeZone"?: string;
  /**
   * The hostname for the cloud VM cluster.
   */
  "hostname": string;
  /**
   * The domain name for the cloud VM cluster.
   */
  "domain": string;
  /**
   * The number of CPU cores enabled on the cloud VM cluster. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "cpuCoreCount": number;
  /**
   * The cluster name for cloud VM cluster. The cluster name must begin with an alphabetic character, and may contain hyphens (-). Underscores (_) are not permitted. The cluster name can be no longer than 11 characters and is not case sensitive.
   *
   */
  "clusterName"?: string;
  /**
   * The percentage assigned to DATA storage (user data and database files).
   * The remaining percentage is assigned to RECO storage (database redo logs, archive logs, and recovery manager backups). Accepted values are 35, 40, 60 and 80. The default is 80 percent assigned to DATA storage. See [Storage Configuration](https://docs.cloud.oracle.com/Content/Database/Concepts/exaoverview.htm#Exadata) in the Exadata documentation for details on the impact of the configuration settings on storage.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "dataStoragePercentage"?: number;
  /**
   * If true, database backup on local Exadata storage is configured for the cloud VM cluster. If false, database backup on local Exadata storage is not available in the cloud VM cluster.
   *
   */
  "isLocalBackupEnabled"?: boolean;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the cloud Exadata infrastructure.
   */
  "cloudExadataInfrastructureId": string;
  /**
   * If true, sparse disk group is configured for the cloud VM cluster. If false, sparse disk group is not created.
   *
   */
  "isSparseDiskgroupEnabled"?: boolean;
  /**
   * A valid Oracle Grid Infrastructure (GI) software version.
   */
  "giVersion"?: string;
  /**
   * Operating system version of the image.
   */
  "systemVersion"?: string;
  /**
   * The public key portion of one or more key pairs used for SSH access to the cloud VM cluster.
   */
  "sshPublicKeys": Array<string>;
  /**
   * The Oracle license model that applies to the cloud VM cluster. The default is LICENSE_INCLUDED.
   *
   */
  "licenseModel"?: CloudVmClusterSummary.LicenseModel;
  /**
   * The type of redundancy configured for the cloud Vm cluster.
   * NORMAL is 2-way redundancy.
   * HIGH is 3-way redundancy.
   *
   */
  "diskRedundancy"?: CloudVmClusterSummary.DiskRedundancy;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the Single Client Access Name (SCAN) IP addresses associated with the cloud VM cluster.
   * SCAN IP addresses are typically used for load balancing and are not assigned to any interface.
   * Oracle Clusterware directs the requests to the appropriate nodes in the cluster.
   * <p>
   **Note:** For a single-node DB system, this list is empty.
   *
   */
  "scanIpIds"?: Array<string>;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the virtual IP (VIP) addresses associated with the cloud VM cluster.
   * The Cluster Ready Services (CRS) creates and maintains one VIP address for each node in the Exadata Cloud Service instance to
   * enable failover. If one node fails, the VIP is reassigned to another active node in the cluster.
   * <p>
   **Note:** For a single-node DB system, this list is empty.
   *
   */
  "vipIds"?: Array<string>;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the DNS record for the SCAN IP addresses that are associated with the cloud VM cluster.
   *
   */
  "scanDnsRecordId"?: string;
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
   * The FQDN of the DNS record for the SCAN IP addresses that are associated with the cloud VM cluster.
   *
   */
  "scanDnsName"?: string;
  /**
   * The OCID of the zone the cloud VM cluster is associated with.
   *
   */
  "zoneId"?: string;
}

export namespace CloudVmClusterSummary {
  export enum LifecycleState {
    Provisioning = "PROVISIONING",
    Available = "AVAILABLE",
    Updating = "UPDATING",
    Terminating = "TERMINATING",
    Terminated = "TERMINATED",
    Failed = "FAILED",
    MaintenanceInProgress = "MAINTENANCE_IN_PROGRESS",
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

  export enum DiskRedundancy {
    High = "HIGH",
    Normal = "NORMAL",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: CloudVmClusterSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
