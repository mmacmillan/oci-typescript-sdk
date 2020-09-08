/**
 * LogAnalytics API
 * The LogAnalytics API for the LogAnalytics service.

 * OpenAPI spec version: 20200601
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Details of log analytics entity to be updated.
 *
 */
export interface UpdateLogAnalyticsEntityDetails {
  /**
   * Log analytics entity name. The name must be unique, within the tenancy, and cannot be changed.
   *
   */
  "name"?: string;
  /**
   * The OCID of the Management Agent.
   *
   */
  "managementAgentId"?: string;
  /**
   * The timezone region of the log analytics entity.
   *
   */
  "timezoneRegion"?: string;
  /**
   * The hostname where the entity represented here is actually present. This would be the output one would get if
   * they run `echo $HOSTNAME` on Linux or an equivalent OS command. This may be different from
   * management agents host since logs may be collected remotely.
   *
   */
  "hostname"?: string;
  /**
   * The name/value pairs for parameter values to be used in file patterns specified in log sources.
   *
   */
  "properties"?: { [key: string]: string };
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

export namespace UpdateLogAnalyticsEntityDetails {
  export function getJsonObj(obj: UpdateLogAnalyticsEntityDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
