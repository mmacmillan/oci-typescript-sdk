/**
 * MySQL Database Service API
 * The API for the MySQL Database Service
 * OpenAPI spec version: 20190415
 * Contact: mysql-cloud-dev_ww_grp@oracle.com
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
 * Snapshot of the DbSystem details at the time of the backup
 *
 */
export interface DbSystemSnapshot {
  /**
   * The OCID of the DB System.
   */
  "id": string;
  /**
   * The user-friendly name for the DB System. It does not have to be unique.
   */
  "displayName": string;
  /**
   * User-provided data about the DB System.
   */
  "description"?: string;
  /**
   * The OCID of the compartment the DB System belongs in.
   */
  "compartmentId": string;
  /**
   * The OCID of the subnet the DB System is associated with.
   *
   */
  "subnetId": string;
  /**
   * The Availability Domain where the primary DB System should be located.
   *
   */
  "availabilityDomain"?: string;
  /**
   * The name of the Fault Domain the DB System is located in.
   *
   */
  "faultDomain"?: string;
  /**
   * The shape of the primary instances of the DB System. The shape
   * determines resources allocated to a DB System - CPU cores
   * and memory for VM shapes; CPU cores, memory and storage for non-VM
   * (or bare metal) shapes. To get a list of shapes, use (the
   * {@link #listShapes(ListShapesRequest) listShapes} operation.
   *
   */
  "shapeName"?: string;
  /**
   * Name of the MySQL Version in use for the DB System.
   */
  "mysqlVersion": string;
  /**
   * The username for the administrative user.
   */
  "adminUsername"?: string;
  "backupPolicy"?: model.BackupPolicy;
  /**
   * The OCID of the Configuration to be used for Instances in this DB System.
   */
  "configurationId"?: string;
  /**
   * Initial size of the data volume in GiBs that will be created and attached.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "dataStorageSizeInGBs": number;
  /**
   * The hostname for the primary endpoint of the DB System. Used for DNS.
   * The value is the hostname portion of the primary private IP's fully qualified domain name (FQDN)
   * (for example, \"dbsystem-1\" in FQDN \"dbsystem-1.subnet123.vcn1.oraclevcn.com\").
   * Must be unique across all VNICs in the subnet and comply with RFC 952 and RFC 1123.
   *
   */
  "hostnameLabel"?: string;
  /**
   * The IP address the DB System is configured to listen on. A private
   * IP address of the primary endpoint of the DB System. Must be an
   * available IP address within the subnet's CIDR. This will be a
   * \"dotted-quad\" style IPv4 address.
   *
   */
  "ipAddress"?: string;
  /**
   * The port for primary endpoint of the DB System to listen on. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "port"?: number;
  /**
   * The network port on which X Plugin listens for TCP/IP connections. This is the X Plugin equivalent of port.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "portX"?: number;
  /**
   * The network endpoints available for this DB System.
   *
   */
  "endpoints"?: Array<model.DbSystemEndpoint>;
  "maintenance": model.MaintenanceDetails;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace DbSystemSnapshot {
  export function getJsonObj(obj: DbSystemSnapshot): object {
    const jsonObj = {
      ...obj,
      ...{
        "backupPolicy": obj.backupPolicy
          ? model.BackupPolicy.getJsonObj(obj.backupPolicy)
          : undefined,

        "endpoints": obj.endpoints
          ? obj.endpoints.map(item => {
              return model.DbSystemEndpoint.getJsonObj(item);
            })
          : undefined,
        "maintenance": obj.maintenance
          ? model.MaintenanceDetails.getJsonObj(obj.maintenance)
          : undefined
      }
    };

    return jsonObj;
  }
}
