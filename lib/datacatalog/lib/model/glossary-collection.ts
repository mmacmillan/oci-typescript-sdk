/**
 * Data Catalog API
 * Use the Data Catalog APIs to collect, organize, find, access, understand, enrich, and activate technical, business, and operational metadata.
 * OpenAPI spec version: 20190325
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
 * Results of a glossaries listing.  Glossary is an organizing concept for business terms to provide a unified semantic model across disparate data assets.
 *
 */
export interface GlossaryCollection {
  /**
   * Total number of items returned. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "count"?: number;
  /**
   * Collection of glossaries.
   */
  "items": Array<model.GlossarySummary>;
}

export namespace GlossaryCollection {
  export function getJsonObj(obj: GlossaryCollection): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.GlossarySummary.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
