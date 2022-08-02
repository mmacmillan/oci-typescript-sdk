/**
 * OpenSearch Service API
 * The OpenSearch service API provides access to OCI Search Service with OpenSearch.
 * OpenAPI spec version: 20180828
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Information about the update checkin event.
 */
export interface UpdateCheckinDetails {
  /**
   * The OCID of the OpenSearch cluster.
   */
  "clusterId": string;
}

export namespace UpdateCheckinDetails {
  export function getJsonObj(obj: UpdateCheckinDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateCheckinDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
