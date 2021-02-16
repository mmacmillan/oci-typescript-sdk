/**
 * RoverCloudService API
 * A description of the RoverCloudService API.
 * OpenAPI spec version: 20201210
 *
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
 * The information required to create a RoverCluster.
 */
export interface CreateRoverClusterDetails {
  /**
   * A user-friendly name. Does not have to be unique, and it's changeable. Avoid entering confidential information.
   */
  "displayName": string;
  /**
   * The OCID of the compartment containing the RoverCluster.
   */
  "compartmentId": string;
  /**
   * Number of nodes desired in the cluster, between 5 and 15. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "clusterSize": number;
  "customerShippingAddress"?: model.ShippingAddress;
  /**
   * List of existing workloads that should be provisioned on the nodes.
   */
  "clusterWorkloads"?: Array<model.RoverWorkload>;
  /**
   * Root password for the rover cluster.
   */
  "superUserPassword"?: string;
  /**
   * The type of enclosure rover nodes in this cluster are shipped in.
   */
  "enclosureType"?: model.EnclosureType;
  /**
   * Password to unlock the rover cluster.
   */
  "unlockPassphrase"?: string;
  /**
   * Name of point of contact for this order if customer is picking up.
   */
  "pointOfContact"?: string;
  /**
   * Phone number of point of contact for this order if customer is picking up.
   */
  "pointOfContactPhoneNumber"?: string;
  /**
   * Preference for device delivery.
   */
  "shippingPreference"?: CreateRoverClusterDetails.ShippingPreference;
  /**
   * Shipping vendor of choice for orace to customer shipping.
   */
  "shippingVendor"?: string;
  /**
   * Expected date when customer wants to pickup the cluster if they chose customer pickup.
   */
  "timePickupExpected"?: Date;
  /**
   * Tracking Url for the shipped Rover Cluster.
   */
  "oracleShippingTrackingUrl"?: string;
  /**
   * The current state of the RoverCluster.
   */
  "lifecycleState"?: model.LifecycleState;
  /**
   * A property that can contain details on the lifecycle.
   */
  "lifecycleStateDetails"?: string;
  /**
   * The freeform tags associated with this resource, if any. Each tag is a simple key-value pair with no
   * predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Department\": \"Finance\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * The defined tags associated with this resource, if any. Each key is predefined and scoped to namespaces.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * The system tags associated with this resource, if any. The system tags are set by Oracle cloud infrastructure services. Each key is predefined and scoped to namespaces.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: `{orcl-cloud: {free-tier-retain: true}}`
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace CreateRoverClusterDetails {
  export enum ShippingPreference {
    OracleShipped = "ORACLE_SHIPPED",
    CustomerPickup = "CUSTOMER_PICKUP"
  }

  export function getJsonObj(obj: CreateRoverClusterDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "customerShippingAddress": obj.customerShippingAddress
          ? model.ShippingAddress.getJsonObj(obj.customerShippingAddress)
          : undefined,
        "clusterWorkloads": obj.clusterWorkloads
          ? obj.clusterWorkloads.map(item => {
              return model.RoverWorkload.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
